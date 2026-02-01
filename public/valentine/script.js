// Initialize configuration
const config = window.VALENTINE_CONFIG;

// State tracking for button cycling
let noClickCount = 0;
let yesClickCount = 0;
let noButtonTransformed = false;
let question1YesCount = 0;

// Validate configuration
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    // Validate colors
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Default color values
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Set page title
document.title = config.pageTitle;

// Initialize function
function initializeValentinePage() {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, I have a question 🥺👉👈`;
    
    // Hide question 1 and start with question 2 (love meter)
    document.getElementById('question1').classList.add('hidden');
    document.getElementById('question2').classList.remove('hidden');
    
    // Set second question texts (now the first question)
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    
    // Setup handler for next button
    document.getElementById('nextBtn').onclick = () => showNextQuestion(3);
    
    // Set third question texts (now the second question)
    document.getElementById('question3Header').textContent = config.questions.third.header;
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Setup button handlers - Yes goes straight through, No updates copy and moves
    const noBtn3 = document.getElementById('noBtn3');
    const yesBtn3 = document.getElementById('yesBtn3');
    
    if (noBtn3) {
        noBtn3.onclick = function() {
            handleNoClick(this, yesBtn3);
        };
    }
    
    if (yesBtn3) {
        yesBtn3.onclick = function() {
            // Yes button goes straight to celebration
            showFinalMessage();
        };
    }

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();
}

// Initialize the page content when DOM is loaded (or immediately if already loaded)
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initializeValentinePage);
} else {
    // DOM is already ready, initialize immediately
    initializeValentinePage();
}

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Set random position for floating elements
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Function to show next question
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
    
    // Hide title when showing question 3 or celebration
    const titleElement = document.getElementById('valentineTitle');
    if (titleElement && (questionNumber === 3 || questionNumber === 'celebration')) {
        titleElement.style.display = 'none';
    }
}

// Function to move buttons when clicked (keeps them visible on screen)
function moveButton(button) {
    // Force position:fixed first to get accurate measurements
    button.style.position = 'fixed';
    
    // Wait a tiny bit for the style to apply, then get measurements
    setTimeout(() => {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get button dimensions - use offsetWidth/Height for accuracy
        const buttonWidth = button.offsetWidth || 200; // Generous fallback
        const buttonHeight = button.offsetHeight || 60; // Generous fallback
        
        console.log('Viewport:', viewportWidth, 'x', viewportHeight);
        console.log('Button size:', buttonWidth, 'x', buttonHeight);
        
        // Adjust margins based on screen size - smaller margins for mobile
        let safeMargin = 100;
        if (viewportWidth < 480) {
            safeMargin = 20; // Much smaller margin for small phones
        } else if (viewportWidth < 768) {
            safeMargin = 40; // Medium margin for tablets
        }
        
        console.log('Safe margin:', safeMargin);
        
        // Calculate the safe zone for button placement
        const minX = safeMargin;
        const maxX = viewportWidth - buttonWidth - safeMargin;
        const minY = safeMargin;
        const maxY = viewportHeight - buttonHeight - safeMargin;
        
        console.log('Safe X range:', minX, 'to', maxX);
        console.log('Safe Y range:', minY, 'to', maxY);
        
        // Ensure we have valid ranges
        if (maxX <= minX || maxY <= minY) {
            console.warn('Screen too small for safe positioning, using minimal margins');
            // Fallback for very small screens
            const fallbackMargin = 10;
            const fallbackX = fallbackMargin + (Math.random() * Math.max(10, viewportWidth - buttonWidth - 2 * fallbackMargin));
            const fallbackY = fallbackMargin + (Math.random() * Math.max(10, viewportHeight - buttonHeight - 2 * fallbackMargin));
            
            button.style.left = Math.max(fallbackMargin, Math.min(fallbackX, viewportWidth - buttonWidth - fallbackMargin)) + 'px';
            button.style.top = Math.max(fallbackMargin, Math.min(fallbackY, viewportHeight - buttonHeight - fallbackMargin)) + 'px';
            button.style.zIndex = '1000';
            button.style.transform = 'none';
            button.style.margin = '0';
            return;
        }
        
        // Generate random position within SAFE boundaries only
        let randomX = minX + (Math.random() * (maxX - minX));
        let randomY = minY + (Math.random() * (maxY - minY));
        
        // Triple-check bounds (safety net)
        randomX = Math.max(minX, Math.min(randomX, maxX));
        randomY = Math.max(minY, Math.min(randomY, maxY));
        
        // Final clamp to ensure absolutely within viewport
        randomX = Math.max(safeMargin, Math.min(randomX, viewportWidth - buttonWidth - safeMargin));
        randomY = Math.max(safeMargin, Math.min(randomY, viewportHeight - buttonHeight - safeMargin));
        
        console.log('Final position:', randomX, randomY);
        
        // Apply position
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
        button.style.zIndex = '1000';
        button.style.transform = 'none'; // Remove any transforms
        button.style.margin = '0'; // Remove any margins
    }, 10);
}

// Handle No button clicks with cycling
function handleNoClick(button, yesButton) {
    noClickCount++;
    
    console.log('No button clicked, count:', noClickCount); // Debug log
    
    if (noClickCount <= 10) {
        // Update button text to next variant AND move
        // Button starts as "No", so first click shows index 0, second shows index 1, etc.
        const textIndex = Math.min(noClickCount - 1, config.buttonVariants.noTexts.length - 1);
        const newText = config.buttonVariants.noTexts[textIndex];
        console.log('Setting button text to:', newText); // Debug log
        button.textContent = newText;
        moveButton(button);
    } else {
        // After 10 clicks: both buttons become "Yes!" and go to celebration
        console.log('Transforming to Yes button'); // Debug log
        button.textContent = "Yes!";
        button.classList.remove('no-btn');
        button.classList.add('yes-btn');
        button.onclick = () => showFinalMessage();
        // Reset No button position to center
        button.style.position = 'relative';
        button.style.left = 'auto';
        button.style.top = 'auto';
        
        // Also update Yes button to match
        if (yesButton) {
            yesButton.textContent = "Yes!";
        }
    }
}

// Handle Yes button clicks - goes straight through to celebration
function handleYesClick(button) {
    showFinalMessage();
}

// Show final celebration message
function showFinalMessage() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    
    // Hide the title
    const titleElement = document.getElementById('valentineTitle');
    if (titleElement) {
        titleElement.style.display = 'none';
    }
    
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    if (config.celebration.footer) {
        const footerElement = document.getElementById('celebrationFooter');
        if (footerElement) {
            footerElement.textContent = config.celebration.footer;
        }
    }
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    createHeartExplosion();
}

// Love meter functionality
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;
    
    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';
        
        // Show different messages based on the value
        if (value >= 5000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = config.loveMessages.extreme;
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.high;
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Initialize love meter
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setInitialPosition);
} else {
    setInitialPosition();
}
window.addEventListener('load', setInitialPosition);

// Celebration function
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    // Create heart explosion effect
    createHeartExplosion();
}

// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');
    const musicModal = document.getElementById('musicModal');
    const startMusicBtn = document.getElementById('startMusicBtn');

    // Only show controls if music is enabled in config
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        if (musicModal) musicModal.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Handle music modal
    if (startMusicBtn && musicModal) {
        startMusicBtn.addEventListener('click', () => {
            bgMusic.play().then(() => {
                musicToggle.textContent = config.music.stopText;
                musicModal.style.display = 'none';
            }).catch(error => {
                console.log("Music play failed:", error);
                musicModal.style.display = 'none';
            });
        });
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
} 
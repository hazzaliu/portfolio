// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Caitlin",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Caitlin, I have a question 🥺👉👈",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like spending time with me?",                // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you like me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            header: "Oops, the real question is...",                   // Header text
            text: "Will you be my Valentine?",                         // The big question!
            yesBtn: "Yes!",                                            // Text for "Yes" button
            noBtn: "No"                                                // Text for "No" button
        }
    },

    // Button cycling variants for No and Yes buttons
    buttonVariants: {
        noTexts: [
            "No.",
            "Are you sure?",
            "Like… really sure?",
            "What if I ask nicely?",
            "What if I bring snacks?",
            "Okay but consider: us. 💘",
            "This feels like a misclick.",
            "One more chance… please?",
            "I'll be very well-behaved (mostly).",
            "Final answer? I'll wait. 😌"
        ],
        yesTexts: [
            "Yes.",
            "Yes… you're sure?",
            "YES. I'm absolutely sure."
        ]
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You like me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",               // Shows when they go past 1000%
        normal: "And beyond! 🥰"                            // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Okay… locked in. 💘",
        message: "Caitlin — I'm really grateful you're in my life.\nYou've made me feel safe, looked after, and quietly understood… which is rare, and I don't take it for granted.\n\nI adore how smart and independent you are — the kind of person who chooses her life, not just falls into it. And I'd love to do so much more with you: more days, more little adventures, more \"this is nice\" moments that turn into memories.\n\nI'm pretty sure we could build something genuinely beautiful together.\n\nAlso, I promise to protect you from peanuts with the seriousness of a five-star bodyguard. 🥜🚫\nThank you for taking care of me — and for loving me.\n\nLooking forward to seeing you for our Valentine's Day date!",
        footer: "Now come here. I've got a hug with your name on it.",
        emojis: "💘💖✨"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "/valentine/music/love.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
'use client';

import { useEffect } from 'react';

export default function ValentinePage() {
  useEffect(() => {
    // Prevent multiple loads
    if ((window as any).VALENTINE_LOADED) {
      return;
    }
    (window as any).VALENTINE_LOADED = true;

    // Load fonts and styles
    if (!document.querySelector('link[href*="Dancing+Script"]')) {
      const fontLink = document.createElement('link');
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;600&display=swap';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }

    if (!document.querySelector('link[href="/valentine/styles.css"]')) {
      const styleLink = document.createElement('link');
      styleLink.href = '/valentine/styles.css';
      styleLink.rel = 'stylesheet';
      document.head.appendChild(styleLink);
    }

    // Load scripts in order
    const loadScript = (src: string, id: string) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.getElementById(id)) {
          resolve(null);
          return;
        }
        
        const script = document.createElement('script');
        script.id = id;
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadAllScripts = async () => {
      try {
        await loadScript('/valentine/config.js', 'valentine-config');
        await loadScript('/valentine/theme.js', 'valentine-theme');
        await loadScript('/valentine/script.js', 'valentine-script');
      } catch (error) {
        console.error('Failed to load scripts:', error);
      }
    };

    loadAllScripts();
  }, []);

  return (
    <>
      {/* Music Modal */}
      <div className="music-modal" id="musicModal">
        <div className="music-modal-content">
          <h2>💝 Welcome! 💝</h2>
          <p>This experience is best enjoyed with music. Would you like to play some romantic tunes?</p>
          <button className="music-modal-btn" id="startMusicBtn">Yes, play music! 🎵</button>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="floating-elements">
        {/* Hearts and bears will be added here by JavaScript */}
      </div>

      {/* Main Content Container */}
      <div className="container">
        <h1 id="valentineTitle"></h1>
        
        {/* Music Player */}
        <div id="musicControls" className="music-controls">
          <button id="musicToggle" className="music-btn">🎵 Play Music</button>
          <audio id="bgMusic" loop>
            <source id="musicSource" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* First Question */}
        <div className="question-section" id="question1">
          <h2 id="question1Text"></h2>
          <button className="cute-btn" id="yesBtn1"></button>
          <button className="cute-btn" id="noBtn1"></button>
        </div>

        {/* Second Question (Love Meter) */}
        <div className="question-section hidden" id="question2">
          <h2 id="question2Text"></h2>
          {/* Love meter settings: min="0" max="10000" */}
          <div className="love-meter">
            <input type="range" min="0" max="10000" defaultValue="100" className="slider" id="loveMeter" />
            <p>
              <span className="love-value-container">
                <span id="startText"></span> (<span id="loveValue">100</span>%)
              </span>
              <span id="extraLove" className="hidden"></span>
            </p>
          </div>
          <button className="cute-btn" id="nextBtn"></button>
        </div>

        {/* Final Question */}
        <div className="question-section hidden" id="question3">
          <h3 id="question3Header" className="question-header"></h3>
          <h2 id="question3Text"></h2>
          <button className="cute-btn final-yes" id="yesBtn3"></button>
          <button className="cute-btn" id="noBtn3"></button>
        </div>

        {/* Celebration message */}
        <div className="celebration hidden" id="celebration">
          <h2 id="celebrationTitle"></h2>
          <p className="celebration-message" id="celebrationMessage"></p>
          <p className="celebration-footer" id="celebrationFooter"></p>
          <p className="celebration-text" id="celebrationEmojis"></p>
        </div>
      </div>
    </>
  );
}

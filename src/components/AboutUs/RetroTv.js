import React, { useState, useRef } from 'react';
import tvImage from '../../images/RetroTv.png';
import fairImage from '../../images/about/fair.png';

const RetroTv = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleLoad = (event) => {
    // The rest of your handleLoad function...
  };

  const handlePlayVideo = () => {
    const iframe = videoRef.current;
    const player = iframe.contentWindow;
    player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  };

  // Disables context menu
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  // Disables keyboard shortcuts
  const disableKeyboardControls = (event) => {
    // Key codes for spacebar and arrow keys, add more if needed
    const forbiddenKeys = [' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (forbiddenKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className="tv-container" style={{ position: 'relative' }}>
      {!videoEnded ? (
        <>
          <iframe
            ref={videoRef}
            className="video-element"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QMEhws2qCPE?controls=1&rel=0&autoplay=0&modestbranding=1&disablekb=1"
            title="YouTube video player"
            frameBorder="0"
            onLoad={handleLoad}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ zIndex: 1 }}
            onContextMenu={handleContextMenu}
          ></iframe>
          <div
            className="overlay"
            onClick={handlePlayVideo}
            onContextMenu={handleContextMenu}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 2, // Higher z-index so it's above the iframe
              pointerEvents: 'none', // This will make the overlay not respond to mouse events except onClick
            }}
          ></div>
        </>
      ) : (
        <img src={fairImage} alt="Ending Display" className="ending-image" />
      )}
      <img src={tvImage} alt="Retro TV" className="tv-frame" />
    </div>
  );
};

export default RetroTv;

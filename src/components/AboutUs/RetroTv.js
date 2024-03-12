import React, { useState } from 'react';
import tvImage from '../../images/RetroTv.png'; // Ensure this is the correct path
import fairImage from '../../images/about/fair.png'; // The image to show when video ends

const RetroTv = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  // This function will be triggered when the iframe's content loads
  const handleLoad = (event) => {
    // Accessing the contentWindow property of the iframe
    const iframe = event.target;
    const player = iframe.contentWindow;

    // Listen for messages from the iframe
    window.addEventListener('message', (event) => {
      try {
        const message = JSON.parse(event.data);

        // Check if the video has ended
        if (message.event === 'onStateChange' && message.info === 0) {
          setVideoEnded(true);
        }
      } catch (error) {
        // In case the message data isn't JSON or another error occurs
        console.error('Message from iframe could not be parsed:', error);
      }
    });

    // Post a message to the iframe to add event listeners
    player.postMessage(
      '{"event":"listening","id":null,"channel":"widget","func":"addEventListener","args":["onStateChange"]}',
      '*'
    );
  };

  return (
    <div className="tv-container">
      {!videoEnded ? (
        // If the video has not ended, display the YouTube player
        <iframe
          className="video-element"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IQHs-IEyCkQ?enablejsapi=1&version=3&playerapiid=ytplayer&rel=0"
          title="YouTube video player"
          frameBorder="0"
          onLoad={handleLoad} // Call handleLoad when iframe has loaded
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        // Otherwise, display the 'fair' image
        <img src={fairImage} alt="Ending Display" className="ending-image" />
      )}
      <img src={tvImage} alt="Retro TV" className="tv-frame" />
    </div>
  );
};

export default RetroTv;

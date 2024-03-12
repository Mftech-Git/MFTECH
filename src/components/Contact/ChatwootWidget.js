import { useEffect } from 'react';

const ChatwootWidget = () => {
  useEffect(() => {
    // Only load Chatwoot script if it's not already present
    if (!window.chatwootSDK) {
      const BASE_URL = "https://app.chatwoot.com";
      const chatwootSettings = {
        position: "right",
        type: "standard",
        launcherTitle: "Need Help? Chat with Us",
      };
      window.chatwootSettings = chatwootSettings;

      const script = document.createElement("script");
      script.src = `${BASE_URL}/packs/js/sdk.js`;
      script.defer = true;
      script.async = true;
      script.onload = () => {
        window.chatwootSDK.run({
          websiteToken: 'U6bkTQmaHCzQ4LyC2dNe4qv8',
          baseUrl: BASE_URL,
        });
      };

      document.body.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ChatwootWidget;

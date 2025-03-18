import { useEffect } from 'react';

const Jotform = () => {
  useEffect(() => {
    // Load JotForm script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize JotForm agent when script is loaded
    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: "https://agent.jotform.com/0195a7b40cbd75e39980a6bbbd7966c4274e",
          rootId: "JotformAgent-0195a7b40cbd75e39980a6bbbd7966c4274e",
          formID: "0195a7b40cbd75e39980a6bbbd7966c4274e",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isDraggable: false,
          background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
          buttonBackgroundColor: "#0066C3",
          buttonIconColor: "#FFFFFF",
          variant: false,
          customizations: {
            "greeting": "Yes",
            "greetingMessage": "Hi! How can I assist you?",
            "openByDefault": "No",
            "pulse": "Yes",
            "position": "left",
            "autoOpenChatIn": "0"
          },
          isVoice: undefined
        });
      }
    };

    // Cleanup on component unmount
    return () => {
      // Remove the script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Remove any elements created by JotForm
      const jotformElement = document.getElementById("JotformAgent-0195a7b40cbd75e39980a6bbbd7966c4274e");
      if (jotformElement) {
        jotformElement.remove();
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

// Need to declare the AgentInitializer on the window for TypeScript
declare global {
  interface Window {
    AgentInitializer: {
      init: (config: any) => void;
    };
  }
}

export default Jotform; 
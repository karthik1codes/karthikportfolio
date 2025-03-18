import { useEffect } from 'react';

const ElevenLabsAgent = () => {
  useEffect(() => {
    // Create the ElevenLabs agent element
    const agentElement = document.createElement('elevenlabs-convai');
    agentElement.setAttribute('agent-id', 'cF10VGctXuf1RFQ43Q8B');

    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';

    // Add the agent element to the body
    document.body.appendChild(agentElement);
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      // Remove the agent element
      if (agentElement.parentNode) {
        agentElement.parentNode.removeChild(agentElement);
      }
      // Remove the script
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id': string;
      }, HTMLElement>;
    }
  }
}

export default ElevenLabsAgent; 
'use client'; // if you're using Next.js 13+ with app directory

import { useEffect } from 'react';

export default function VoiceWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="ASC6dRUi3Pm2pAUezTdH"></elevenlabs-convai>`,
      }}
    />
  );
}

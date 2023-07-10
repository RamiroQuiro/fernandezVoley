import { useState } from 'react';
import Image from 'next/image';

export default function PhotoViewer({ src, alt, shareUrls }) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  return (
    <div className="relative w-full h-96">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      <button
        className="absolute bottom-0 right-0 bg-white p-2 rounded-md shadow-md"
        onClick={() => setShowShareOptions(!showShareOptions)}
      >
        Compartir
      </button>
      {showShareOptions && (
        <div className="absolute bottom-0 right-0 bg-white p-2 rounded-md shadow-md flex flex-col items-start">
          {shareUrls.map(({ url, label }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
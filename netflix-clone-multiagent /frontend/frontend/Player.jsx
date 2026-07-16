import React, { useRef, useEffect } from 'react';

export default function Player({ videoUrl }) {
  const videoRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Now Playing</h2>
        <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            autoPlay
            src={videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
          />
        </div>
        <p className="mt-4 text-zinc-400 text-sm">
          Streaming Live via Multi-Agent Infrastructure.
        </p>
      </div>
    </div>
  );
}

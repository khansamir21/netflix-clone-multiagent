import React, { useState, useEffect } from 'react';
import Player from './Player';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetching movies list from Backend Express Server
  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log("Backend not running yet, using sample data.", err));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent">
        <h1 className="text-3xl font-extrabold text-red-600 tracking-wider">NETFLIX</h1>
      </header>

      {/* Hero Section or Video Player */}
      {selectedVideo ? (
        <div className="relative">
          <button 
            onClick={() => setSelectedVideo(null)} 
            className="absolute top-4 left-4 z-50 bg-red-600 px-4 py-2 rounded font-bold hover:bg-red-700 transition"
          >
            ← Back to Home
          </button>
          <Player videoUrl={selectedVideo} />
        </div>
      ) : (
        <div className="px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Trending Now (Multi-Agent Connected)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div 
                  key={movie.id} 
                  className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedVideo(movie.videoUrl)}
                >
                  <img src={movie.thumbnail} alt={movie.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{movie.title}</h3>
                    <p className="text-red-500 text-sm mt-2 font-bold">▶ Click to Stream</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-500">Loading dynamic movies from Express server...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

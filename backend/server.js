const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy Database (Movies with Stream URLs)
const movies = [
  {
    id: "1",
    title: "Big Buck Bunny (Sample Stream)",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Big_Buck_Bunny_Main_Poster.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "2",
    title: "Sintel (HLS Stream Example)",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sintel_poster.jpg",
    videoUrl: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
  }
];

// API Endpoints
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/', (req, res) => {
  res.send('Netflix Multi-Agent Backend Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// --- Middleware ---
app.use(bodyParser.json());
app.use(express.static(__dirname)); // підтягує CSS, JS, HTML

// --- Фронтенд сторінки ---
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/edit.html', (req, res) => res.sendFile(path.join(__dirname, 'edit.html')));
app.get('/create.html', (req, res) => res.sendFile(path.join(__dirname, 'create.html')));

// --- API ---
let movies = [
  { id: 'm1', title: 'Inception', genre: 'Sci-Fi', duration: 148, rating: 8.8, description: 'A thief who steals corporate secrets through dream-sharing technology.' },
  { id: 'm2', title: 'The Shawshank Redemption', genre: 'Drama', duration: 142, rating: 9.3, description: 'Two imprisoned men bond over a number of years.' },
  { id: 'm3', title: 'The Dark Knight', genre: 'Action', duration: 152, rating: 9.0, description: 'Batman faces the Joker, a criminal mastermind.' }
];

app.get('/api/movies', (req, res) => res.json(movies));
app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  if (!movie) return res.status(404).json({ message: 'Not found' });
  res.json(movie);
});
app.post('/api/movies', (req, res) => {
  const newMovie = { id: 'm' + Date.now(), ...req.body };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});
app.put('/api/movies/:id', (req, res) => {
  const idx = movies.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  movies[idx] = { ...movies[idx], ...req.body };
  res.json(movies[idx]);
});
app.delete('/api/movies/:id', (req, res) => {
  movies = movies.filter(m => m.id !== req.params.id);
  res.json({ message: 'Deleted successfully' });
});

// --- Запуск сервера ---
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

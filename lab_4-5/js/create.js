document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('createForm');
  const API_URL = 'http://localhost:5000/api/movies';

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const duration = parseInt(document.getElementById('duration').value, 10);
    const rating = parseFloat(document.getElementById('rating').value);
    const genre = document.getElementById('genre').value;

    if (!title) { alert('Title is required.'); return; }
    if (description.length < 10) { alert('Description must be at least 10 characters.'); return; }
    if (!duration || duration < 1) { alert('Duration must be at least 1 minute.'); return; }
    if (isNaN(rating) || rating < 1 || rating > 10) { alert('Rating must be between 1 and 10.'); return; }
    if (!genre) { alert('Please select a genre.'); return; }

    const newMovie = { title, description, duration, rating, genre };

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie)
    });

    if (res.ok) {
      alert('Movie added successfully!');
      window.location.href = 'index.html';
    } else {
      alert('Error adding movie.');
    }
  });
});

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(location.search);
  const id = params.get('id'); // дістаємо id з URL
  const form = document.getElementById('editForm');
  const API_URL = 'http://localhost:5000/api/movies';

  if (!form || !id) {
    alert('No movie id.');
    window.location.href = 'index.html';
    return;
  }

  // Завантажуємо дані фільму
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error('Movie not found');

    const movie = await res.json();

    document.getElementById('movieId').value = movie.id || '';
    document.getElementById('title').value = movie.title || '';
    document.getElementById('description').value = movie.description || '';
    document.getElementById('duration').value = movie.duration || 90;
    document.getElementById('rating').value = movie.rating || 5.0;
    document.getElementById('genre').value = movie.genre || '';

  } catch (err) {
    alert(err.message);
    window.location.href = 'index.html';
    return;
  }

  // Обробка submit форми
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const updated = {
      title: document.getElementById('title').value.trim(),
      description: document.getElementById('description').value.trim(),
      duration: parseInt(document.getElementById('duration').value, 10),
      rating: parseFloat(document.getElementById('rating').value),
      genre: document.getElementById('genre').value
    };

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });

      if (res.ok) {
        alert('Movie updated successfully!');
        window.location.href = 'index.html';
      } else {
        const error = await res.json();
        alert(`Update failed: ${error.message || res.statusText}`);
      }
    } catch (err) {
      alert(`Update failed: ${err.message}`);
    }
  });
});

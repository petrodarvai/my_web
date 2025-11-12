document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('movieContainer');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const clearBtn = document.getElementById('clearBtn');
  const sortToggle = document.getElementById('sortToggle');
  const countBtn = document.getElementById('countBtn');
  const totalValue = document.getElementById('totalValue');
  const tabs = document.querySelectorAll('.tab');
  const API_URL = 'http://localhost:5000/api/movies';

  function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  async function loadMovies() {
    const res = await fetch(API_URL);
    return await res.json();
  }

  async function removeMovieById(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }

  function renderMovies(list) {
    if (!list || list.length === 0) {
      container.innerHTML = '<p>No movies found.</p>';
      totalValue.textContent = '0 min';
      return;
    }
    container.innerHTML = list.map(m => `
      <div class="movie-card" data-id="${m.id}">
        <div class="movie-thumb">235x180</div>
        <h3>${escapeHtml(m.title)}</h3>
        <p class="small-muted"><strong>Genre:</strong> ${escapeHtml(m.genre)}</p>
        <p><strong>Duration:</strong> ${m.duration} min</p>
        <p><strong>Rating:</strong> ${parseFloat(m.rating).toFixed(1)} / 10</p>
        <p>${escapeHtml(m.description)}</p>
        <div class="card-actions">
          <button class="btn edit" data-action="edit" data-id="${m.id}">Edit</button>
          <button class="btn remove" data-action="remove" data-id="${m.id}">Remove</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-action="edit"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        window.location.href = 'edit.html?id=' + encodeURIComponent(id);
      });
    });
    container.querySelectorAll('[data-action="remove"]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Are you sure you want to remove this movie?')) {
          await removeMovieById(id);
          refresh();
        }
      });
    });
  }

  async function refresh() {
    let movies = await loadMovies();
    const q = searchInput.value.trim().toLowerCase();
    if (q) {
      movies = movies.filter(m => (m.title || '').toLowerCase().includes(q));
    }
    if (sortToggle.checked) {
      movies = movies.slice().sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating));
    }
    renderMovies(movies);
  }

  countBtn.addEventListener('click', async () => {
    const movies = await loadMovies();
    const q = searchInput.value.trim().toLowerCase();
    const visible = q ? movies.filter(m => (m.title||'').toLowerCase().includes(q)) : movies;
    const total = visible.reduce((s,m) => s + Number(m.duration || 0), 0);
    totalValue.textContent = total + ' min';
    alert('Total duration: ' + total + ' min');
  });

  searchBtn.addEventListener('click', () => refresh());
  clearBtn.addEventListener('click', () => { searchInput.value = ''; refresh(); });

  tabs.forEach(tab => tab.addEventListener('click', () => {
    const t = (tab.textContent||'').trim().toLowerCase();
    if (t.includes('create') || t.includes('add')) window.location.href = 'create.html';
    else window.location.href = 'index.html';
  }));

  refresh();
});

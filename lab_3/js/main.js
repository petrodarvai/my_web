const movies = [
  { title: "Inception", desc: "A mind-bending thriller by Christopher Nolan.", duration: 148, rating: 8.8 },
  { title: "The Matrix", desc: "A hacker discovers a shocking truth about reality.", duration: 136, rating: 8.7 },
  { title: "Interstellar", desc: "Explorers travel through a wormhole in space.", duration: 169, rating: 8.6 },
  { title: "The Shawshank Redemption", desc: "A story of hope and friendship in prison.", duration: 142, rating: 9.3 },
  { title: "Avatar", desc: "A marine explores an alien world called Pandora.", duration: 162, rating: 7.9 },
];

const container = document.getElementById("movieContainer");
const sortToggle = document.getElementById("sortToggle");
const countBtn = document.getElementById("countBtn");
const totalValue = document.getElementById("totalValue");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

function renderMovies(data) {
  container.innerHTML = "";
  data.forEach(m => {
    container.insertAdjacentHTML("beforeend", `
      <div class="card">
        <div class="card-img">Poster</div>
        <div class="card-body">
          <h3>${m.title}</h3>
          <p>${m.desc}</p>
          <p><strong>Duration:</strong> ${m.duration} min</p>
          <p><strong>Rating:</strong> ${m.rating}</p>
          <div class="updated">Last updated 3 mins ago</div>
        </div>
        <div class="card-actions">
          <button class="edit-btn" onclick="alert('Editing ${m.title}')">Edit</button>
          <button class="remove-btn" onclick="alert('Removing ${m.title}')">Remove</button>
        </div>
      </div>
    `);
  });
}

renderMovies(movies);

sortToggle.addEventListener("change", () => {
  let sorted = [...movies];
  if (sortToggle.checked) {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  renderMovies(sorted);
});

countBtn.addEventListener("click", () => {
  const total = movies.reduce((sum, m) => sum + m.duration, 0);
  totalValue.textContent = `${total} min`;
});

searchBtn.addEventListener("click", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
  renderMovies(filtered);
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderMovies(movies);
});

// ====== Navigation Tabs ======
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const text = tab.textContent.trim();

      if (text === 'All Movies') {
        window.location.href = 'index.html';
      } else if (text === 'Add Movie') {
        window.location.href = 'create.html';
      }

      // опціонально: оновити активний клас
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // показуємо фільми
  const container = document.getElementById('movieContainer');
  const movies = JSON.parse(localStorage.getItem('movies')) || [];

  if (movies.length === 0) {
    container.innerHTML = '<p>No movies added yet.</p>';
  } else {
    container.innerHTML = movies.map(movie => `
      <div class="movie-card">
        <h3>${movie.title}</h3>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Duration:</strong> ${movie.duration} min</p>
        <p><strong>Rating:</strong> ${movie.rating.toFixed(1)} / 10</p>
        <p>${movie.description}</p>
      </div>
    `).join('');
  }

  // ====== Навігаційні вкладки ======
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const text = tab.textContent.trim();

      if (text === 'All Movies') {
        window.location.href = 'index.html';
      } else if (text === 'Add Movie') {
        window.location.href = 'create.html';
      }

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('movieContainer');

  // 🧱 Твої базові (вшиті) фільми
  const defaultMovies = [
    {
      title: 'Inception',
      genre: 'Sci-Fi',
      duration: 148,
      rating: 9.0,
      description: 'A mind-bending thriller about dreams within dreams.'
    },
    {
      title: 'Interstellar',
      genre: 'Adventure',
      duration: 169,
      rating: 8.6,
      description: 'A journey through space and time to save humanity.'
    },
    {
      title: 'The Batman',
      genre: 'Action',
      duration: 175,
      rating: 8.3,
      description: 'Dark and gritty detective story in Gotham City.'
    }
  ];

  // 📦 Ті, що збережені користувачем
  const userMovies = JSON.parse(localStorage.getItem('movies')) || [];

  // 🔗 Обʼєднуємо їх
  const allMovies = [...defaultMovies, ...userMovies];

  // 🖼️ Виводимо все на сторінку
  if (allMovies.length === 0) {
    container.innerHTML = '<p>No movies added yet.</p>';
  } else {
    container.innerHTML = allMovies.map(movie => `
      <div class="movie-card">
        <h3>${movie.title}</h3>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Duration:</strong> ${movie.duration} min</p>
        <p><strong>Rating:</strong> ${movie.rating.toFixed(1)} / 10</p>
        <p>${movie.description}</p>
      </div>
    `).join('');
  }

  // ====== Навігаційні вкладки ======
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const text = tab.textContent.trim();

      if (text === 'All Movies') {
        window.location.href = 'index.html';
      } else if (text === 'Add Movie') {
        window.location.href = 'create.html';
      }

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});


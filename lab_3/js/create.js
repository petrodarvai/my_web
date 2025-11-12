document.getElementById('createForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const genre = document.getElementById('genre').value.trim();
  const duration = +document.getElementById('duration').value;
  const rating = parseFloat(document.getElementById('rating').value); // дробові значення
  const description = document.getElementById('description').value.trim();

  if (title.length < 2) {
    alert('❌ Title must be at least 2 characters.');
    return;
  }
  if (duration <= 0) {
    alert('❌ Duration must be greater than 0.');
    return;
  }
  if (rating < 0.1 || rating > 10) {
    alert('❌ Rating must be between 0.1 and 10.');
    return;
  }
  if (description.length < 10) {
    alert('❌ Description must be at least 10 characters.');
    return;
  }

  // Зчитуємо існуючі фільми або створюємо новий список
  const movies = JSON.parse(localStorage.getItem('movies')) || [];

  // Додаємо новий фільм
  movies.push({
    title,
    genre,
    duration,
    rating,
    description
  });

  // Зберігаємо назад у localStorage
  localStorage.setItem('movies', JSON.stringify(movies));

  alert('✅ Movie added successfully!');
  window.location.href = 'index.html'; // Повертаємось на головну
});

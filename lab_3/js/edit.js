document.getElementById('editForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const rating = +document.getElementById('rating').value;

  if (title.length < 2) {
    alert('❌ Title too short!');
    return;
  }

  if (rating < 1 || rating > 10) {
    alert('❌ Rating must be between 1 and 10.');
    return;
  }

  alert('✅ Movie details updated successfully!');
});

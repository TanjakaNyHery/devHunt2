const btn = document.getElementById('commenter');

btn.addEventListener('click', () => {
  const form = document.getElementById('newCommentaire');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
});

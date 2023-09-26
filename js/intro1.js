setTimeout(() => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.style.animation = 'fadeIn 5s ease-in-out forwards';
  });
}, 30000);

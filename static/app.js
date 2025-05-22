document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-nav button');
  const cards = document.querySelectorAll('.menu-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (cardCategory === category || category === 'sve') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

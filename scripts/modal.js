const modalOpen = document.querySelector('.selection-link');
const modal=document.querySelector('.modal-container');
const modalClosed= document.querySelector('.modal-close-button');

modalOpen.addEventListener('click', function() {
  modal.classList.add('modal-container-open');
});

modalClosed.addEventListener('click', function() {
  modal.classList.remove('modal-container-open');
});

modal.addEventListener('click', function() {
  modal.classList.remove('modal-container-open');
});

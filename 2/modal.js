let modalOpen = document.querySelector('.selection-link');
let modal=document.querySelector('.modal-container');
let modalClosed= document.querySelector('.modal-close-button');

modalOpen.addEventListener('click', function() {
  modal.classList.add('modal-container-open');
});

modalClosed.addEventListener('click', function() {
  modal.classList.remove('modal-container-open');
});

const modalOpen = document.querySelector('.contacts-button')
const modalClose = document.querySelector('.button-modal-close')
const dialog = document.querySelector('.modal-window')

modalOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  dialog.showModal();
})

modalClose.addEventListener('click', function () {
  dialog.close();
})

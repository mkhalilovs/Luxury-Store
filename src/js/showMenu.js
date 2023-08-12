// Getting the modal
const modal = document.getElementById('myModal');

// Getting the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, opening the modal
document
  .querySelector('.material-symbols-outlined')
  .addEventListener('click', function () {
    modal.style.display = 'block';
  });
// When the user clicks on <span> (x), closing the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, closing the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

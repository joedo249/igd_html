const modal = document.querySelector('.modal');

// When the user clicks on the button, open the modal
function displayModal() {
  modal.style.display = 'block';
}

// The modal is displayed 3 seconds after page load
window.onload = function () {
  setTimeout(function () {
    modal.style.display = 'block';
  }, 3000);
};

// When the user clicks on X or the button close the modal
function hideModal() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target = modal) {
    modal.style.display = 'none';
  }
};
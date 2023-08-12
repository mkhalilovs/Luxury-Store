const leftButton = document.querySelector('.prev');
const rightButton = document.querySelector('.next');

// Function for left and right arrows in the homepage
leftButton.addEventListener('click', function () {
  rightButton.classList.remove('active');
  document.querySelector('.images__div').scrollLeft -= 400;
  leftButton.classList.add('active');
});

rightButton.addEventListener('click', function () {
  leftButton.classList.remove('active');
  document.querySelector('.images__div').scrollLeft += 400;
  rightButton.classList.add('active');
});

// Storing header and navigation in variables
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

// Getting height of nav
const navHeight = nav.getBoundingClientRect().height;

// Creating stickyNav function for getting the entries and adding if statements
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

// Creating new IntersectionObserver API and passing the function
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '100px',
});

headerObserver.observe(header);

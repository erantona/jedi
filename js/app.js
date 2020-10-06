const navslide = () => {
  var header = document.querySelector('.header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // /togglemap
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `nav-links-fade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    burger.classList.toggle('anime');
  });
};
navslide();

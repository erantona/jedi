let flag = false;
const navslide = () => {
  var header = document.querySelector('.header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // /togglemap
  burger.addEventListener('click', () => {
    flag = true;
    console.log(flag);
    nav.classList.toggle('nav-active');
    document.querySelector('nav').style.backgroundColor = '#fff';
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
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
      if (flag) {
        nav.classList.toggle('nav-active');
        console.log('ok');
        flag = false;
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          }
        });
      }
      burger.classList.toggle('anime');
    });
  }
};
navslide();

const flick = () => {
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');
};

flick();

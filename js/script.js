// menu

(function () {
  const nav = document.querySelector('.nav__nav-bar')
  const navOpen = document.querySelector('.nav-btn-open')
  const navClose = document.querySelector('.nav-btn-close')
  const navLinks = document.querySelectorAll('.nav__link')

  navOpen.addEventListener('click', () => {
    nav.classList.add('nav__nav-bar-active');
  });

  navClose.addEventListener('click', () => {
    nav.classList.remove('nav__nav-bar-active');
  });

  if (window.innerWidth <= 860) {
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].onclick = () => {
        console.log('asdasd')
        nav.classList.remove('nav__nav-bar-active');
      }
    }
  }

}());


// menu top position

(function() {
  const header = document.querySelector('.nav');
  const main = document.querySelector('.main');
  window.onscroll = () => {
    let x = window.innerWidth;
    if (x < 1150) {
      header.classList.add('nav-active');
    } else if (window.pageYOffset > 80) {
      header.classList.add('nav-active');
    } else {
      header.classList.remove('nav-active');
    }

  };

}());


// scroll

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.nav').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

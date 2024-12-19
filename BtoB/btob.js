const leftAnimal = document.querySelector('.animal-left-j');
const rightAnimal = document.querySelector('.animal-right-j');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(leftAnimal);
observer.observe(rightAnimal);

document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});

$(document).ready(function() {
  function checkInView() {
    $('.fade-in').each(function() {
      var element = $(this);
      var elementOffset = element.offset().top;
      var windowHeight = $(window).scrollTop() + $(window).height();

      if (windowHeight > elementOffset + 100) {
        element.addClass('fade-in-visible');
      }
    });
  }

  $(window).on('scroll', checkInView);
  checkInView();
});

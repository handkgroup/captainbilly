// contact sectoin


const formContainer = document.getElementById('form-container');
const reviewContainer = document.getElementById('review-container');
const thankYouContainer = document.getElementById('thank-you-container');
const rvNoneElements = document.querySelectorAll('#rv-none');

const companyInput = document.getElementById('company');
const nameInput = document.getElementById('name');
const furiganaInput = document.getElementById('furigana');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const reviewCompany = document.getElementById('review-company');
const reviewName = document.getElementById('review-name');
const reviewFurigana = document.getElementById('review-furigana');
const reviewPhone = document.getElementById('review-phone');
const reviewEmail = document.getElementById('review-email');
const reviewMessage = document.getElementById('review-message');

const submitButton = document.querySelector('.submit-btn');
const noButton = document.getElementById('no-btn');
const yesButton = document.getElementById('yes-btn');

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    reviewCompany.textContent = companyInput.value;
    reviewName.textContent = nameInput.value;
    reviewFurigana.textContent = furiganaInput.value;
    reviewPhone.textContent = phoneInput.value;
    reviewEmail.textContent = emailInput.value;
    reviewMessage.textContent = messageInput.value;

    formContainer.style.display = 'none';
    reviewContainer.style.display = 'flex';
    rvNoneElements.forEach(element => element.style.display = 'none');
});

noButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
    reviewContainer.style.display = 'none';
    rvNoneElements.forEach(element => element.style.display = 'unset');
});

yesButton.addEventListener('click', function() {
    reviewContainer.style.display = 'none';
    thankYouContainer.style.display = 'flex';
    rvNoneElements.forEach(element => element.style.display = 'none');
});



// animations
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






document.addEventListener('DOMContentLoaded', function () {
    // Toggle navbar
    var navbar = document.querySelector('.navbar');
    var hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  
    // Smooth scrolling
    var scrollLinks = document.querySelectorAll('.nav-links li a, .btn');
  
    scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        var target = document.querySelector(link.getAttribute('href'));
        var position = target.offsetTop;
  
        window.scrollTo({
          top: position - 60,
          behavior: 'smooth'
        });
  
        // Close navbar on mobile
        if (navbar.classList.contains('active')) {
          navbar.classList.remove('active');
        }
      });
    });
  
    // Submit form
    var contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Perform form submission logic here
        // ...
  
        // Reset form
        contactForm.reset();
      });
    }
  });
  
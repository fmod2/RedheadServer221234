// script.js
// Simulate loading completion after 3 seconds
setTimeout(function() {
    document.querySelector('.loading-container').classList.add('fade-out');
    setTimeout(function() {
      window.location.href = 'index.html'; // Redirect to other-page.html
    }, 1000);
  }, 3000);
  

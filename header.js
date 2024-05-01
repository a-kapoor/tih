document.addEventListener('DOMContentLoaded', function() {
  var headerElement = document.querySelector('header');
  
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.log('Error loading header:', error);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleButton = document.getElementById('toggle-button');
const content = document.getElementById('content');

toggleButton.addEventListener('click', function() {
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});

const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
    });
});

modal.addEventListener('click', function() {
    modal.style.display = 'none';
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Send form data to server or perform other actions
        alert('Form submitted successfully!');
        form.reset();
    }
});


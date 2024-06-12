

AOS.init({
    once: true, // Whether animation should happen only once - while scrolling down
});

// Toggle mobile menu
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || subject === '' || message === '') {
        document.getElementById('formStatus').innerText = 'Please fill out all fields.';
        document.getElementById('formStatus').style.color = 'red';
    } else {
        document.getElementById('formStatus').innerText = 'Thank you for contacting us, ' + name + '. We will get back to you shortly.';
        document.getElementById('formStatus').style.color = 'green';
        document.getElementById('contactForm').reset();
    }
});

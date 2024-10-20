document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent.`);
        e.target.reset(); // Clear the form
    } else {
        alert('Please fill in all fields.');
    }
});


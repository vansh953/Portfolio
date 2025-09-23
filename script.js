document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_7qofehk', 'template_s0460s9', this)
      .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
      }, (error) => {
        console.error('Failed to send message:', error);
        alert('Oops! Something went wrong.');
      });
  });
});

 
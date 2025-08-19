function sendMessage() {
  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending your message.');
    return;
  }

  const whatsappMessage = `Hi Miss J! My name is ${name}. ${message} You can reach me at ${email}.`;
  const whatsappUrl = `https://wa.me/917009276323?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

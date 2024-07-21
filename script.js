const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".menu__button");


menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
});
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'service_9nnnj9d';
  const templateID = 'template_k2zm0hh';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          alert('Message sent successfully!');
          document.getElementById('myForm').reset();
      }, (err) => {
          alert('Failed to send message. Please try again.');
          console.log('Failed to send email. Error:', err);
      });
});



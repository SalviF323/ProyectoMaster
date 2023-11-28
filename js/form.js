const btn = document.getElementById('botonForm');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_hi5dk3c';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mensaje enviado';
      alert('Mensaje enviado');
    }, (err) => {
      btn.value = 'Mensaje enviado';
      alert(JSON.stringify(err));
    });
});
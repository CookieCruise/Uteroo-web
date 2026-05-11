// FUNCIONES DEL FORMULARIO DE CONTACTO

// Manejar envío del formulario
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aquí puedes integrar con tu backend o servicio de email
    // Por ahora, mostramos un alert
    alert(`¡Gracias ${name}! Hemos recibido tu mensaje y te responderemos pronto a ${email}`);
    
    // Limpiar formulario
    event.target.reset();
    
    // TODO: Integrar con backend o servicio de email
    // Ejemplo con fetch:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert('¡Mensaje enviado exitosamente!');
        event.target.reset();
    })
    .catch(error => {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    });
    */
}

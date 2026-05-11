// FUNCIONES DEL FORMULARIO DE CONTACTO

// Manejar envío del formulario
async function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Deshabilitar botón mientras se envía
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert(`¡Gracias ${name}! Hemos recibido tu mensaje y te responderemos pronto a ${email}`);
            event.target.reset();
        } else {
            alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
            console.error('Error:', data);
        }
    } catch (error) {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
        console.error('Error:', error);
    } finally {
        // Rehabilitar botón
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

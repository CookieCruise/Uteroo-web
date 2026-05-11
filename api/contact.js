// Vercel Serverless Function para manejar el formulario de contacto
// Usa Resend para enviar emails

export default async function handler(req, res) {
    // Solo permitir POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { name, email, message } = req.body;

        // Validar datos
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Email inválido' });
        }

        // Enviar email usando Resend
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'contacto@uteroo.app',
                to: 'patuz.dev@gmail.com',
                reply_to: email,
                subject: `Nuevo mensaje de contacto de ${name}`,
                html: `
                    <h2>Nuevo mensaje desde el formulario de contacto</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                    <hr>
                    <p style="color: #666; font-size: 12px;">
                        Para responder, simplemente haz clic en "Responder" y tu mensaje llegará directamente a ${email}
                    </p>
                `
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Error de Resend:', data);
            return res.status(500).json({ 
                error: 'Error al enviar el email',
                details: data 
            });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Email enviado exitosamente',
            id: data.id 
        });

    } catch (error) {
        console.error('Error en el servidor:', error);
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            details: error.message 
        });
    }
}

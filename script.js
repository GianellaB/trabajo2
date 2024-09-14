// Almacenar el elemento del formulario de suscripción
const subscribeForm = document.getElementById('subscribe-form');

// Añadir un evento de envío al formulario de suscripción
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const email = document.getElementById('email').value;

    // Simular una petición para el envío del email
    alert(`Gracias por suscribirte, ${email}!`);
    subscribeForm.reset(); // Reiniciar el formulario después del envío
});

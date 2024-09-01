document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que el formulario se envíe de manera tradicional

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Llama a la función para enviar los datos al back-end
    loginUser(email, password);
});

function loginUser(email, password) {
    // Envía los datos al servidor usando fetch
    fetch('https://sign-ai-web.vercel.app/Selector', {  // URL de tu API de inicio de sesión
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mail: mail,
            password: password
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirige al usuario o guarda el token
            console.log("Inicio de sesión exitoso:", data);
            // Por ejemplo, guarda el token en el almacenamiento local
            localStorage.setItem('token', data.token);
            // Redirige al usuario a otra página
            window.location.href = '../5pantalla/index.html';
        } else {
            // Muestra un mensaje de error
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
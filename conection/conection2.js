
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("signinForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Evita que el formulario se envíe de manera tradicional
        const password = document.getElementById("password").value;
        const username = document.getElementById("username").value;

        console.log(document.getElementById("username"))

        console.log(email, password, username);

    
        // Llama a la función para enviar los datos al back-end
        loginUser(email, password, username);
    });
    
    });
    // Datos de ejemplo de usuarios
const users = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'mypassword' }
];



document.addEventListener('DOMContentLoaded', function() {

    
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Evita que el formulario se envíe de manera tradicional

        console.log("AAAAAAAAAAAa");

        const Mail = document.getElementById("email").value;
        const Contraseña = document.getElementById("password").value;
        const NombreUsuario = document.getElementById("username").value;
        
        console.log(Mail)
        console.log(Contraseña)
        console.log(NombreUsuario)

        // Llama a la función para enviar los datos al back-end
        loginUser(Mail, Contraseña, NombreUsuario);
    });
    
    function loginUser(Mail, Contraseña, NombreUsuario) {

        const body = {
            "Mail": Mail,
            "Contraseña": Contraseña,
            "NombreUsuario": NombreUsuario
        }

        console.log(body);
        
        // Envía los datos al servidor usando fetch
        fetch('https://sign-ai-web.vercel.app/insertar', {  // URL de tu API de inicio de sesión
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirige al usuario o guarda el token
                console.log("Inicio de sesión exitoso:", data);
                // Por ejemplo, guarda el token en el almacenamiento local
                localStorage.setItem('token', data.token);
                // Redirige al usuario a otra página
                window.location.href = '../5pantalla';
            } else {
                // Muestra un mensaje de error
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }
});
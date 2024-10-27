document.addEventListener('DOMContentLoaded', function() {
    // Manejar el envío del formulario de edición
    document.getElementById("editForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("edEmail").value;
        const password = document.getElementById("edPassword").value;
        const username = document.getElementById("edUsername").value;
        editUser(email, password, username);
    });
});
    function editUser(email, password, username) {
        const body = { "Mail": email, "Contraseña": password, "NombreUsuario": username };
        fetch('https://sign-ai-web.vercel.app/editar', {  // URL de tu API para editar usuario
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') // Incluye el token
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log("Usuario editado exitosamente:", data);
                alert("Usuario editado exitosamente!");
                // Redirige o realiza otras acciones aquí
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
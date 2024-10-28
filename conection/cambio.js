document.addEventListener('DOMContentLoaded', () => {
    const editProfileForm = document.getElementById('editProfileForm');

    if (editProfileForm) {
        editProfileForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario
            const email = document.getElementById("edEmail").value;
            const password = document.getElementById("edPassword").value;
            const username = document.getElementById("edUsername").value;

            // Llama a la función editUser
            editUser(email, password, username);
        });
    } else {
        console.error("Formulario de edición no encontrado");
    }
});

function editUser(email, password, username) {
    console.log("Función editUser llamada");
    const body = { "Mail": email, "Contraseña": password, "NombreUsuario": username };
    console.log("Enviando datos:", body);

    fetch('https://sign-ai-web.vercel.app/editar', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(body),
    })
    .then(response => {
        console.log("Estado de la respuesta:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("Respuesta del servidor:", data);
        if (data.success) {
            alert("Usuario editado exitosamente!");
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ocurrió un error al editar el usuario.");
    });
}

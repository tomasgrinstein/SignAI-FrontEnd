document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('signinform');
    // console.log(loginForm)
});

function login(event) {
    // event.preventDefault();
    console.log("AAAAAAAAAAA");

    const Mail = document.getElementById('email').value;
    const Contraseña = document.getElementById('password').value;

    const loginData = {
        Mail: Mail,
        Contraseña: Contraseña
    };

    console.log(loginData)

    fetch('https://sign-ai-web.vercel.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Login exitoso:', data);
                alert("Inicio de sesión exitoso!");
                localStorage.setItem('token', data.token);
                window.location.href = '/dashboard.html';
            } else {
                console.log('Error en el login:', data.message);
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error al intentar iniciar sesión:', error);
            alert("Error de red: " + error.message);
        });
}

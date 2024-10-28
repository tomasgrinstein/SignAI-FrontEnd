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
        .then(response => {
            console.log(response.status)
            if(!response.ok) throw Error("algo salió mal")
            return response.json()
        })
        .then(data => {
                console.log('Login exitoso:', data);
                alert("Inicio de sesión exitoso!");
                localStorage.setItem('token', data.token);
                window.location.href = '../5pantalla';
        })
        .catch(error => {
            console.error('Error al intentar iniciar sesión:', error);
            alert("Error de red: " + error.message);
        });
}

function header() {
    return `
    
        <header class="header">
            <div class="logo">
                <img src="../imgs/logofi.png" >
            </div>
            <ul class="menuu">
                    <li><a href="#"> <img src="../imgs/menuf.png" alt="" class="img5" id="fotito"></a>
                    </li>
            </ul> 
        </header>
        <div id="dropdown">
            <ul class="ul1">
                Traductor
                <a href="../4pantalla-trns/index.html" class="tr">
                    New Traduction
                </a>
            </ul>
            <ul class="ul1">
                SingAi
                <a href="../1pantalla/index.html" class="tr">Inicio</a>
                <a href="" class="tr">Mi Cuenta</a>
                <a href="" class="tr">Cerrar Sesion</a>
            </ul>
            <ul class="ul1">
                Dev´s
                <a href="" class="tr" id="1"> Credits</a>
            </ul>
        </div>`
};

const body = document.querySelector("body");

body.innerHTML += header();
document.addEventListener('DOMContentLoaded', () => {
    const panelHeader = document.getElementById('fotito');
    const panelContent = document.getElementById('dropdown');

    panelHeader.addEventListener('click', () => {
        // Alternar la clase 'show' para mostrar/ocultar el contenido
        panelContent.classList.toggle('mostrar');
    });

    // Cerrar el panel si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!panelHeader.contains(event.target) && !panelContent.contains(event.target)) {
            panelContent.classList.remove('mostrar');
        }
    });
});
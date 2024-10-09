document.getElementById('bt').addEventListener('click', function() {
    window.location.href = '../2pantalla/2index.html'; // Ruta al archivo HTML al que quieres redirigir
});
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
document.getElementById('bt').addEventListener('click', function() {
    window.location.href = '../2pantalla/2index.html'; // Ruta al archivo HTML al que quieres redirigir
});

document.addEventListener('DOMContentLoaded', function() {
    const btnUpload = document.getElementById('btn1');
    const fileInput = document.getElementById('file');

    // Escucha el clic en el botón de subida
    btnUpload.addEventListener('click', function() {
        console.log("Botón de subir clickeado. Abriendo el selector de archivos...");
        fileInput.click(); // Simula un clic en el input de archivo
    });

    // Escucha el cambio en el input de archivo
    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            console.log('Video seleccionado:', file.name);
            console.log('Tamaño del archivo:', file.size, 'bytes');
            console.log('Tipo de archivo:', file.type);
            // Llama a la función para enviar el archivo al back-end
            uploadVideo(file); DataView
        } else {
            console.log('No se ha seleccionado ningún archivo.');
        }
    });

    function uploadVideo(file) {
        const formData = new FormData();
        formData.append('video', file); 

        console.log("Preparando para enviar el archivo al backend...");
        
        // Envía el archivo al servidor usando fetch
        fetch('', { // Cambia esta URL a la de tu API
            method: 'POST',
            body: formData // El cuerpo es el FormData
        })
        .then(response => {
            console.log('Respuesta del servidor recibida:', response); // Log de la respuesta
            return response.json();
        })
        .then(data => {
            console.log('Datos devueltos por el servidor:', data); // Log de los datos devueltos
            if (data.success) {
                // Maneja la respuesta del servidor si la subida fue exitosa
                console.log("Archivo subido exitosamente:", data);
                alert("Archivo subido exitosamente: " + data.message);
            } else {
                // Muestra un mensaje de error si no fue exitoso
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error al subir el archivo: " + error.message);
        });
    }
});

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
        
        fetch('https://sign-ai-web.vercel.app/CrearVideo', { 
            method: 'POST',
            body: formData 
        })
        .then(response => {
            console.log('Respuesta del servidor recibida:', response); 
            return response.json();
        })
        .then(data => {
            console.log('Datos devueltos por el servidor:', data);
            if (data) {
                console.log("Archivo subido exitosamente:", data);
                alert("Archivo subido exitosamente: " + data.message);
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error al subir el archivo: " + error.message);
        });
    }
});

async function obtenerRSS() {
    try {
        const response = await fetch('https://rss.globenewswire.com/Hexmlreportfeed/organization/dBwf4frPXJHvuGJ2iT_UgA==/'); // Llama al backend
        const data = await response.json();
        console.log('Datos recibidos:', data);
    } catch (error) {
        console.error('Error al obtener RSS:', error);
    }
}

obtenerRSS();

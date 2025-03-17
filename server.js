import express from 'express';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import cors from 'cors';

const app = express();
app.use(cors()); // Permite que el frontend acceda a la API
const PORT = 3000;

// Endpoint para obtener y convertir el RSS a JSON
app.get('/api/rss', async (req, res) => {
    const url = 'https://rss.globenewswire.com/Hexmlreportfeed/organization/dBwf4frPXJHvuGJ2iT_UgA==/';

    try {
        const response = await axios.get(url, {
            headers: { 'Accept': 'application/xml' }
        });

        const xml = response.data;
        
        const json = await parseStringPromise(xml, { explicitArray: false });

        res.json(json);  // Enviar JSON al frontend
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el RSS' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
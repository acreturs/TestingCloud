const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Hello World!'));

// Auf allen Interfaces lauschen
app.listen(port, '0.0.0.0', () => console.log(`Server läuft auf Port ${port}`));

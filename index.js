const express = require('express');
const app = express();
const port = 3000;

app.get('/app', (req, res) => {
    res.send('Hello Blue Módulo 3 Fullstack');
})

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port} ❤️`)
})

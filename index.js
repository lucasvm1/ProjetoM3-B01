const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Configuração para usar JSON'a
app.use(express.json());

app.use(cors());

// Definir dados para usar na aplicação
const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

// GET ALL

app.get('/paletas/todas-paletas', (req, res) => {
  res.send(paletas);
});

// GET BY ID

app.get('/paletas/paleta/:id', (req, res) => {
  const paletaId = Number(req.params.id);
  const escolhaPaleta = paletas.find((paleta) => paleta.id === paletaId);
  res.send(escolhaPaleta);
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});

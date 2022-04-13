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
    sabor: 'Açai com Leite Condensado',
    descricao: 'Açai com Leite Condensado',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Banana com Nutella',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Chocolate Belga',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 7.0,
  },
];

// GET ALL

app.get('/', (req, res) => {
  res.send('Hello World');
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

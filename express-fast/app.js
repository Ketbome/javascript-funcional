const express = require('express');
const app = express();

// Ruta de ejemplo que devuelve datos rápidamente
app.get('/', (req, res) => {
  res.json({ message: 'Datos servidos rápidamente' });
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

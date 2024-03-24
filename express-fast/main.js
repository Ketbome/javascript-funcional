const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Mensaje lol");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log("Escuchando por el puerto " + PORT);
});

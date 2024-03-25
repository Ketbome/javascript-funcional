const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Consumiendo api");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Corriendo en puerto " + PORT);
});

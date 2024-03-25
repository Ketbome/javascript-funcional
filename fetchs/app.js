const { getData } = require("./fetch");

getData("/a")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

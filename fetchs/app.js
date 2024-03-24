const { getData } = require("./fetch");

getData("/")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function getData(url) {
  try {
    options = {
      method: "GET",
    };
    const response = await fetch("http://localhost:3000" + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: " + error);
    throw new Error("Error en get");
  }
}

module.exports = {
  getData,
};

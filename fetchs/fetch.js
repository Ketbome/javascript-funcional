async function getData(url) {
  try {
    const response = await fetch("http://localhost:3000" + url, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error en el fetch");
  }
}

async function postData(url, data) {
  config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch("http://localhost:3000" + url, config);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error en metodo POST");
  }
}

async function getDatas(url) {
  try {
    options = {
      method: "GET",
    };
    response = await fetch("http://localhost:3000" + url, options);
    data = await response.json();
    return data;
  } catch {
    throw new Error("Error en fetch");
  }
}

module.exports = {
  getData,
  getDatas,
};

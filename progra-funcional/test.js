const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 20 },
];

const persona = personas.find((p) => p.nombre == "Juan");
console.log(persona);

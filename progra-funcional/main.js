let numbers = [2, 6, 5, 8, 9, 13, 11, 59, 41, 65];

//Inmutabilidad
let numberFilters = numbers.filter((num) => num > 10);
console.log(numberFilters);

let numbersDouble = numbers.map((num) => num * 2);
console.log(numbersDouble);

let numberReduce = numbers.reduce((acum, num, i) => {
  console.log(i);
  console.log(acum + num);
  return acum + num;
}, 0);
console.log(numberReduce);

numbers.forEach((num) => num * 3);
console.log(numbers);

const edades = [18, 22, 15, 30, 27];
const todosMayores = edades.every((edad) => edad >= 15); // false

console.log(todosMayores);

const numeros = [1, 3, 5, 7, 9];
const hayPares = numeros.some((num) => num % 2 === 0); // false
console.log(hayPares);

const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 20 },
];
const persona = personas.find((p) => p.edad > 25); // { nombre: 'María', edad: 30 } Solo retorna 1
console.log(persona);

const nose = [1, 3, 5, 7, 9];
const indice = nose.findIndex((num) => num % 2 === 0); // -1 (no hay números pares)
console.log(indice);

const nums = [1, 2, 3, 4, 5];
const concat = nums.concat([6, 7]); // [1, 2, 3, 4, 5, 6, 7]
const slice = nums.slice(1, 4); // [2, 3, 4]
const indexOf = nums.indexOf(3); // 2
const includes = nums.includes(3); // true

console.log(nums.slice(1, 6));

console.log("hola".length);

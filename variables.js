// Variables
console.log(saludo); // Esta esta variable al llamarse con var antes de declararla, se le asigna el valor de undefined, esto se conoce como hoisting
// var ya no se usa, se usa let o const
var saludo = "Hola";
console.log(saludo);

let nombre; // Declaración de la variable / Inicialización de la variable
nombre = "Juan"; // Asignación de la variable
console.log(nombre);

const apellido = "Ochoa";
// apellido = "Jimenez"; // No se puede reasignar el valor de una constante
const PI = 3.14;
console.log(apellido);
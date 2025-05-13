// Operadores 
// Operadores aritméticos

let suma = 8 + 5;
let resta = 8 - 5;
let multiplicacion = 8 * 5;
let division = 8 / 5;
let modulo = 8 % 5;
let exponente = 2 ** 3;
let a = 1;
a++;
a--;
// console.log(a);

// Operadores de asignación
// = operador de asignación
let x = 'Lo que sea';
let y = 10;
y += 5; // y = y + 5
// console.log('El valor de y es:', y);
// y -= 3; // y = y - 3
// console.log('El valor de y es:', y);
// y *= 2; // y = y * 2
// console.log('El valor de y es:', y);
// y /= 4; // y = y / 4
// console.log('El valor de y es:', y);
// y %= 3; // y = y % 3
// console.log('El valor de y es:', y);

// operadores de comparación


let esIgual = 5 == 5; // true
let esDistinto = 5 != 5; // false
let esDistinto2 = 5 != 10; // true
let esIgual2 = 5 === '5'; // false
let esIgual3 = 5 === 5.0; // true
// console.log('El valor de esIgual3 es:', esIgual3);

// Operadores lógicos

let esMayor = false;
let tienePermiso = false;

// console.log("¿Puede acceder (esMayor && tienePermiso)", esMayor && tienePermiso);
// console.log("¿Puede acceder (esMayor || tienePermiso)", esMayor || tienePermiso);
// console.log("¿No esMayor?", !esMayor);
// mayor que > y menor que <
const edad = 19;
const mayoriaDeEdad = 18;
const esMayorDeEdad = edad >= mayoriaDeEdad;
console.log('¿Es mayor de edad?', esMayorDeEdad ? 'Si' : 'No');


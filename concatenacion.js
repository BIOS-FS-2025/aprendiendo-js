let nombre = 'Ana';
let edad = 20;
let ciudad = 'Madrid';

// Concatenación tradicional
// let presentacion = 'Me llamo' + ' ' + nombre + ', tengo' + ' ' + edad + ' ' + 'años y vivo en' + ' ' + ciudad + '.';
let presentacion = 'Me llamo' + ' ' + nombre + '\n' +
  'Tengo' + ' ' + edad + ' ' + 'años y vivo en' + ' ' + ciudad + '.';

// console.log(presentacion);

// Template strings / template literals
let presentacionTemplate = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;

// console.log(presentacionTemplate);

// Puedo incluir expresiones dentro de los caracteres ${}

let precioProducto = 19.99;
let cantidadItems = 5;
let mensaje = `Total a pagar $${(precioProducto * cantidadItems).toFixed(2)}`;

// console.log(mensaje);

// Múltiples líneas

let mensajeMultiLinea = `Bienvenido/a, ${nombre}
Esta es una cadena de texto
que ocupa varias líneas '' ""
sin necesidad de usar \\n.`;

console.log(mensajeMultiLinea);
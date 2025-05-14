// if <-- Ejecuta un bloque de código si la condición es verdadera
// Si la temperatura es mayor a 30 grados, vamos a mostrar 'Hace calor. Lleva Agua para el camino!'
let mensaje = 'Hace calor. Lleva Agua para el camino!';
let temperatura = 31;
console.log('--- Ejemplo con IF ---');
if (temperatura >= 30) {
  console.log(mensaje);
}

// if else <-- Ejecuta un bloque de código si la condición es verdadera, si no, ejecuta otro bloque de código

let mayorDeEdad = 18;
let edad = 17;

let mensajeMayorDeEdad = 'Eres mayor de edad';
let mensajeMenorDeEdad = 'Eres menor de edad';
console.log('--- Ejemplo con IF ELSE ---');
if (edad >= mayorDeEdad) {
  console.log(mensajeMayorDeEdad);
} else {
  console.log(mensajeMenorDeEdad);
}

// else if <-- Ejecuta un bloque de código si la condición es verdadera, si no, ejecuta otro bloque de código

let calificacion = 68;

let mensajeNotaA = 'Nota A (Excelente)';
let mensajeNotaB = 'Nota B (Buena)';
let mensajeNotaC = 'Nota C (Aceptable)';
let mensajeNotaD = 'Nota D (Insuficiente) Necesitas estudiar más';

console.log('--- Ejemplo con ELSE IF ---');
console.log('Calificación:', calificacion);

if (calificacion >= 90) {
  console.log(mensajeNotaA);
} else if (calificacion >= 80) {
  console.log(mensajeNotaB);
} else if (calificacion >= 70) {
  console.log(mensajeNotaC);
} else {
  console.log(mensajeNotaD)
}

// switch <-- Ejecuta un bloque de código si la condición es verdadera, si no, ejecuta otro bloque de código

/* 
  1 = Lunes
  2 = Martes
  3 = Miércoles
  4 = Jueves
  5 = Viernes
  6 = Sábado
  7 = Domingo
*/

let diaDeLaSemanaEnNumero = 8;
let nombreDelDia = '';
console.log('--- Ejemplo con SWITCH ---');

switch (diaDeLaSemanaEnNumero) {
  case 1: nombreDelDia = 'Lunes'; break;
  case 2: nombreDelDia = 'Martes'; break;
  case 3: nombreDelDia = 'Miércoles'; break;
  case 4: nombreDelDia = 'Jueves'; break;
  case 5: nombreDelDia = 'Viernes'; break;
  case 6: nombreDelDia = 'Sábado'; break;
  case 7: nombreDelDia = 'Domingo'; break;
  default:
    nombreDelDia = 'El numero que ingresaste no es un dia de la semana valido';
    break;
}

console.log(`El dia de la semana es: ${nombreDelDia}`)

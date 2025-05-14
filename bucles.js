// bucles o loops
// for <- Va a ejecutar un bloque de código el número de veces que se le indique.

// console.log('Vamos en el numero 1')
// console.log('Vamos en el numero 2')
// console.log('Vamos en el numero 3')
// console.log('Vamos en el numero 4')
// console.log('Vamos en el numero 5')

console.log('--- Ejemplo con FOR ---');
for (let iterador = 1; iterador <= 5; iterador++) {
  console.log(`Vamos en el numero: ${iterador}`)
}

// while <- Va a ejecutar un bloque de código mientras la condición sea verdadera.

let contador = 1;
console.log('--- Ejemplo con WHILE ---');
while (contador <= 5) {
  console.log(`Vamos en el numero: ${contador}`)
  contador++;
}

console.log('Este es el valor de contador: ', contador);

// do while <- Va a ejecutar un bloque de código mientras la condición sea verdadera.

let contadorDoWhile = 5;
console.log('--- Ejemplo con DO WHILE ---');
do {
  console.log(`Vamos en el numero: ${contadorDoWhile}`)
  contadorDoWhile++;
} while (contadorDoWhile <= 10);
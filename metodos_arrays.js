// for con array

//              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log('El array de números tiene una longitud de:', numeros.length, typeof numeros.length)

//Métodos para iterar sobre un array.
// for (let indice = 0; indice < numeros.length; indice++) {
//   console.log('El numero en la posición', indice, 'es', numeros[indice])
// }

// forEach
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach(function(numero, indice) {
//   console.log(`El número en la posición ${indice} es ${numero}`)
// })

// const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza']

// ciudades.forEach(function(ciudad, indice) {
//   console.log(`La ciudad en la posición ${indice} es ${ciudad}`)
// })

// map() <--- Método para iterar sobre un array y transformar datos o elementos.
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numerosDuplicados = numeros.map(function(numero) {
//   return numero * 2;
// })

// console.log('Array de números original', numeros)
// console.log('Array de números duplicados', numerosDuplicados)
// console.log('Array de números', numeros)

// filter() <--- Método para filtrar elementos de un array, que cumplan una condición.

// const numerosPares = numeros.filter(function(numero) {
//   return numero % 2 === 0;
// })

// console.log('Array de números pares', numerosPares)

// splice() y slice() <--- Métodos para manipular arrays.

let frutas = ['Manzana', 'Pera', 'Naranja', 'Uva', 'Pitaya']
console.log('Array de frutas original', frutas)

const frutasSelecionadas = frutas.slice(0, 4) // slice tiene cómo parametros el inicio y el final, pero no incluye el final de los indices.

// console.log('Array de frutas seleccionadas con slice', frutasSelecionadas)
// console.log('Array de frutas original', frutas)

const frutasRemplazadas = frutas.splice(1, 2, 'Fresa', 'Sandia') // Remplaza los elementos eliminados por los nuevos elementos.

console.log('Array de frutas eliminadas', frutasRemplazadas)
console.log('Array de frutas original', frutas)
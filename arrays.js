// arrays o arreglos <--- Son una colección de datos o un grupo de datos, que tiene un indice e inicia en 0.

// let frutas = ['Manzana', 'Pera', 'Naranja', 'Uva', 'Pitaya'];
// Array literal o sintaxis literal
let colores = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
  '#FFFFFF',
]
console.log('Array de colores', colores)

const rojo = colores[0]

console.log('El color rojo es en hexadecimal', rojo, 'y el tipo de dato es', typeof rojo)

console.log('El array de colores tiene', colores.length, 'elementos');

const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza']
// .push() <--- Agrega un elemento al final del array.
console.log('Ciudades del mundo antes de agregar una nueva ciudad', ciudades)
ciudades.push('Bogotá', 'Lima', 'Santiago', 'Buenos Aires')
console.log('Ciudades del mundo después de agregar una nueva ciudad', ciudades)

// .pop() <--- Elimina el último elemento del array.
ciudades.pop()
console.log('Ciudades del mundo después de eliminar el último elemento', ciudades)

// .shift() <--- Elimina el primer elemento del array.
ciudades.shift()
console.log('Ciudades del mundo después de eliminar el primer elemento', ciudades)

// .unshift() <--- Agrega un elemento al inicio del array.
ciudades.unshift('Caracas')
console.log('Ciudades del mundo después de agregar un elemento al inicio', ciudades)

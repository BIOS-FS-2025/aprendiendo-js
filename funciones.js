// Funciones <--- Son bloques de código que se pueden reutilizar. Se beneficia del hoisting.
// Alcance o scope de las variables.
// Nombre en este momento es un parámetro
// function saludar(nombre = 'Nombre por defecto') {
//   console.log(`Hola, me llamo ${nombre}`)
// }

// // nombre es un argumento
// saludar('Miguel');
// Funcion declarativa
// function sumar(numero1, numero2) {
//   return numero1 + numero2
// }

// Funcion expresiva
// const sumar = function (numero1, numero2) {
//   return numero1 + numero2
// }

// Arrow function o función flecha
const sumar = (numero1, numero2) => {
  console.log('Sumando...')
  return numero1 + numero2
}

const resultado = sumar(3, 5)

console.log('El resultado de la suma es:', resultado)

// Funciones anónimas
const saludar = function () {
  console.log('Hola')
}

const numeros = [1, 2, 3, 4, 5]

// const numerosDuplicados = numeros.map(function(numero) {
//   return numero * 2;
// })

const numerosDuplicados = numeros.map((numero) => numero * 2)

// Parámetro rest y operador spread
// Funciones como argumentos (Callbacks)

// html
// css
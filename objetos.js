// objetos <- Son una colección de propiedades.
// Todo en js es un objeto, los objetos son prototipos.
const libro = {
  titulo: 'El principito',
  autor: 'Antoine de Saint-Exupéry',
  paginas: 96,
  precio: 10.99,
}

console.log('Este es mi objeto', libro);

const property = 'autor'

libro.paginas = 100;
libro.genero = 'Fábula'

console.log(`Título del libro: ${libro.titulo}`)
console.log(`Autor del libro: ${libro[property]}`)
console.log(`Paginas del libro: ${libro.paginas}`)

  // Funciones dentro de objetos
console.log('--- Ejemplo con Funciones dentro de objetos ---');

const auto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  color: 'Rojo',
  precio: 10000,
  // Esto es un método, osea una función dentro de un objeto.
  mostrarSusPropiedades: function () {
    // This hace referencia al objeto que está llamando a la función.
    // this <-- this es una palabra reservada que hace referencia a si mismo (auto).
    console.log(`Auto: ${this.marca} ${this.modelo} ${this.color} Precio: ${this.precio}`)
  }
}

auto.mostrarSusPropiedades()
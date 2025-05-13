// -----------------------------------------------------------------------------------
// Ejercicio 1: Mis Datos Personales (Variables y Tipos)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Declara una variable `nombreCompleto` usando `const` y asígnale tu nombre completo (string).
2.  Declara una variable `anioNacimiento` usando `let` y asígnale tu año de nacimiento (number).
3.  Declara una variable `leGustaProgramar` usando `let` y asígnale un valor booleano (`true` o `false`).
4.  Calcula tu edad aproximada restando `anioNacimiento` del año actual (puedes usar 2024 o 2025)
    y guárdala en una variable `edadAproximada` usando `let`.
5.  Imprime en consola una frase que combine estos datos usando template literals.
    Ejemplo: "Mi nombre es [nombreCompleto], nací en [anioNacimiento] (tengo aprox. [edadAproximada] años) y ¿me gusta programar?: [leGustaProgramar]."
*/
console.log("--- Ejercicio 1: Mis Datos Personales ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 2: Operaciones con Números (Operadores)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Declara dos variables `num1` y `num2` con valores numéricos (ej: 15 y 4).
2.  Calcula y muestra en consola:
    a.  La suma de `num1` y `num2`.
    b.  La resta de `num1` menos `num2`.
    c.  El producto de `num1` por `num2`.
    d.  La división de `num1` entre `num2`.
    e.  El módulo (resto) de `num1` dividido por `num2`.
3.  Declara una variable `contador` inicializada en 0. Incrementa su valor en 1 dos veces
    usando el operador `+=` y luego el operador `++`. Muestra el valor final.
*/
console.log("--- Ejercicio 2: Operaciones con Números ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 3: Decisión de Salida (Condicionales y Operadores Lógicos)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Declara una variable `horaActual` (number, formato 0-23) y `diaSemana` (string, ej: "Lunes").
2.  Escribe una estructura condicional para decidir si "Puedes salir a jugar" o "Debes quedarte en casa".
    Condiciones para salir a jugar:
    -   Si es "Sábado" o "Domingo", puedes salir sin importar la hora (entre 0 y 23).
    -   O, si NO es "Sábado" ni "Domingo", PERO la `horaActual` está entre las 16 y las 19 (inclusive).
3.  Prueba con diferentes valores para `horaActual` y `diaSemana`.
    Ej: horaActual = 17, diaSemana = "Miércoles" -> Puedes salir
        horaActual = 10, diaSemana = "Lunes"   -> Debes quedarte
        horaActual = 14, diaSemana = "Sábado"  -> Puedes salir
*/
console.log("--- Ejercicio 3: Decisión de Salida ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 4: Tabla de Multiplicar (Bucles)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Declara una variable `numeroTabla` y asígnale un número (ej: 7).
2.  Usa un bucle `for` para imprimir la tabla de multiplicar de ese número, del 1 al 10.
    Formato de salida: "[numeroTabla] x [i] = [resultado]"
    Ej: "7 x 1 = 7"
        "7 x 2 = 14"
        ...
        "7 x 10 = 70"
*/
console.log("--- Ejercicio 4: Tabla de Multiplicar ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 5: Mi Mascota (Objetos)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Crea un objeto llamado `miMascota`.
2.  Añádele las siguientes propiedades:
    -   `nombre` (string, el nombre de tu mascota o una inventada)
    -   `especie` (string, ej: "Perro", "Gato", "Hamster")
    -   `edad` (number)
    -   `jugueteFavorito` (string)
3.  Añade un método (una función dentro del objeto) llamado `presentarse` que imprima
    en consola una frase como: "Hola, soy [nombre], un [especie] de [edad] años.
    ¡Me encanta jugar con mi [jugueteFavorito]!"
    (Usa `this` para acceder a las propiedades del objeto dentro del método).
4.  Llama al método `presentarse()` de tu objeto.
5.  Cambia el valor de la propiedad `jugueteFavorito` y vuelve a llamar al método `presentarse()`.
*/
console.log("--- Ejercicio 5: Mi Mascota ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 6: Lista de Compras (Arrays)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Crea un array llamado `listaDeCompras` e inicialízalo con al menos 3 productos (strings)
    que necesites comprar.
2.  Muestra en consola el primer y el último elemento de la lista.
    (Recuerda que el último elemento se puede acceder con `listaDeCompras[listaDeCompras.length - 1]`).
3.  Añade dos productos más al FINAL de la lista usando `push()`.
4.  Elimina el PRIMER producto de la lista usando `shift()`.
5.  Muestra la lista completa y su nueva longitud.
*/
console.log("--- Ejercicio 6: Lista de Compras ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 7: Adivina el Número (Bucle `while` y Condicionales)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Declara una variable `numeroSecreto` con un valor entre 1 y 10 (ej: 7).
2.  Declara una variable `intentos` inicializada en 0.
3.  Declara una variable `numeroAdivinado` (sin valor inicial).
4.  Usa un bucle `while` que continúe mientras `numeroAdivinado` NO SEA IGUAL a `numeroSecreto`.
    Dentro del bucle:
    a.  Incrementa `intentos`.
    b.  Simula que el usuario adivina un número. Para este ejercicio, puedes generar un número
        aleatorio entre 1 y 10 y asignarlo a `numeroAdivinado`.
        Pista: `Math.floor(Math.random() * 10) + 1` genera un entero entre 1 y 10.
    c.  Imprime el intento y el número que "adivinó" el usuario.
        Ej: "Intento #[intentos]: Adivinaste [numeroAdivinado]"
5.  Cuando el bucle termine (porque `numeroAdivinado` es igual a `numeroSecreto`),
    imprime un mensaje de felicitación que incluya el número de intentos.
    Ej: "¡Felicidades! Adivinaste el número [numeroSecreto] en [intentos] intentos."
*/
console.log("--- Ejercicio 7: Adivina el Número ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 8: Catálogo de Productos (Array de Objetos y Bucles)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Crea un array llamado `catalogo`.
2.  Cada elemento del `catalogo` debe ser un objeto que represente un producto.
    Cada producto debe tener las propiedades: `nombre` (string), `precio` (number), `stock` (number).
3.  Añade al menos 3 productos al `catalogo`.
4.  Usa un bucle `for` para iterar sobre el `catalogo` e imprimir la información de cada producto.
    Ej: "Producto: [nombre], Precio: $[precio], Stock: [stock] unidades"
5.  Calcula y muestra el precio total si compraras una unidad de cada producto en el catálogo.
*/
console.log("--- Ejercicio 8: Catálogo de Productos ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 9: Convertidor de Temperatura (Condicional `switch` y Operadores)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Declara una variable `temperaturaEntrada` (number) y `unidadEntrada` (string: "C" o "F").
2.  Declara variables `temperaturaSalida` y `unidadSalida`.
3.  Usa un `switch` basado en `unidadEntrada`:
    a.  Si `unidadEntrada` es "C" (Celsius):
        -   Convierte `temperaturaEntrada` a Fahrenheit: F = (C * 9/5) + 32
        -   Asigna el resultado a `temperaturaSalida` y "F" a `unidadSalida`.
        -   Imprime: "[tempC]°C son [tempF]°F"
    b.  Si `unidadEntrada` es "F" (Fahrenheit):
        -   Convierte `temperaturaEntrada` a Celsius: C = (F - 32) * 5/9
        -   Asigna el resultado a `temperaturaSalida` y "C" a `unidadSalida`.
        -   Imprime: "[tempF]°F son [tempC]°C"
    c.  `default`: Imprime "Unidad no reconocida."
4.  Prueba con: temperaturaEntrada = 25, unidadEntrada = "C"
    Y luego con: temperaturaEntrada = 68, unidadEntrada = "F"
*/
console.log("--- Ejercicio 9: Convertidor de Temperatura ---");
// Tu solución:


// -----------------------------------------------------------------------------------
// Ejercicio 10: Contador de Vocales (Bucles, Condicionales, Strings)
// -----------------------------------------------------------------------------------
/*
Enunciado:
1.  Declara una variable `frase` con un texto (string).
2.  Declara una variable `contadorVocales` inicializada en 0.
3.  Usa un bucle `for` para recorrer cada carácter de la `frase`.
    (Puedes acceder a cada carácter con `frase[i]`).
4.  Dentro del bucle, convierte el carácter actual a minúscula para facilitar la comparación
    (ej: `let caracterActual = frase[i].toLowerCase();`).
5.  Usa una estructura condicional (`if` o `switch`) para verificar si `caracterActual`
    es una vocal ('a', 'e', 'i', 'o', 'u').
6.  Si es una vocal, incrementa `contadorVocales`.
7.  Después del bucle, imprime la frase original y el número total de vocales encontradas.
    Ej: "La frase '[frase]' tiene [contadorVocales] vocales."
*/
console.log("--- Ejercicio 10: Contador de Vocales ---");
// Tu solución:
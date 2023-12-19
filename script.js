
// >>>>>> >>>>>> >>>>>> >>>>>> >>>>>> Entrada


// Funciones

/*
    Muchos de los valores proporcionados por el entorno predeterminado tienen
    el tipo función. Un función es una pieza de programa envuelta en un valor.
    Dichos valores pueden ser aplicados para ejecutar el programa envuelto. Por
    ejemplo, en un entorno navegador, la vinculación prompt sostiene una función
    que muestra un pequeño cuadro de diálogo preguntado por entrada del
    usuario. Esta se usa así:
*/

prompt("Introducir contraseña");

/*
    Ejecutar una función tambien se conoce como invocarla, llamarla, o aplicarla.
    Puedes llamar a una función poniendo paréntesis después de una expresión que
    produzca valor de función. 

    Los valores dados a las funciones se llaman argumentos. Diferentes funciones
    pueden necesitar un número diferente o diferentes tipos de argumentos.
*/

// Función "console.log()"

console.log("%cSaludos desde la consola...", "background:#000;color:#ff0;padding:10px 25px;")

/*
    La mayoría de las sistemas JavaScript (incluidos los navegadores web modernos
    y Node.js) proporcionan una función console.log que escribe sus argumentos en algún
    dispositivo de salida de texto.
*/

// Valores de Retorno

/*
    Mostrar un cuadro de diálogo o escribir texto en la pantalla es un efecto secundario.
    Muchas funciones son útiles debido a los efectos secundarios que ellas producen. Las
    funciones también pueden producir valores, en cuyo caso no necesitan tener un efecto
    secundario para ser útil.

    La función Math.max toma cualquier cantidad de argumentos numéricos y devuelve el mayor
    de ellos.
*/

console.log(Math.max(2, 4)); // -> 4

/*
    Cuando una función produce un valor, se dice que retorna ese valor. Todo
    lo que produce un valor es una expresión en JavaScript, lo que significa que las
    llamadas a funciones se pueden usar dentro de expresiones más grandes.
*/

console.log(Math.min(2, 4) + 100) // -> 102
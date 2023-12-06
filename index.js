// ====== Capítulo 1: Valores, Tipos y Operadores

// ====== Valores

/*
    Imagina un mar de bits, un océano de ellos. Un computadora moderna
    promedio tiene más de 30 billones de bits en su almacenamiento de datos volátiles
    (memoria funcional). El almacenamiento no volátil (disco duro o equivalente)
    tiende a tener unas cuantas más ordenes de magnitud.

    Para poder trabajar con tales cantidades de bits sin perdernos, debemos separarlos
    en porciones que representen pedazos de información. En un entorno de JavaScript, esas
    porciones son llamadas valores.
*/

// ====== Números

/*
    Valores númericos de tipo number (número) son como es de esperar, valores numéricos.
    En un programa hecho en JavaScript, se escriben de la siguiente manera:
*/

11

360

// - Número Decimal

9.81

// - Notación científica

// 2.998e8

// ====== Aritmética

// 100 + 4 * 11

// (100 + 4) * 11

/*
    Los símbolos + y * son operadores. El primero representa a la adición y el
    segundo representa a la multiplicación.
*/

/*
    Para sustraer, existe el operador -, y la división puede ser realizada
    con el operador /.
*/

// (100 - 5) / 5 // -> 19

/* 
    Cuando operadores aparecen juntos sin paréntesis el orden en el cuál son 
    aplicados es determinado por la precedencia de los operadores, primero
    / y * después + y -.
*/ 

/*
    El operador % sirve para realizar de operación de residuo.
*/

// 314 % 100 // -> 14

/* ====== Números Especiales */

/*
    Existen tres valores especiales en JavaScript que son considerados números
    pero que no se comportan como números normales.

    Los primeros dos son Infinity y -Infinity, los cuales representan las infinidades
    positivas y negativas. Infinity - 1 aun es Infinity, y así sucesivamente. A pesar
    de esto, no confíes mucho en computaciones que dependan de infinidades. Estas no
    son matemáticamente confiables, y puede que muy rápidamente nos resulten en el próximo
    número especial: NaN.

    NaN significa "no es un número" ("Not a number"), aunque sea un valor del tipo numérico.
    Obtendras este resultado cuando, por ejemplo, trates de calcular 0 / 0 (cero divido
    cero), Infinity - Infinity, o cualquier otra cantidad de operaciones numéricas que no 
    produzcan un resultado significante.
*/

Infinity
-Infinity
NaN

console.log(0/0)
console.log(Infinity - Infinity)

// ====== Strings

/*
    Los Strings son usados para representar texto. Son escritos encerrando su contenido en comillas.
*/

// `Debajo en el mar`
// "Descansa en el océano"
// 'Flota en el océano'

console.log("Esta es la primera línea\nY esta es la segunda.")

/*
    Se encuentra, por supuesto, situaciones donde queremos que una barra invertida en un string
    solo sea una barra invertida, y no un carácter especial. Si dos barras invertidas prosiguen una
    a la otra, serán colapsadas y sólo una permanecerá en el valor resultante del string.
*/

console.log("Un caracter de salto de línea puede ser escrito así: \'\\n\'")

/*
    Los strings no pueden ser divididos, multiplicados, o substraidos, pero el operador + puede ser
    utilizado en ellos. No los agrega, sino que los concatena, pega dos strings juntos. La siguiente
    línea producirá el string "concatenar":
*/

console.log("con" + "cat" + "e" + "nar")

/*
    Si usamos comillas invertidas o plantillas literales, podemos hacer saltos de línea, y además
    incrustar valores con la siguiente sintaxis:
*/

console.log(`La mitad de 100 es: ${ 100/2 }`)

/*
    Dentro del símbolo "${}" podemos colocar una expresión de JavaScript.
*/

// ====== Operadores Unarios

/*
    No todos los operadores son símbolos. Algunos se escriben como palabras.
    Un ejemplo es el operador typeof, que produce un string con el nombre del tipo
    de valor que le demos.
*/

console.log(typeof 4.5) // -> number
console.log(typeof "x") // -> string

/*
    Existen operadores que necesitan de dos expresiones para poder funcionar, llamados
    operadores binarios, y también existen operadores que necesitan una única expresión,
    estos son llamados unarios. El símbolo - puede funcionar como los dos.
*/

console.log( - (10 - 2) )



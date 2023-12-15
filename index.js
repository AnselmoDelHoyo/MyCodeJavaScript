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

// ====== Valores Booleanos

/*
    Es frecuentemente util tener un valor que distingue entre solo dos posibilidades,
    como "si", y "no", o "encendido" y "apagado". Para este propósito, JavaScript
    tiene el tipo Boolean, que tiene solo dos valores: true (verdadero) y false (falso)
    que se escriben de la misma forma.
*/

// ====== Comparación

// > --- Mayor que
// < --- Menor que
console.log(3 > 2) // -> true
console.log(3 < 2) // -> false

console.log("Aardvark" < "Zoroaster") // -> true

/*
    La forma en la que los strings son ordenados, es aproximadamente alfabético, la diferencia
    está en que las letras mayúsculas son simpre "menores que" las letras minúsculas,
    así que "Z" < "a", y caracteres no alfabéticos (como !, - y demás) son también
    incluidos en el ordenamiento. Cuando se comparan strings, JavaScript evalúa los
    caracteres de izquierda a derecha, comparando los códigos Unicode.
*/

// Otros operadores son:

// >= --- mayor o igual que
// <= --- menor o igual que
// == --- igual a
// != --- no igual a

console.log("Itchy" != "Scratchy") // -> true
console.log("Manzana" == "Naranja") // -> false

// Solo un valor en JavaScript no es igual a sí mismo, NaN.

console.log(NaN == NaN) // -> false

// ====== Operadores Lógicos

/*
    Existen operadores que pueden "razonar" entre valores Booleanos.
    Estos son los operadores lógicos: and, or y not.
*/

// El resultado es verdadero si ambos valores son verdaderos.

console.log(true && false) // -> false
console.log(true && true) // -> true

// El resultado es verdadero si cualquiera de los valores son verdaderos.

console.log(false || true) // -> true
console.log(false || false) // -> false

/*
    Not se escribe como un signo de exclamación (!). Es un operador unario que
    voltea el valor dado. !true produce false y !false produce true.
*/

console.log(1 + 1 == 2 && 10 * 10 > 50) // -> true

// El operador lógico ternario. Es escrito con un signo de interrogación y dos puntos.

console.log(true ? 1 : 2) // -> 1
console.log(false ? 1 : 2) // -> 2

// ====== Valores Vacíos

/*
    Existen dos valores especiales, escritos como null y undefined, que son usados
    para denotar la ausencia de un valor significativo. Son en si mismos valores,
    pero no traen consigo información.

    Muchas operaciones en el lenguaje que no producen un valor significativo
    (veremos algunas mas adelante), producen undefined simplemente porque tienen
    que producir algún valor.

    La diferencia en significado entre undefined y null es un accidente del diseño
    de JavaScript, y realmente no importa la mayor parte del tiempo. En los casos
    donde realmente tendríamos que preocuparnos por estos valores, mayormente
    recomiendo que los trates como intercambiables.
*/

console.log(null)
console.log(undefined)

// ====== Conversión de tipo automática

console.log(8 * null) // -> 0
console.log("5" - 1) // -> 4
console.log("5" + 1) // -> 51
console.log("cinco" * 2) // -> NaN
console.log(false == 0) // -> true

/*
    Cuando un operador es aplicado al tipo de valor "incorrecto", JavaScript
    silenciosamente convertirá ese valor al tipo que necesita, utilizando una serie
    de reglas que frecuentemente no dan el resultado que quisieras o esperarías.
    Esto es llamado coercion de tipo.
*/

console.log(null == undefined) // -> true
console.log(null == 0) // -> false

/*
    Este comportamiento es frecuentemente util. Cuando queremos probar si un
    valor tiene un valor real en vez de null o undefined, puedes compararlo con
    null usando el operador == (o !=).

    Pero que pasa si queremos probar que algo se refiere precisamente al valor
    false? Las reglas para convertir strings y números a valores Booleanos, dice
    que 0, NaN, y el string vació ("") cuentan como false, mientras que todos
    los otros valores cuentan como true. Debido a esto, expresiones como 0 ==
    false, y "" == false son también verdaderas. Cuando no queremos ninguna
    conversion de tipo automática, existen otros dos operadores adicionales: === y
    !==. El primero prueba si un valor es precisamente igual al otro, y el segundo
    prueba si un valor no es precisamente igual. Entonces "" === false es falso,
    como es de esperarse.
*/

// ====== Corto Circuito de Operadores Lógicos

/*
    Los operadores lógicos && y ||, manejan valores de diferentes tipos de una forma
    peculiar. Ellos convertirán el valor en su lado izquierdo a un tipo Booleano
    para decidir que hacer, pero dependiendo del operador y el resultado de la
    conversión, devolverán o el valor original de la izquierda o el valor de la derecha.

    El operador ||, por ejemplo, devolverá el valor de su izquierda cuando este
    puede ser convertido a verdadero y de ser lo contrario devolverá el valor de la
    derecha. Esto tiene el efecto esperado cuando los valores son Booleanos, pero
    se comporta de una forma algo análoga con valores de otros tipos.
*/

console.log(null || "usuario") // -> usuario
console.log("Agnes" || "usuario") // -> Agnes

/*
    Podemos utilizar esta funcionalidad como una forma de recurrir a un valor
    por defecto. Si tenemos un valor que puede estar vacío, podemos usar ||
    después de este para remplazarlo con otro valor.

    El operador && funciona de manera similar, pero de forma opuesta. Cuando
    el valor a su izquierda es algo que se convierte a falso, devuelve ese valor, y de
    lo contrario, devuelve el valor a su derecha.

    Otra propiedad importante de estos dos operadores es que la parte de su derecha solo 
    es evaluada si es necesario. En el caso que de true || X, o lo mismo con false && X.
*/

// ====== Resumen

/*
    Observamos cuatro tipos de valores de JavaScript en este capítulo: números,
    textos (strings), Booleanos, y valores indefinidos. Tales valores son creados 
    escribiendo su nombre (true, null) o valor (13,"abc"). Puedes combinar y transformar 
    valores con operadores. Vimos operadores binarios para aritmética (+, -, *, /, y %), concatenación 
    de strings (+), comparaciones (==, !=, ===, !==, <, >, <=, >=), y lógica (&&, ||), así también como 
    varios otros operadores unarios (- para negar un número, ! para negar lógicamente, y typeof para 
    saber el valor de un tipo) y un operador ternario (?:) para elegir uno de dos valores basándose en 
    un tercer valor.
*/

// ====== Capítulo 2: Estructura de un Programa


// ====== Expresiones y Declaraciones

/*
    Un fragmento de código que produce un valor se llama una expresión. Cada
    valor que se escribe literalmente (como 22 o "psicoanálisis") es una expresión.

    Esto demuestra parte de la belleza de una interfaz basada en un lenguaje.
    Las expresiones pueden contener otras expresiones de una manera muy similar a como
    las sub-oraciones en los lenguajes humanos están anidadas, una sub-oración puede
    contener sus propias sub-oraciones, y así sucesivamente. Esto nos permite construir
    expresiones que describen cálculos arbitrariamente complejos.

    Sin una expresión corresponde al fragmento de una oración, una declaración en JavaScript
    corresponde a una oración completa. Un programa es una lista de declaraciones.

    El tipo más simple de declaración es una expresión que finaliza con un punto y coma.
    Esto es un programa:
*/

1;
!false;

/*
    Una expresión puede estar feliz solo con producir un valor, que luego pueda ser utilizado
    por el código circundante. Una declaración es independiente por si misma, por lo que equivale
    a algo solo si afecta al mundo.

    Las declaraciones en el ejemplo anterior solo producen los valores 1 y true y luego inmediatamente
    los tira a la basura. Esto no deja ninguna huella en el mundo. Cuando ejecutes este programa, nada 
    observable ocurre.

    En algunos casos, JavaScript te permite omitir el punto y coma al final de una declaración. En otros
    casos, tiene que estar allí, o la próxima línea serán tratadas como parte de la misma declaración.
    hay que usar puntos y comas.
*/

// ====== Vinculaciones

/*
    ¿Cómo matiene un programa un estado interno? ¿Cómo recuerda cosas?
    Para almacenar o mantener valores, JavaScript proporciona una cosa llamada vinculación o variable.
*/

let atrapado = 5 * 5;

/*
    La palabre clave "let" indica que esta declaración va a definir una vinculación. Le sigue el nombre 
    de la vinculación y, si queremos darle un valor inmediatamente, un operador "=" y una expresión.
*/

let diez = 10;

console.log(diez * diez); // -> 100

/*
    Cuando una vinculación señala a un valor, eso no significa que está atada a ese valor para siempre.
*/

let humor = "ligero";
console.log(humor); // -> ligero

humor = "oscuro";
console.log(humor); // -> oscuro


let deudaLuigi = 140;
deudaLuigi = deudaLuigi - 35;
console.log(deudaLuigi) // -> 105

let uno = 1, dos = 2;
console.log(uno + dos); // -> 3

/*
    Las palabras "var" y "const" también pueden ser usadas para crear vinculaciones, en una
    manera similar a "let".
*/

var nombre = "Anselmo";
const saludo = "Hola ";
console.log(saludo + nombre); // -> Hola Ayda

/*
    var: es la forma en la que se declaraban las vinculaciones en JavaScript previo al 2015.
    let: hace lo mismo que var, pero actualmente se deja de usar var por let.
    const: representa una constante, define una vinculación que apunto al mismo valor por el tiempo que viva.
*/


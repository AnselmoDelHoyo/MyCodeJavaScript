

// ===========================================
// = Capítulo 1: Valores, Tipos y Operadores =
// ===========================================

const JOURNAL = require("./journal");
const SCRIPTS = require("./chapter/05_data/code/scripts")

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

// ====== Número Decimal

9.81

// ====== Notación científica

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


// =========================================
// = Capítulo 2: Estructura de un Programa =
// =========================================

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

// ====== Nombres Vinculantes

/*
    Las palabras con un significado especial, como "let", son palabras claves, y
    no pueden usarse como nombres vinculantes. También hay una cantidad de
    palabras que están "reservadas para su uso" en futuras versiones de JavaScript,
    que tampoco pueden ser usadas como nombre vinculantes. La lista completa
    de palabras clave y palabras reservadas es bastante larga:

    break case catch class const continue debugger default
    delete do else enum export extends false finally for
    function if implements import interface in instanceof let
    new package private protected public return static super
    switch this throw true try typeof var void while with yield

    Cuando crear una vinculación produzca un error de sintaxis inesperado, observa
    si estás tratando de definir una palabra reservada.
*/

// ====== El Entorno

/*
    La colección de vinculaciones y sus valores que existen en un momento dado
    se llama entorno. Cuando se inicia un programa, este entorno no está vacío.
    Siempre contiene vinculaciones que son parte del estándar del lenguaje, y la
    mayoría de las veces, también tiene vinculaciones que proporcionan formas
    de interactuar con el sistema circundante. Por ejemplo, en el navegador, hay
    funciones para interactuar con el sitio web actualmente cargado y para leer
    entradas del mouse y teclado.
*/

// >>>>>> >>>>>> >>>>>> >>>>>> >>>>>> Paso a "index.html"

// >>>>>> >>>>>> >>>>>> >>>>>> >>>>>> Entrada

// ====== Flujo de Control

/*
    Cuando tu programa contiene más de una declaración, las declaraciones se
    ejecutan como si fueran una historia, de arriba a abajo. Este programa de
    ejemplo tiene dos declaraciones.
*/

// let elNumero = Number(prompt("Elige un número"));
// console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero);

/*
    La función Number convierte un valor a un número. Hay funciones similares
    llamadas String y Boolean que convierten valores a esos tipos.
*/

// ====== Flujo de control en línea recta:

// =======================>

// ====== Ejecución Condicional

/*
    No todos los programas son caminos rectos. Podemos, por ejemplo, querer
    crear un camino de ramificación, donde el programa toma la rama adecuada
    basandose en la situacion en cuestión. Esto se llama ejecución condicional.

            |======>
    ======>         ======>
            |======>
*/

// let elNumero = Number(prompt("Elige un número"));
// if (!Number.isNaN(elNumero)) {
//      console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);
// }

if (1 + 1 == 2) console.log("Es verdad"); // -> Es verdad

/*
    La palabra clave else se puede usar, junto con if, para crear dos caminos
    de ejecución alternativos, de una manera separada.
*/

// let elNumero = Number(prompt("Elige un numero"));

// if (!Number.isNaN(elNumero)) {
//     console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);
// } else {
//     console.log("Ey. Por qué no me diste un número?");
// }

/*
    Si tenemos más de dos rutas a elegir, múltiples pares de if/else se
    pueden "encadenar". Aquí hay un ejemplo:
*/

// let numero = Number(prompt("Elige un numero"));

// if (numero < 10) {
//     console.log("Pequeño");
// } else if (numero < 100) {
//     console.log("Mediano");
// } else {
//     console.log("Grande");
// }

// El esquema de este programa se ve así:

/*  
            |=========>
            |
    ======>        |=====> |======>
            |====> |=====>
*/

// ====== Ciclos While y Do

/* 
    Considera un programa que muestra todos los números pares de 0 a 12. Una
    forma de escribir esto es la siguiente:
*/

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

/*
    Eso funciona, pero la idea de escribir un programa es hacer de algo menos
    trabajo, no más. Si necesitamos todos los números pares menores a 1000,
    este enfoque sería poco práctico. Lo que necesitamos es una forma de ejecutar
    una pieza de código multiples veces. Esta forma de flujo de control es llamada
    un ciclo (o "loop"):
*/

/*
    ========> 0 ======>
            |  |
            <==>
*/

/*
    El flujo de control de ciclos nos permite regresar a algún punto del programa
    en donde estábamos antes y repetirlo con nuestro estado del programa actual.
*/

let numero = 0;

while (numero <= 12) {
    console.log(numero);
    numero = numero + 2;
}
// -> 0
// -> 2
// ... etcétera

let resultado = 1;
let contador = 0;

while (contador < 10) {
    resultado = resultado * 2;
    contador++
}

console.log(resultado) // 1024

/*
    Un ciclo do es una estructura de control similar a un ciclo while. Difiere
    solo en un punto: un ciclo do siempre ejecuta su cuerpo al menos una vez, y
    comienza a chequear si debe detenerse solo después de esa primera ejecución.
    Para reflejar esto, la prueba aparece después del cuerpo del ciclo:
*/

// let tuNombre;
// do {
//     tuNombre = prompt("Quién eres?");
// } while (!tuNombre)
// console.log(tuNombre)

// Indentando Código

/*
    Podríamos escribir un programa en una sola línea inmensa. El rol de la identación 
    dentro de los bloques es hacer que la estructura del código se destaque. En código
    donde se abren nuevos bloques dentro de otros bloques, puede ser difícil ver dónde
    termina un bloque y donde comienza el otro. Con la indentación apropiada, la forma
    visual de un programa corresponde a la forma de los bloques dentro de él.
*/

if (false != true) {
    console.log("Esto tiene sentido.");
    if (1 < 2) {
        console.log("Ninguna sorpresa allí.")
    }
}

// ====== Ciclos For

/*
    Existe un patrón muy común a la hora de crear ciclos. Primero una vinculación
    "contador" se crea para seguir el proceso del ciclo. Entonces viene un ciclo while,
    generalmente con una expresión de prueba que verifica si el contador ha alconzado su
    valor final. Al final del cuerpo del ciclo, el contador se actualiza para mantener un
    seguimiento del proceso.

    Debido a este patrón común, JavaScript y otros lenguajes similares proporcionan una forma
    un poco más corta y más completa, el ciclo for:
*/

for (let numero = 0; numero <= 12; numero += 2) {
    console.log(numero);
}

// -> 0
// -> 2
// ... etcétera

// Primero: inicializa el ciclo.
// Segundo: valida si el ciclo debe continuar.
// Tercero: actualiza el estado del ciclo después de cada iteración.

// Ejemplo que calcula 2^10, usando for en lugar de while:

let resultadoPotencia = 1;
for (let contador = 0; contador < 10; contador++) {
    resultadoPotencia = resultadoPotencia * 2;
}
console.log(resultadoPotencia); // -> 1024

// ====== Rompiendo un Ciclo

/*
    Hacer que la condición del ciclo produzca false no es la única forma
    en que el ciclo puede terminar. Hay una declaración especial llamada break
    ("romper") que tiene el efecto de inmediatamente saltar afuera del ciclo
    circundante.

    Este programa ilustra la declaración break. Encuentra el primer número que
    es a la vez mayor o igual a 20 y divisible por 7.
*/

for (let actual = 20; ; actual = actual + 1) {
    if (actual % 7 == 0) {
        console.log(actual);
        break;
    }
} // -> 21

/*
    La palabra clave continue ("continuar") es similar a break, en que influye el
    progreso de un ciclo. Cuando continue se encuentre en el cuerpo de un ciclo,
    el control salta afuera del cuerpo y continúa con la siguiente iteración del ciclo.
*/

// ====== Actualizando Vinculaciones de Manera Sucinta

/*
    Un programa a menudo necesita "actualizar" una vinculación para mantener un valor
    basandose en el valor anterior de esa vinculación.
*/

// let contador2 = contador2 + 1;

// JavaScript provee de un atajo para esto:

// contador2 += 1;

/*
    Atajos similares funcionan para muchos otros operadores, como "resultado
    *= 2" para duplicar "resultado" o "contador -= 1" para contar hacia abajo.
    Esto nos permite acortar un poco más nuestro ejemplo de conteo.
*/

for (let numero = 0; numero <= 12; numero += 2) {
    console.log(numero);
}

/*
    Para contador += 1 y contador -= 1, hay incluso equivalentes más cortos:
    contador++ y contador --.
*/

// ====== Despachar una valor con Switch

// No es común que el código se vea así:

// if (x == "valor1") accion();
// else if (x == "valor2") accion2();
// else if (x == "valor3") accion3();
// else accionPorDefault();

/*
    Existe un constructo llamado switch que está destinada a expresar tales
    "despachos" de una manera más directa. Desafortunadamente, la sintaxis que
    JavaScript usa para esto es algo incómoda, una cadena de declaraciones if podría
    llegar a verse mejor. Aquí hay un ejemplo:
*/

let clima = "lluvioso";

switch (clima) {
    case "lluvioso":
        console.log("Recuerda salir con paraguas.");
        break;
    case "soleado":
        console.log("Vístete con poca ropa.");
    case "nublado":
        console.log("Ve afuera.");
        break;
    default:
        console.log("Tipo de clima desconocido!");
        break;
}

/*
    Se pueden poner cualquier número de etiquetas de case dentro del bloque abierto
    por switch. El programa comenzará a ejecutarse en la etiqueta que corresponde
    al valor que se le dio a switch, o en default si no se encuentra ningún valor
    que coincida. Continuará ejecutándose, incluso a través de otras etiquetas,
    hasta que llegue a una declaración break.
*/

// ====== Capitalización

/*
    Los nombres de vinculaciones no pueden contener espacios, sin embargo, a
    menudo es útil usar múltiples palabras para describir claramente lo que representa
    la vinculación. Estas son más o menos tus opciones para escribir el nombre
    de una vinculación con varias palabras en ella:
*/

let pequeñatortugaverde, // Difícil de leer
pequeña_tortuga_verde, // snake_case
PequeñaTortugaVerde, // PascalCase
pequeñaTortugaVerde; // camelCase

/*
    En JavaScript se suele utilizar "camelCase".

    En algunos casos, como en la función "Number", la primera letra de la vin-
    culación también está en mayúscula. Esto se hizo para marcar esta función
    como un constructor.
*/

// ====== Comentarios

/*
    Un comentario es una pieza de texto que es parte de un programa pero que
    es completamente ignorado por la computadora. JavaScript tiene dos formas
    de escribir comentarios. Para escribir un comentario de una sola línea, puede
    usar dos caracteres de barras inclinadas (//) y luego el texto del comentario después.

    let balanceDeCuenta = calcularBalance(cuenta);
    // Es un claro del bosque donde canta un río
    balanceDeCuenta.ajustar();
    // Cuelgan enloquecidamente de las hierbas harapos de plata
    let reporte = new Reporte();
    // Donde el sol de la orgullosa montaña luce:
    añadirAReporte(balanceDeCuenta, reporte);
    // Un pequeño valle espumoso de luz.

    Un comentario // va solo hasta el final de la línea. Una sección de texto entre
    /* y */ /* se ignorará en su totalidad, independientemente de si contiene saltos
    de línea. Esto es útil para agregar bloques de información sobre un archivo o
    un pedazo de programa.
*/

/*
    Primero encontré este número garabateado en la parte posterior de un viejo cuaderno.
    Desde entonces, a menudo lo he visto, apareciendo en números de teléfono y en los números
    de serie de productos que he comprado. Obviamente me gusta, así que decidí quedármelo.
*/

const miNumero = 11213;

// ====== Resumen

/*
    Un programa está construido a partir de declaraciones, las
    cuales a veces pueden contener más declaraciones. Las declaraciones tienden a
    contener expresiones, que a su vez se pueden construir a partir de expresiones
    más pequeñas.

    Poner declaraciones una después de otra da un programa que es ejecutado
    de arriba hacia abajo. Se pueden introducir alteraciones en el flujo de control
    usando declaraciones condicionales (if, else, y switch) y ciclos (while, do, y
    for).

    Las vinculaciones se pueden usar para archivar datos bajo un nombre, y son
    útiles para el seguimiento de estado en un programa. El entorno es el conjunto
    de vinculaciones que se definen. Los sistemas de JavaScript siempre incluyen
    por defecto un número de vinculaciones estándar útiles en el entorno.

    Las funciones son valores especiales que encapsulan una parte del programa.
    Se pueden invocar escribiendo nombreDeLaFuncion(argumento1, argumento2).
    Tal llamada a función es una expresión, y puede producir un valor.
*/


// =========================
// = Capítulo 3: Funciones =
// =========================

/*
    Las funciones son el pan y la mantequilla de la programación en JavaScript.
    El concepto de envolver una pieza de programa en un valor tiene muchos usos.
    Esto nos da una forma de estructurar programas más grandes, de reducir la repetición,
    de asociar nombres con subprogramas y de aislar estos subprogramas unos con otros.
*/

// ====== Definiendo una función

const cuadrado = function(x) {
    return x * x;
}

console.log(cuadrado(12)) // 144

/*
    Una función puede tener múltiples parámetros o ningún parámetro en absoluto.
    En el siguiente ejemplo, hacerSonido no lista ningún nombre de parámetro, mientras
    que potencia enumera.```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

/*
    Existe un tercera notación para funciones, que se ve muy diferente de las otras.
    En lugar de la palabra clave function, usa una flecha (=>) compuesta de los caracteres
    igual y mayor que.
*/

const aLaPontencia = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        resultado *= base;
    }
    return resultado;
}

/*
    Cuando solo haya un solo nombre de parámetro, los paréntesis alrededor de
    la lista de parámetros puede ser omitida.
*/

const cuadrado1 = (x) => { return x * x; };
const cuadrado2 = x => x * x;

/*
    Cuando una función de flecha no tiene parámetros, su lista de parámetros
    es solo un conjunto vacío de paréntesis.
*/

const bocina = () => {
    console.log("Toot");
};

// ====== La Pila de Llamadas

function saludar(quien) {
    console.log("Hola " + quien);
}
saludar("Harry");
console.log("Adios");

/* 
    Un recorrido por este programa es más o menos así:

    no en una función
        en saludar
            en console.log
        en saludar
    no en una función
        en console.log
    no en una función
*/

/*
    Ya que una función tiene que regresar al lugar donde fue llamada cuando esta
    retorna, la computadora debe recordar el contexto de donde sucedío la llamada.
    En un caso, console.log tiene que volver a al función saludar cuando está lista.
    En el otro caso, vuelve al final del programa.

    El lugar donde la computadora almacena este contexto es la pila de llamadas.
    Cada vez que se llama a una función, el contexto actual es almacenado en la
    parte superior de esta “pila”. Cuando una función retorna, elimina el contexto
    superior de la pila y lo usa para continuar la ejecución.

    Almacenar esta pila requiere espacio en la memoria de la computadora.
    Cuando la pila crece demasiado grande, la computadora fallará con un mensaje como “fuera de espacio de pila” o “demasiada recursividad”. El siguiente
    código ilustra esto haciendo una pregunta realmente difícil a la computadora,
    que causara un ir y venir infinito entre las dos funciones. Mejor dicho, sería
    infinito, si la computadora tuviera una pila infinita. Como son las cosas, nos
    quedaremos sin espacio, o “explotaremos la pila”.
*/

// function gallina() {
//     return huevo();
// }

// function huevo() {
//     return gallina();
// }

// console.log(gallina() + " vino primero.")
// -> ??

// ====== Argumentos Opcionales

// El siguiente código está permitido y se ejecuta sin ningún problema:
function cuadrado3(x) { return x * x; }
console.log(cuadrado3(4, true, "erizo"));
// -> 16

/*
    Definimos cuadrado con solo un parámetro. Sin embargo, cuando lo llamamos
    con tres, el lenguaje no se queja. Este ignora los argumentos extra y calcula
    el cuadrado del primero.

    JavaScript es de extremadamente mente-abierta sobre la cantidad de argumentos
    que puedes pasar a una función. Si pasa demasiados, los adicionales
    son ignorados. Si pasas muy pocos, a los parámetros faltantes se les asigna
    el valor undefined.

    La ventaja es que este comportamiento se puede usar para permitir que
    una función sea llamada con diferentes cantidades de argumentos. Por ejemplo,
    esta función "menos" intenta imitar al operador - actuando ya sea en uno o dos
    argumentos.
*/

function menos(a, b) {
    if (b == undefined) return -a;
    else return a - b;
}

console.log(menos(10));
// -> -10
console.log(menos(10, 5));
// -> 5

/*
    Si se escribe un operador = después un parámetro, seguido de una expresión,
    el valor de esa expresión reemplazará al argumento cuando este no sea dado.
*/

function potencia(base, exponente = 2) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        resultado *= base;
    }
    return resultado;
}

console.log(potencia(4)); // -> 16
console.log(potencia(2, 6)); // -> 64

/*
    Existe una forma en el que el cuerpo de una función
    puede obtener una lista de todos los argumentos que son pasados.
    Esto es útil porque hace posible que una función acepte cualquier
    cantidad de argumentos. Por ejemplo, console.log hace esto, muestra
    en la consola todos los valores que se le den.
*/

console.log("C", "O", 2);
// -> C O 2

// ====== Cierre

// ¿Qué sucede con las vinculaciones locales cuando la llamada de función
// que las creó ya no está activa?

function envolverValor(n) {
    let local = n;
    return () => local;
}

let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);

console.log(envolver1()); // -> 1
console.log(envolver2()); // -> 2


/*
    Poder hacer referencia a una instancia específica de una 
    vinculación local en un alcance encerrado, se llama cierre.
*/

function multiplicador(factor) {
    return numero => numero * factor;
}

let duplicar = multiplicador(2);

console.log(duplicar(5)); // -> 10

/*
    La vinculación explícita local del ejemplo envolverValor no es
    realmente necesaria ya que un parámetro es en sí mismo una vinculación local.
*/

// ====== Recursión

/*
    Está bien que una función se llame a sí misma, simpre que no lo haga tanto
    que desborde la pila. Una función que se llama a si misma es llamada recursiva.
    La recursión permite que algunas funciones sean escritas en un estilo diferente.
    Por ejemplo esta implementación alternativa de potencia:
*/

function potenciaRecursiva(base, exponente) {
    if (exponente == 0) {
        return 1;
    } else {
        return base * potenciaRecursiva(base, exponente - 1);
    }
}

console.log(potenciaRecursiva(2, 3)); // -> 8

/*
    El dilema de la velocidad versus elegancia es interesante. Puedes verlo como una
    especie de compromiso entre accesibilidad-humana y accesibilidad-maquina.
    Casi cualquier programa se puede hacer más rápido haciendolo más grande y
    complicado. El programador tiene que decidir acerca de cual es un equilibrio
    apropiado.
*/

/*
    La recursión no siempre es solo una alternativa ineficiente a los ciclos. Al-
    gunos problemas son realmente más fáciles de resolver con recursión que con
    ciclos. En la mayoría de los casos, estos son problemas que requieren
    explorar o procesar varias "ramas", cada una de las cuales podría ramificarse de nuevo
    en aún más ramas.
*/

/*
    Considera este acertijo: comenzando desde el número 1 y repetidamente
    agregando 5 o multiplicando por 3, una cantidad infinita de números nuevos pueden
    ser producidos. ¿Cómo escribirías una función que, dado un número, intente
    encontrar una secuencia de tales adiciones y multiplicaciones que produzca ese número?

    Por ejemplo, se puede llegar al número 13 multiplicando primero por 3 y luego
    agregando 5 dos veces, mientrar que el número 15 no puede ser alcanzado de ninguna manera.
    
    Aquí hay una solución recursiva:
*/

function encontrarSolucion (objetivo) {
    function encontrar(actual, historia) {
        if (actual == objetivo) {
            return historia;
        } else if (actual > objetivo) {
            return null;
        } else {
            return encontrar(actual + 5, `(${historia} + 5)`) ||
                encontrar(actual * 3, `(${historia} * 3)`);
        }
    }
    return encontrar(1, "1");
}

console.log(encontrarSolucion(24));

/*
    Para comprender mejor cómo esta función produce el efecto que estamos bus-
    cando, veamos todas las llamadas a encontrar que se hacen cuando buscamos
    una solución para el número 13.

    encontrar(1, "1")
        encontrar(6, "(1 + 5)")
            encontrar(11, "((1 + 5) + 5)")
                encontrar(16, "(((1 + 5) + 5) + 5)")
                    muy grande
                encontrar(33, "(((1 + 5) + 5) * 3)")
                    muy grande
            encontrar(18, "((1 + 5) * 3)")
                muy grande
        encontrar(3, "(1 * 3)")
            encontrar(8, "((1 * 3) + 5)")
                encontrar(13, "(((1 * 3) + 5) + 5)")
                    ¡encontrado!

        La indentación indica la profundidad de la pila de llamadas. La primera vez
    que encontrar es llamada, comienza llamandose a sí misma para explorar la
    solución que comienza con (1 + 5). Esa llamada hara uso de la recursión aún
    más para explorar cada solución continuada que produzca un número menor
    o igual a el número objetivo. Como no encuentra uno que llegue al objetivo,
    retorna null a la primera llamada. Ahí el operador || genera la llamada que
    explora (1 * 3) para que esta suceda. Esta búsqueda tiene más suerte—su
    primera llamada recursiva, a través de otra llamada recursiva, encuentra al
    número objetivo. Esa llamada más interna retorna un string, y cada uno de los
    operadores || en las llamadas intermedias pasa ese string a lo largo, en última
    instancia retornando la solución.
*/

// ====== Funciones Crecientes

/* 
    Hay dos formas más o menos naturales para que las funciones sean introducidas
    en los programas. La primera es que te encuentras escribiendo código muy similar
    múltiples veces. La segunda forma es que encuentres que necesitas alguna funcionalidad
    que aún no has escrito y parece que merece su propia función.
*/

/*
    Veamos un ejemplo. Queremos escribir un programa que imprima dos números, los
    números de vacas y pollos en una granja, con las palabras Vacas y Pollos después de ellos,
    y ceros acolchados antes de ambos números para que siempre tengan tres dígitos de largo.

    007 Vacas
    011 Pollos

    Esto pide una función de dos argumentos, el número de vacas y número de pollos. Vamos a programar.
*/

function imprimirInventarioGranja1(vacas, pollos) {
    let stringVaca = String(vacas);
    while (stringVaca.length < 3) {
        stringVaca = "0" + stringVaca;
    }
    console.log(`${stringVaca} Vacas`);
    let stringPollos = String(pollos);
    while (stringPollos.length < 3) {
        stringPollos = "0" + stringPollos;
    }
    console.log(`${stringPollos} Pollos`);
}
imprimirInventarioGranja1(7, 11);

/*
        Escribir .length después de una expresión de string nos dará la longitud de
    dicho string. Por lo tanto, los ciclos while seguiran sumando ceros delante del
    string de numeros hasta que este tenga al menos tres caracteres de longitud.
        Misión cumplida! Pero justo cuando estamos por enviar el código a la agricultora 
    (junto con una considerable factura), ella nos llama y nos dice que ella también 
    comenzó a criar cerdos, y que si no podríamos extender el software para imprimir 
    cerdos también?
        Claro que podemos. Pero justo cuando estamos en el proceso de copiar y
    pegar esas cuatro líneas una vez más, nos detenemos y reconsideramos. Tiene
    que haber una mejor manera. Aquí hay un primer intento:
*/

function imprimirEtiquetaAlcochadaConCeros(numero, etiqueta) {
    let stringNumero = String(numero);
    while (stringNumero.length < 3) {
        stringNumero = "0" + stringNumero;
    }
    console.log(`${stringNumero} ${etiqueta}`);
}

function imprimirInventarioGranja2(vacas, pollos, cerdos) {
    imprimirEtiquetaAlcochadaConCeros(vacas, "Vacas");
    imprimirEtiquetaAlcochadaConCeros(pollos, "Pollos");
    imprimirEtiquetaAlcochadaConCeros(cerdos, "Cerdos");
}

imprimirInventarioGranja2(7, 11, 3);

/*
        Funciona! Pero ese nombre, imprimirEtiquetaAlcochadaConCeros, es un
    poco incómodo. Combina tres cosas, impresión, alcochar con ceros y añadir
    una etiqueta en una sola función.
        En lugar de sacar la parte repetida de nuestro programa al por mayor,
    intentemos elegir un solo concepto.
*/

function alcocharConCeros(numero, amplitud) {
    let string = String(numero);
    while (string.length < amplitud) {
        string = "0" + string;
    }
    return string;
}

function imprimirInventarioGranja3(vacas, pollos, cerdos) {
    console.log(`${alcocharConCeros(vacas, 3)} Vacas`);
    console.log(`${alcocharConCeros(pollos, 3)} Pollos`);
    console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`);
}

imprimirInventarioGranja3(7, 16, 3);

/*
    Una Función con un nombre agradable y obvio como alcocharConCeros hace
    que sea más fácil de entender lo que hace para alguien que lee el código. Y
    tal función es útil en situaciones más allá de este programa en específico. Por
    ejemplo, podrías usarla para ayudar a imprimir tablas de números en una manera
    alineada.

    Un principio útil es no agregar mucho ingenio a menos que estes absolutamente seguro
    de que lo vas a necestitar. Puede ser tentador escribir "frameworks" generalizados
    para cada funcionalidad que encuentres. Resiste ese impulso. No realizarás ningún
    trabajo real de esta manera, solo estarás escribiendo código que nunca usarás.
*/

// ====== Funciones y efectos secundarios

/*
        Las Funciones se pueden dividir aproximadamente en aquellas que se llaman por sus
    efectos secundarios y aquellas que son llamadas por su valor de retorno.
    (Aunque definitivamente también es posible tener tanto efectos secundarios como
    devolver un valor en una misma función).
        La primera función auxiliar en el ejemplo de la granja, imprimirEtiquetaAlcochada,
    se llama por su efecto secundario: imprime una línea. La segunda versión,
    alcocharConCeros, se llama por su valor de retorno. No es coincidencia que la segunda
    sea útil en más situaciones que la primera. Las funciones que crean valores son más fáciles
    de combinar en nuevas formas que las funciones que directamente realizan efectos secundarios.
        Una función pura es un tipo específico de función de producción de valores que no solo
    no tiene efectos secundarios pero que tampoco depende de los efectos secundarios de otro
    código, por ejemplo, no lee vinculciones globales cuyos valores puedan cambiar. Una función
    pura tiene la propiedad agradable de que cuando se le llama con los mismos argumentos, siempre
    produce el mismo valor (y no hace nada más).
*/

// ====== Resumen

/*
        Este capítulo enseña a escribir tus propias funciones. La palabra clave
    function, cuando se usa como una expresión, puede crear un valor de función. Cuando se usa como 
    una declaración, se puede usar para declarar una vinculación y darle una función como su valor. 
    Las funciones de flecha son otra forma más de crear funciones.

    // Define f para sostener un valor de función
    const f = function(a) {
        console.log(a + 2);
    };
    // Declara g para ser una función
    function g(a, b) {
        return a * b * 3.5;
    }
    // Un valor de función menos verboso
    let h = a => a % 3;

        Un aspecto clave en programación para comprender a las funciones es comprender los alcances. 
    Cada bloque crea un nuevo alcance. Los parámetros y vinculaciones declaradas en un determinado 
    alcance son locales y no son visibles desde el exterior. Vinculaciones declaradas con var se 
    comportan de manera diferente, y terminan en el alcance de la función más cercana o en el alcance 
    global.
        Separar las tareas que realiza tu programa en diferentes funciones es util.
    No tendrás que repetirte tanto, y las funciones pueden ayudar a organizar un
    programa agrupando el código en piezas que hagan cosas especificas.
*/


// ======================================================
// = Capítulo 4: Estructuras de Datos: Objetos y Arrays =
// ======================================================

/*
    Los números, los booleanos y los strings son los átomos que constituyen
    las estructuras de datos. Sin embargo, muchos tipos de información requieren
    más de un átomo. Los objetos nos permiten agrupar valores, incluidos otros
    objetos para construir estructuras más complejas.
*/

// ====== El Hombre Ardilla

/*
        De vez en cuando, generalmente entre las ocho y las diez de la noche, Jacques
    se encuentra a si mismo transformándose en un pequeño roedor peludo con una
    cola espesa.
        Por un lado, Jacques está muy contento de no tener la licantropía clásica.
    Convertirse en una ardilla causa menos problemas que convertirse en un lobo.
    En lugar de tener que preocuparse por accidentalmente comerse al vecino (eso
    sería incómodo), le preocupa ser comido por el gato del vecino. Después de
    dos ocasiones en las que se despertó en una rama precariamente delgada de la
    copa de un roble, desnudo y desorientado, Jacques se ha dedicado a bloquear
    las puertas y ventanas de su habitación por la noche y pone algunas nueces en el 
    piso para mantenerse ocupado.
        Eso se ocupa de los problemas del gato y el árbol. Pero Jacques preferiría
    deshacerse de su condición por completo. Las ocurrencias irregulares de la
    transformación lo hacen sospechar que estas podrían ser provocadas por algo
    en especifico. Por un tiempo, creyó que solo sucedia en los días en los que
    el había estado cerca de árboles de roble. Pero evitar los robles no detuvo el
    problema.
        Cambiando a un enfoque más científico, Jacques ha comenzado a mantener
    un registro diario de todo lo que hace en un día determinado y si su forma cambio. Con esta información el espera reducir las condiciones que desencadenan
    las transformaciones.
    Lo primero que el necesita es una estructura de datos para almacenar esta
    información.
*/

// ====== Conjunto de Datos

/*
    JavaScript proporciona un tipo de datos específicamente
    para almacenar secuencias de valores. Es llamado array y está escrito
    como una lista de valores entre corchetes, separados por comas.
*/

let listaDeNumeros = [2, 3, 5, 7, 11];
console.log(listaDeNumeros[2]); // -> 5
console.log(listaDeNumeros[0]); // -> 2
console.log(listaDeNumeros[2 - 1]); // -> 3

/*
    La notación para llegar a los elementos dentro de un array también utiliza
    corchetes. Un par de corchetes inmediatamente después de una expresión,
    con otra expresión dentro de ellos, buscará al elemento en la expresión de
    la izquierda que corresponda al índice dado por la expresión entre corchetes.
*/

// ====== Propiedades

/*
    Casi todos los valores de JavaScript tienen propiedades. Las excepciones
    son null y undefined. Si intentas acceder a una propiedad en alguno de estos
    no-valore, obtienes un error.

    null.length;
    // -> TypeError: null has no properties.

    Las dos formas principales de acceder a las propiedades en JavaScript son con
    un punto y con corchetes. Tanto valor.x como valor[x] acceden una propiedad
    en valor, pero no necesariamente la misma propiedad. La diferencia está en
    cómo se interpreta x.
        Entonces, si sabes que la propiedad que te interesa se llama color, dices
    valor.color. Si quieres extraer la propiedad nombrado por el valor mantenido en
    la vinculación i, dices valor[i]. Los nombre de las propiedades son strings.
    Pueden ser cualquier string, pero la notación de puntos solo funciona con nombres
    que se vean como nombre de vinculaciones válidos. Entonces, si quieres acceder a
    una propiedad llamada 2 o Juan Perez, debes usar corchetes: valor[2] o
    valor["Juan Perez"].
        Los elementos en un array son almacenados como propiedades del array,
    usando números como nombres de propiedad.
        La propiedad length de un array nos dice cuántos elementos este tiene. Este
    nombre de propidedad es un nombre de vinculación válido, y sabemos su nombre en avance,
    así que para encontrar la longitud de un array, normalmente escribes
    array.length ya que es más fácil de escribir que array["length"].
*/

// ====== Métodos

/*
    Ambos objetos de string y array contienen, además de la propiedad length,
    una serie de propiedaes que tienen valores de función.
*/

let ouch = "Ouch";
console.log(typeof ouch.toUpperCase); // -> function
console.log(ouch.toUpperCase()); // -> OUCH

/*
        Cada string tiene una propiedad toUpperCase ("a mayúsculas"). Cuando se llame, regresará
    una copia del string en la que todas las letras han sido convertidas a
    mayúsculas. También hay toLowerCase("a minúscula"), que hace lo contrario.
        Las propiedades que contienen funciones generalmente son llamadas métodos del valor al
    que pertenecen. Como en, "toUpperCase es un método de string".
*/

// Este ejemplo demuestra dos métodos que puedes usar para manipular arrays:

let secuencia = [1, 2, 3];
secuencia.push(4);
secuencia.push(5);
console.log(secuencia); // -> [1, 2, 3, 4, 5]
console.log(secuencia.pop()); // - 5
console.log(secuencia); // -> [1, 2, 3, 4]

/*
        El método push agrega valores al final de un array, y el el método pop hace
    lo contrario, eliminando el último valor en el array y retornandolo.
        Estos nombres algo tontos son los términos tradicionales para las operaciones
    en una pila. Una pila, en programación, es un estructura de datos que te permite
    agregar valores a ella y volverlos a sacar en el orden opuesto, de modo que lo que se
    agregó de último se elimine primero.
*/

// ====== Objetos

/*
        De vuelta al Hombre-Ardilla. Un conjunto de entradas diarias puede ser representado
    como un array. Pero estas entradas no consisten en solo un número o un string, cada
    entrada necesita almacenar una lista de actividades y un valor booleano que indica si
    Jacques se convirtió en una ardilla o no. Idealmente, nos gustaría agrupar estos en un
    solo valor y luego agrupar estos valores en un array de registro de entradas.
        Las valores del tipo objeto son colecciones arbitrarias de propiedades. Una forma de
    crear un objeto es mediante el uso de llaves como una expresión.
*/

let dia1 = {
    ardilla: false,
    eventos: ["trabajo", "toque un arbol", "pizza", "salir a correr"]
}
console.log(dia1.ardilla); // -> false
console.log(dia1.lobo); // -> undefined
dia1.lobo = false;
console.log(dia1.lobo);// -> false

/*
    Dentro de las llaves, hay una lista de propiedades separadas por coma,
    cada propiedad tiene un nombre seguido de dos puntos y un valor. Cuando
    un objeto está escrito en varias líneas, indentar como en el ejemplo ayuda
    con la legibilidad. Las propiedades cuyos nombre no sean nombres válidos de
    vinculaciones o números válidos deben estar entre comillas.
*/

let descripciones = {
    trabajo: "Fui a trabajar",
    "toque un arbol": "Toque un arbol"
}

/*
        Esto significa que las llaves tienen dos significados en JavaScript. Al comienzo
    de una declaración, comienzan un bloque de declaraciones.En cualquier otra posición,
    describen un objeto.

        Para volver brevemente a nuestro modelo de vinculaciones como tentáculos. Las vinculaciones
    de propiedad son similares. Ellas agarran valores, pero otras vinculaciones y propiedades
    pueden estar agarrando esos mismos valores. Puedespensar en los objetos como pulpos
    con cualquier cantidad de tentáculos, cada una de los cuales tiene un nombre tatuado en él.
    
        El operador delete ("eliminar") corta un tentáculo de dicho pulpo. Es un operador unario
    que, cuando se aplica a la propiedad de un objeto, eliminará la propiedad nombrada de dicho
    objeto. Esto no es algo que hagas todo el tiempo, pero es posible.
*/

let unObjeto = {izquierda: 1, derecha: 2};
console.log(unObjeto.izquierda); // -> 1
delete unObjeto.izquierda;
console.log(unObjeto.izquierda); // -> undefined
console.log("izquierda" in unObjeto); // -> false
console.log("derecha" in unObjeto); // -> true

/*
        El operador binario in (“en”), cuando se aplica a un string y un objeto, te
    dice si ese objeto tiene una propiedad con ese nombre. La diferencia entre
    darle un valor de undefined a una propiedad y eliminarla realmente es que,
    en el primer caso, el objeto todavía tiene la propiedad (solo que no tiene un
    valor muy interesante), mientras que en el segundo caso la propiedad ya no
    está presente e in retornara false.
*/

/*
        Para saber qué propiedades tiene un objeto, puedes usar la función Object.keys.
    Le das un ojeto y devuelve un array de strings, los nombres de las propiedades del
    objeto.
*/

console.log(Object.keys({x: 0, y: 0, z: 2})); // -> ["x", "y", "z"]

/*
    Hay una función Object.assign que copia todas las propiedades de un objeto a otro.
*/

let objetoA = {a: 1, b: 2};
Object.assign(objetoA, {b: 3, c: 4});
console.log(objetoA); // -> {a: 1, b: 3, c: 4}

/*
        Los arrays son, entonces, solo un tipo de objeto especializado para almacenar
    secuencias de cosas. Si evalúas typeof [], este produce "object". Podrias
    imaginarlos como pulpos largos y planos con todos sus tentáculos en una fila
    ordenada, etiquetados con números.
*/

// Representaremos el diario de Jacques como un array de objetos.

let diarioEjemplo = [
    {
        eventos: ["trabajo", "toque un arbol", "pizza", "sali a correr", "television"],
        ardilla: false
    },
    {
        eventos: ["trabajo", "helado", "coliflor", "lasaña", "toque un arbol", "me cepille los dientes"],
        ardilla: false
    },
    {
        eventos: ["fin de semana", "monte la bicicleta", "descanso", "nueces", "cerveza"],
        ardilla: true
    },
    /* y asi sucesivamente... */
];

// ====== Mutabilidad

/*
        Los valores de objetos pueden ser modificados. Los tipos de valores
    discutidos en capítulos anteriores, como número, strings y booleanos, son
    todos inmutables, es imposible cambiar los valores de aquellos tipos. Puedes
    combinarlos y obtener nuevos valores a partir de ellos, pero cuando tomas un
    valor de string específico, ese valor siempre será el mismo. El texto dentro
    de él no puede ser cambiado. Si tienes un string que contiene "gato", no es posible
    que otro código cambie un carácter en tu string para que deletree "rato".
        Los objetos funcionan de una manera diferente. Tu puedes cambiar sus propiedades,
    haciendo que un único valor de objeto tenga contenido diferente en diferentes momentos.
        Cuando tenemos dos números, 120 y 120, podemos considerarlos el mismo número
    precisamente, ya sea que hagan referencia o no a los mismos bits físicos. Con los
    objetos, hay un diferencia entre tener dos referencias a el mismo objeto y tener dos
    objetos diferentes que contengan las mismas propiedades. Considera el siguiente código:
*/

let objeto1 = {valor: 10};
let objeto2 = objeto1;
let objeto3 = {valor: 10};

console.log(objeto1 == objeto2); // -> true
console.log(objeto1 == objeto3); // -> false

objeto1.valor = 15;
console.log(objeto2.valor); // -> 15
console.log(objeto3.valor); // -> 10

/*
        Las vinculaciones objeto1 y objeto2 agarran el mismo objeto, que es la
    razon por la cual cambiar objeto1 también cambia el valor de objeto2. Se dice
    que tienen la misma identidad. La vinculación objeto3 apunta a un objeto
    diferente, que inicialmente contiene las mismas propiedades que objeto1 pero
    vive una vida separada.
        Las vinculaciones también pueden ser cambiables o constantes, pero esto es
    independiente de la forma en la que se comportan sus valores. Aunque los
    valores numéricos no cambian, puedes usar una vinculación let para hacer un
    seguimiento de un número que cambia al cambiar el valor al que apunta la
    vinculación. Del mismo modo, aunque una vinculación const a un objeto no
    pueda ser cambiada en si misma y continuará apuntando al mismo objeto, los
    contenidos de ese objeto pueden cambiar.
*/

const puntuacion = {visitantes: 0, locales: 0};
// Esto esta bien
puntuacion.visitantes = 1;
// Esto no esta permitido
// puntuacion = {visitantes: 1, locales: 1};

/*
    Cuando comparas objetos con el operador == en JavaScript, este los compara
    por identidad: producirá true solo si ambos objetos son precisamente el mismo valor.
    Comparar diferentes objetos retornará false, incluso si tienen propiedades
    idénticas. No hay una operación de comparación "profunda" incorporada en JavaScript,
    que compare objetos por contenidos, pero es posible escribir una (que es un ejercicio
    al final del capítulo).
*/

// El Diario Del Licántropo

/* 
    Así que Jacques inicia su intérprete de JavaScript y establece el entorno que 
    necesita para mantener su diario.
*/

let diario = [];

function añadirEntrada(eventos, ardilla) {
    diario.push({ eventos, ardilla });
}

/*
        Ten en cuenta que el objeto agregado al diario se ve un poco extraño. En
    lugar de declarar propiedades como eventos: eventos, simplemente da un nombre de propiedad. 
    Este es un atajo que representa lo mismo, si el nombre de propiedad en la notación de llaves 
    no es seguido por un valor, su el valor se toma de la vinculación con el mismo nombre.
        Entonces, todas las noches a las diez, o algunas veces a la mañana siguiente,
    después de bajar del estante superior de su biblioteca, Jacques registra el día.
*/

añadirEntrada(["trabajo", "toque un arbol", "pizza", "sali a correr", "television"], false);
añadirEntrada(["trabajo", "helado", "coliflor", "lasaña", "toque un arbol", "me cepille los dientes"], false);
añadirEntrada(["fin de semana", "monte la bicicleta", "descanso", "nueces", "cerveza"], true);

/*
        Una vez que tiene suficientes puntos de datos, tiene la intención de utilizar
    estadísticas para encontrar cuál de estos eventos puede estar relacionado con
    la transformación a ardilla.
        La correlación es una medida de dependencia entre variables estadísticas.
    Una variable estadística no es lo mismo que una variable de programación. En
    las estadísticas, normalmente tienes un conjunto de medidas, y cada variable
    se mide para cada medida. La correlación entre variables generalmente se
    expresa como un valor que varia de -1 a 1. Una correlación de cero significa
    que las variables no estan relacionadas. Una correlación de uno indica que
    las dos están perfectamente relacionadas—si conoces una, también conoces la
    otra. Uno negativo también significa que las variables están perfectamente
    relacionadas pero que son opuestas—cuando una es verdadera, la otra es falsa.
    Para calcular la medida de correlación entre dos variables booleanas, podemos 
    usar el coeficiente phi (φ). Esta es una fórmula cuya entrada es una tabla
    de frecuencias que contiene la cantidad de veces que las diferentes combinaciones 
    de las variables fueron observadas. El resultado de la fórmula es un número entre 
    -1 y 1 que describe la correlación.
        Podríamos tomar el evento de comer pizza y poner eso en una tabla de
    frecuencias como esta, donde cada número indica la cantidad de veces que
    ocurrió esa combinación en nuestras mediciones:
*/

/*
    - No squirrel, No pizza: 76
    - No squirrel, pizza: 9
    - Squirrel, No pizza: 4
    - Squirrel, pizza: 1
*/

/*
    Si llamamos esa tabla n, podemos calcular P usando la siguiente fórmula:

        p = n11n00 - n10n01 / \/ n1 * n0 * n * 1n * 0

        La notación n01 indica el número de mediciones donde la primea variable
    (ardilla) es falso (0) y la segunda variable (pizza) es verdadera (1). En la
    tabla de pizza, n01 es 9.
        El valor n1• se refiere a la suma de todas las medidas donde la primera
    variable es verdadera, que es 5 en la tabla de ejemplo. Del mismo modo, n•0
    se refiere a la suma de las mediciones donde la segunda variable es falsa.
        Entonces para la tabla de pizza, la parte arriba de la línea de división (el
    dividendo) sería 1×76−4×9 = 40, y la parte inferior (el divisor) sería la raíz
    cuadrada de 5×85×10×80, o √340000. Esto da φ ≈ 0.069, que es muy pequeño.
    Comer pizza no parece tener influencia en las transformaciones.
*/

// ====== Calculando Correlación

/*
        Podemos representar una tabla de dos-por-dos en JavaScript con un array de
    cuatro elementos ([76, 9, 4, 1]). También podríamos usar otras representaciones, como un array que contiene dos arrays de dos elementos ([[76, 9],
    [4, 1]]) o un objeto con nombres de propiedad como "11" y "01", pero el
    array plano es simple y hace que las expresiones que acceden a la tabla agradablemente cortas. Interpretaremos los índices del array como número binarios
    de dos-bits , donde el dígito más a la izquierda (más significativo) se refiere a la
    variable ardilla y el digito mas a la derecha (menos significativo) se refiere a la
    variable de evento. Por ejemplo, el número binario 10 se refiere al caso en que
    Jacques se convirtió en una ardilla, pero el evento (por ejemplo, “pizza”) no
    ocurrió. Esto ocurrió cuatro veces. Y dado que el 10 binario es 2 en notación
    decimal, almacenaremos este número en el índice 2 del array.
        Esta es la función que calcula el coeficiente φ de tal array:
*/

function phi(tabla) {
    return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
        Math.sqrt(
            (tabla[2] + tabla[3]) *
            (tabla[0] + tabla[1]) *
            (tabla[1] + tabla[3]) *
            (tabla[0] + tabla[2])
        ); 
}

console.log(phi([76, 9, 4, 1]));
// -> 0,068599434

/*
        Esta es una traducción directa de la fórmula φ a JavaScript. Math.sqrt es
    la función de raíz cuadrada, proporcionada por el objeto Math en un entorno
    de JavaScript estándar. Tenemos que sumar dos campos de la tabla para obtener
    campos como n1. porque las sumas de filas o columnas no se almacenan
    directamente en nuestra estructura de datos.
        Jacques mantuvo su diario por tres meses. El conjunto de datos resultante
    está disponible en la caja de arena para este capítulo(eloquentjavascript.net/
    code#4), donde se almacena en la vinculación JOURNAL, y en un archivo descargable.
        Para extraer una tabla de dos por dos para un evento en específico del diario,
    debemos hacer un ciclo a traves de todas las entradas y contar cuántas veces ocurre
    el evento en relación a las transformaciones y ardilla.
*/

function tablaPara(evento, diario) {
    let tabla = [0, 0, 0, 0];
    for (let i = 0; i < diario.length; i++) {
        let entrada = diario[i], index = 0;
        if (entrada.events.includes(evento)) index += 1;
        if (entrada.squirrel) index += 2;
        tabla[index] += 1;
    }
    return tabla;
}

console.log(tablaPara("pizza", JOURNAL)); // -> [76, 9, 4, 1]

/*
        Los array tienen un método includes (“incluye”) que verifica si un valor
    dado existe en el array. La función usa eso para determinar si el nombre del
    evento en el que estamos interesados forma parte de la lista de eventos para un
    determinado día.
        El cuerpo del ciclo en tablaPara determina en cual caja de la tabla cae cada
    entrada del diario al verificar si la entrada contiene el evento específico que nos
    interesa y si el evento ocurre junto con un incidente de ardilla. El ciclo luego
    agrega uno a la caja correcta en la tabla.
        Ahora tenemos las herramientas que necesitamos para calcular las correlaciónes
    individuales. El único paso que queda es encontrar una correlación para cada
    tipo de evento que se escribio en el diario y ver si algo se destaca.
*/

// ====== Ciclos de Array

// En la función tablaPara, hay un  ciclo como este:

for (let i = 0; i < diario.length; i++){
    let entrada = diario[i];
    // Hacer algo con la entrada
}

/*
        Este tipo de ciclo es común en JavaScript clasico, ir a traves de los arrays
    un elemento a la vez es algo que surge mucho, y para hacer eso correrias un
    contador sobre la longitud del array y elegirías cada elemento en turnos.
        Hay una forma más simple de escribir tales ciclos en JavaScript moderno
*/

for (let entrada of diario) {
    console.log(`${entrada.eventos.length} eventos.`);
}

/*
    Cuando un ciclo for se vea de esta manera, con la palabra of ("de") después de una
    definición de variable, recorrerá los elementos del valor dado después of.
    Esto funciona no solo para arrays, sino también para strings y algunas otras estructuras
    de datos.
*/

// ====== El Análisis Final

/*
    Necesitamos calcular una correlación para cada tipo de evento que ocurra en el
    conjunto de datos. Para Hacer eso, primero tenemos que encontrar cada tipo de evento.
*/

function eventosDiario(diario) {
    let eventos = [];
    for (let entrada of diario) {
        for (let evento of entrada.events) {
            if (!eventos.includes(evento)) {
                eventos.push(evento);
            }
        }
    }
    return eventos;
}

// console.log(eventosDiario(JOURNAL));
// -> ["zanahoria", "ejercicio", "fin de semana", "pan", ...]

// Usando eso, podemos ver todas las correlaciones.

for (let evento of eventosDiario(JOURNAL)) {
    console.log(evento +  ":",  phi(tablaPara(evento, JOURNAL)));
}

/*
    La mayoría de las correlacione parecen estar cercanas a cero. Come zana-
    horias, pan o pudín aparentemente no desencadena la licantroía de ardilla.
    Parece ocurrir un poco más a menudo las fines de semana. Filtremos los resul-
    tados para solo mostrar correlaciones mayores que 0.1 o menores que -0.1.
*/

for (let evento of eventosDiario(JOURNAL)) {
    let correlacion = phi(tablaPara(evento, JOURNAL))
    if (correlacion > 0.1 || correlacion < -0.1) {
        console.log(evento + ":", correlacion)        
    }
}

/*
    A-ha! Hay dos factores con una correlación que es claramente más fuerte que las otras.
    comer nueces tiene un fuerte efecto positivo en la posibilidad de convertirse en una
    ardilla, mientras que cepillarse los dientes tiene un significativo efecto
    negativo.
        Interesante. Intentemos algo.
*/

for (let entrada of JOURNAL) {
    if (
        entrada.events.includes("peanuts") &&
        !entrada.events.includes("brushed teeth")
    ) {
        entrada.events.push("dientes con nueces");
    }
}

console.log(phi(tablaPara("dientes con nueces", JOURNAL)));
// -> 1

/*
        Ese es un resultado fuerte. El fenómeno ocurre precisamente cuando Jacques
    come nueces y no se cepilla los dientes. Si tan solo él no hubiese sido tan flojo
    con su higiene dental, él nunca habría notado su aflicción.
        Sabiendo esto, Jacques deja de comer nueces y descubre que sus transformaciones no vuelven.
        Durante algunos años, las cosas van bien para Jacques. Pero en algún momento él pierde su trabajo. Porque vive en un país desagradable donde no
    tener trabajo significa que no tiene servicios médicos, se ve obligado a trabajar
    con a circo donde actua como El Increible Hombre-Ardilla, llenando su boca
    con mantequilla de maní antes de cada presentación.
        Un día, harto de esta existencia lamentable, Jacques no puede cambiar de
    vuelta a su forma humana, salta a través de una grieta en la carpa del circo, y
    se desvanece en el bosque. Nunca se le ve de nuevo
*/

// ====== Arrayología Avanzada

/*
        Algunos conceptos extras relacionados a los objetos. Introduciendo métodos de
    array útiles generalmente.
        Se han visto push y pop, que agregan y remueven elementos en el final de una array,
    anteriormente. Los métodos correspondientes para agregar y remover cosas en el comienzo 
    un array se llaman unshift y shift.
*/

let listaDeTareas = [];
function recordar(tarea) {
    listaDeTareas.push(tarea);
}
function obtenerTarea() {
    return listaDeTareas.shift();
}
function recordarUrgentemente(tarea) {
    listaDeTareas.unshift(tarea);
}

/*
        Ese programa administra una cola de tareas. Agregas tareas al final de la cola
    al llamar recordar("verduras"), y cuando estés listo para hacer algo, llamas
    a obtenerTarea() para obtener (y eliminar) el elemento frontal de la cola.
        La función recordarUrgentemente también agrega una tarea pero la agrega al
    frente en lugar de a la parte posterior de la cola.
        Para buscar un valor específico, los arrays proporcionan un método indexOf ("indice de").
    Este busca a través del array desde el principio hasta el final ("indice de"). Este busca a
    través del array desde el principio hasta el final y retorna el índice en el que se encontró
    el valor solicitado, o -1 si este no fue encontrado. Para buscar desde el final en lugar del
    inicio, hay un método similar llamado lastIndexOf ("ultimo indice de").
*/

console.log([1, 2, 3, 2, 1].indexOf(2));
// -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// -> 3

/* 
        Tanto indexOf como lastIndexOf toman un segundo argumento opcional que indica dónde comenzar
    la búsqueda.
        Otro método fundamental de array es slice ("rebanar"), que toma índices de inicio y fin y
    retorna un array que solo tiene los elementos entre ellos. El
    índice de inicio es inclusivo, el índice final es exclusivo.
*/

console.log([0, 1, 2, 3, 4].slice(2, 4));
// -> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2))
// -> [2, 3, 4]

/*
        Cuando no se proporcione el índice final, slice tomará todos los elementos
    después del índice de inicio. También puede omitir el índice de inicio para copiar
    todo el array.
        El método concat (“concatenar”) se puede usar para unir arrays y asi crear
    un nuevo array, similar a lo que hace el operador + para los strings.
        El siguiente ejemplo muestra tanto concat como slice en acción. Toma un
    array y un índice, y retorna un nuevo array que es una copia del array original
    pero eliminando al elemento en el índice dado:
*/

function remover(array, indice) {
    return array.slice(0, indice).concat(array.slice(indice + 1));
}
console.log(remover(["a", "b", "c", "d", "e"], 2))
// -> ["a", "b", "d", "e"]

/*
    Si a concat le pasas un argumento que no es una array, ese valor será agregado
    al nuevo array como si este fuera un array de un solo elemento.
*/

// ====== Strings y sus Propiedades

/* 
    Podemos leer propiedades como length y toUpperCase de valores string.
    Pero si intentas agregar una nueva propiedad, esta no se mantiene.
*/

let kim = "kim";
kim.edad = 88;
console.log(kim.edad); // -> undefined

/*
        Los valores de tipo string, número, y Booleano no son objetos, y aunque
    el lenguaje no se queja si intentas establecer nuevas propiedades en ellos, en
    realidad no almacena esas propiedades. Como se mencionó antes, tales valores
    son inmutables y no pueden ser cambiados.
        Pero estos tipos tienen propiedades integradas. Cada valor de string tiene un
    numero de metodos. Algunos muy útiles son slice e indexOf, que se parecen
    a los métodos de array de los mismos nombres.
*/

console.log("panaderia".slice(0,3)); // -> pan
console.log("panaderia".indexOf("a")); // -> 1

/*
    Una diferencia es que el indexOf de un string puede buscar por un string que
    contenga más de un carácter, mientras que el método correspondiente al array
    solo busca por un elemento único.
*/

console.log("uno dos tres".indexOf("tres"));
// -> 8

/*
    El método trim (“recortar”) elimina los espacios en blanco (espacios, saltos
    de linea, tabulaciones y caracteres similares) del inicio y final de un string.
*/

console.log("  okey \n ".trim()); // -> okey

/*
    La función alcocharConCeros del capítulo anterior también existe como un método.
    Se llama padStart ("alcohar inicio") y toma la longitud deseada y el carácter de
    relleno como argumentos.
*/

console.log(String(6).padStart(3, "0")); // 006

/*
    Puedes dividir un string en cada ocurrencia de otro string con el método split
    ("dividir"), y unirlo nuevamente con join ("unir").
*/

let oracion = "Los pajaros secretario se especializan en pisotear";
let palabras = oracion.split(" ");
console.log(palabras);
// -> ["Los", "pajaros", "secretarios", "se", "especializan", "en", "pisotear"];
console.log(palabras.join(". "));
// -> Los. pajaros. secretarios. se. especializan. en. pisotear

/*
    Se puede repetir un string con el método repeat ("repetir"), el cual crea un
    nuevo string que contiene múltiples copias concatenadas del string original.
*/

console.log("LA".repeat(3));
// -> LALALA

/*
    Ya se ha visto la propiedad length en los valores de tipo string. Acceder a
    los caracteres individuales en un string es similar a acceder a los elementos de
    un array.
*/

let string = "abc";
console.log(string.length); // -> 3
console.log(string[1]); // -> b

// ====== Parámetros Restantes

/*
    Puede ser útil para una función aceptar cualquier cantidad de argumentos. Por
    ejemplo, Math.max calcula el máximo de todos los argumentos que le son dados.
        Para escribir tal función, pones tres puntos antes del último parámetro de
    la función, asi:
*/

function maximo(...numeros) {
    let resultado = -Infinity;
    for (let numero of numeros) {
        if (numero > resultado) resultado = numero;
    }
    return resultado;
}
console.log(maximo(4, 1, 9, -2)); // -9

/*
        Cuando se llame a una función como esa, el parámetro restante está vinculado 
    a un array que contiene todos los argumentos adicionales. Si hay otros
    parámetros antes que él, sus valores no serán parte de ese array. Cuando, tal
    como en maximo, sea el único parámetro, contendrá todos los argumentos.
        Se puede usar una notación de tres puntos similar para llamar una función
    con un array de argumentos.
*/

let numeros = [5, 1, 7];
console.log(maximo(...numeros));
// -> 7

/*
        Esto “extiende” al array en la llamada de la función, pasando sus elementos
    como argumentos separados. Es posible incluir un array de esa manera, junto
    con otros argumentos, como en max(9, ...numeros, 2).
        La notación de corchetes para crear arrays permite al operador de tres-puntos
    extender otro array en el nuevo array:
*/

let palabras2 = ["nunca", "entenderas"];
console.log(["tu", ...palabras2, "completamente"]);
// -> ["tu", "nunca", "entenderas", "completamente"]

// ====== El Objeto Math

/*
    Math es una bolsa de utilidades relacionadas a los números, como Math.max (máximo),
    Math.min (mínimo) y Math.sqrt(raíz cuadrada).

    El objeto Math es usado como un contenedor que agrupa un grupo de funcionalidades 
    relacionadas. Solo hay un objeto Math, y casi nunca es útil como un valor. Más bien, 
    un espacio de nombre para que todos estas funciones y valores no tengan que ser vinculaciones 
    globales.


    Para hacer trigonometría, Math puede ayudar. Contiene cos (coseno), sin (seno) 
    y tan (tangente), así como sus funciones inversas, acos, asin, y atan, respectivamente. 
    El número π (pi), o al menos la aproximación más cercano que cabe en un número de JavaScript,
    está disponible como Math.PI. Hay una vieja tradición en la programación de escribir los 
    nombres de los valores constantes en mayúsculas
*/

function puntoAleatorioEnCirculo(radio) {
    let angulo = Math.random() * 2 * Math.PI;
    return {
        x: radio * Math.cos(angulo),
        y: radio * Math.sin(angulo)
    };
}

console.log(puntoAleatorioEnCirculo(2))

// -> {x: 0.3667, y 1,966}

/*
    En caso de no entender los senos y cosenos estos igual se explicarán
    en el capítulo 14.

    Math.random. Esta es una función que retorna un nuevo número pseudoaleatorio
    entre cero (inclusivo) y uno (exclusivo) cada vez que la llamas.
*/

console.log(Math.random());
// -> 0.36993729369714856
console.log(Math.random());
// -> 0.727367032552138
console.log(Math.random());
// -> 0.40180766698904335

/*
    Aunque las computadoras son máquinas deterministas, simpre reaccionan
    de la misma manera dada la misma entrada, es posible hacer que produzcan números
    que parecen aleatorios. Para hacer eso, la máquina mantiene algún valor
    escondido, y cada vez que le pidas un nuevo número aleatorio, realmacena un
    nuevo valor y retorna un número derivado de él. De esta manera, puede
    producir número nuevos y difíciles de predecir de una manera que parece
    aleatoria.

    Si se quiere un número entero al azar en lugar de uno fraccionario, podemos usa
    Math.floor (que redondea hacia abajo al número entero más cercano) con el resultado
    de Math.random.
*/

console.log(Math.floor(Math.random() * 10));
// -> 2

/*
    Multiplicar el número aleatorio por 10 nos da un número mayor que o igual a cero e inferior a 10.

    También están las funciones Math.ceil (que redondea hacia arriba hasta llegar al número entero mas 
    cercano), Math.round (al número entero más cercano), y Math.abs, que toma el valor absoluto de un 
    número, lo que significa que niega los valores negativos pero deja los positivos tal y como estan.
*/

// ====== Desestructurar

/*
    La función phi: 
*/

function phi(tabla) {
    return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
    Math.sqrt((tabla[2] + tabla[3]) *
    (tabla[0] + tabla[1]) *
    (tabla[1] + tabla[3]) *
    (tabla[0] + tabla[2]));
}

/*
    Una de las razones por las que esta función es incómoda de leer es que
    tenemos una vinculación apuntando a nuestro array, pero preferiríamos tener
    vinculaciones para los elementos del array, es decir, let n00 = tabla[0] y así
    sucesivamente. Afortunadamente, hay una forma concisa de hacer esto en
    JavaScript.
*/

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt(
        (n10 + n11) * (n00 + n01) *
        (n01 + n11) * (n00 + n10)
    );
}

// Esto también funciona para vinculaciones creadas con let, var, o const. Si
// sabes que el valor que estas vinculando es un array, puedes usar corchetes para
// “mirar dentro” del valor, y asi vincular sus contenidos.
// Un truco similar funciona para objetos, utilizando llaves en lugar de corchetes.

let { nombre2 } = {nombre2: "Faraji", edad: 23};
console.log(nombre2);
// -> Faraji

// Ten en cuenta que si intentas desestructurar null o undefined, obtendrás un
// error, igual como te pasaria si intentaras acceder directamente a una propiedad
// de esos valores.

// ====== JSON

/*
        Ya que las propiedades solo agarran su valor, en lugar de contenerlo, los objetos
    y arrays se almacenan en la memoria de la computadora como secuencias de bits
    que contienen las direcciónes, el lugar en la memoria, de sus contenidos. Asi
    que un array con otro array dentro de el consiste en (al menos) una región de
    memoria para el array interno, y otra para el array externo, que contiene (entre
    otras cosas) un número binario que representa la posición del array interno.
        Si deseas guardar datos en un archivo para más tarde, o para enviarlo a otra
    computadora a través de la red, tienes que convertir de alguna manera estos enredos
    de direcciones de memoria a una descripción que se puede almacenar o enviar.
        Lo que podemos hacer es serializar los datos. Eso significa que son convertidos
    a una descripción plana. Un formato de serialización popular llamado JSON 
    (pronunciado "Jason"), que significa JavaScript Object Notation. Es ampliamente
    utilizado como un formato de almacenamiento y comunicación de datos en la Web,
    incluso en otros lenguajes diferentes a JavaScript.
        JSON es similar a la forma en que JavaScript escribe arrays y objetos, con
    algunas restricciones. Todos los nombres de propiedad deben estar rodeados por
    comillas dobles, y solo se permiten expresiones de datos simples, sin llamadas a
    función, vinculaciones o cualquier otra cosa que involucre computaciones reales.
    Los comentarios no están permitidos en JSON.
        Una entrada de diario podria verse así cuando se representa como datos
    JSON:
*/

// {
//     "ardilla": false,
//     "eventos": ["trabajo", "toque un arbol", "pizza", "sali a correr"]
// }

/*
    JavaScript nos da las funciones JSON.stringify y JSON.parse para convertir
    datos hacia y desde este formato. El primero toma un valor en JavaScript y retorna
    un string codificado en JSON. La segunda toma un string como ese y lo convierte al
    valor que este codifica.
*/

let stringify = JSON.stringify({
    ardilla: false,
    eventos: ["fin de semana"]
})

console.log(stringify);
// → {"ardilla":false,"eventos":["fin de semana"]}
console.log(JSON.parse(stringify).eventos);
// → ["fin de semana"]

// ====== Resumen

/*
    Los objetos y arrays (que son un tipo específico de objeto) proporcionan formas
    de agrupar varios valores en un solo valor. Conceptualmente, esto nos permite
    poner un montón de cosas relacionadas en un bolso y correr alredor con el bolso,
    en lugar de envolver nuestros brazos alrededor de todas las cosas individuales,
    tratando de aferrarnos a ellas por separado.
        La mayoría de los valores en JavaScript tienen propiedades, las excepciones
    son null y undefined. Se accede a las propiedades usando valor.propiedad o
    valor["propiedad"]. Los objetos tienden a usar nombres para sus propiedades
    y almacenar más o menos un conjunto fijo de ellos. Los arrays, por el otro lado,
    generalmente contienen cantidades variables de valores conceptualmente idénticos y usa números (comenzando desde 0) como los nombres de sus propiedades.
        Hay algunas propiedades con nombre en los arrays, como length y un numero
    de metodos. Los métodos son funciones que viven en propiedades y (por lo
    general) actuan sobre el valor del que son una propiedad.

    Puedes iterar sobre los arrays utilizando un tipo especial de ciclo for,
    for (let elemento of array).
*/


// ===========================================
// = Capítulo 5: Funciones de Orden Superior =
// ===========================================

/*
    Un program grande es un programa costoso, y no solo por el tiempo que se
    necesita para construilo. El tamaño casi siempre involucra complejidad, y la
    complejidad confunde a los programadores. A su vez, los programadores confundidos,
    introducen errores en los programas. Un programa grande entonces
    proporciona de mucho especio para que estos bugs se oculten, haciéndolos difi-
    ciles de encontrar.
        Volvamos rapidamente a los dos últimos programas de ejemplo en la intro-
    ducción. El primero es auto-contenido y solo tiene seis líneas de largo:
*/

let total = 0, cuenta = 1;

while (cuenta <= 10) {
    total += cuenta;
    cuenta += 1;
}
console.log(total);

/*
    El segundo depende de dos funciones externas y tiene una línea de longitud
*/

// console.log(suma(rango(1, 10)));

/*
        Si contamos el tamaño de las definiciones de suma y rango, el segundo pro-
    grama también es grande—incluso puede que sea más grande que el primero.
    Pero aún así, argumentaria que es más probable que sea correcto.
        Es más probable que sea correcto porque la solución se expresa en un vocab-
    ulario que corresponde al problema que se está resolviendo. Sumar un rango
    de números no se trata acerca de ciclos y contadores. Se trata acerca de rangos
    y sumas.
*/

// ======= Abstracción

/*
    En el contexto de la programación, estos tipos de vocabularios suelen ser llama-
    dos abstracciones. Las abstracciones. Las abstracciones escondes detalles y nos dan
    la capacidad de hablar acerca de los problemas a un nivel superior (o más abstracto).
        Como una analogía, compara estas dos recets de sopa de guisantes:

        Coloque 1 taza de guisantes secos por persona en un recipiente.
        Agregue agua hasta que los guisantes esten bien cubiertos. Deje los
        guisantes en agua durante al menos 12 horas. Saque los guisantes
        del agua y pongalos en una cacerola para cocinar. Agregue 4 tazas
        de agua por persona. Cubra la sartén y mantenga los guisantes
        hirviendo a fuego lento durante dos horas. Tome media cebolla
        por persona. Cortela en piezas con un cuchillo. Agréguela a los
        guisantes. Tome un tallo de apio por persona. Cortelo en pedazos
        con un cuchillo. Agréguelo a los guisantes. Tome una zanahoria
        por persona. Cortela en pedazos. Con un cuchillo! Agregarla a los
        guisantes. Cocine por 10 minutos más.

    Y la segunda receta:

        Por persona: 1 taza de guisantes secos, media cebolla picada, un
        tallo de apio y una zanahoria.
        Remoje los guisantes durante 12 horas. Cocine a fuego lento du
        rante 2 horas en 4 tazas de agua (por persona). Picar y agregar
        verduras. Cocine por 10 minutos más.

        La segunda es más corta y fácil de interpretar. Pero necesitas entender
    algunas palabras más relacionadas a la cocina, remojar, cocinar a fuego lento,
    picar, y, supongo, verduras.
*/

// ====== Abstrayendo la repetición

/*
    Las funciones simples, como las hemos vista hasta ahora, son una buena forma
    de construir abstracciones. Pero a veces se quedan cortas.
        Es común que un programa haga algo una determinada cantidad de veces.
    Puedes escribir un ciclo for para eso, de esta manera:
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*
        Podemos abstraer “hacer algo N veces” como una función? Bueno, es fácil
    escribir una función que llame a console.log N cantidad de veces.
*/

function repetirLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

/*
        Pero, y si queremos hacer algo más que loggear los números? Ya que “hacer
    algo” se puede representar como una función y que las funciones solo son valores,
    podemos pasar nuestra acción como un valor de función.
*/

function repetir(n, accion) {
    for (let i = 0; i < n; i++) {
        accion(i);
    }
}

repetir(3, console.log);
// -> 1
// -> 2
// -> 3

/*
        No es necesario que le pases una función predefinida a repetir. A menudo,
    desearás crear un valor de función al momento en su lugar.
*/

let etiquetas = [];

repetir(5, i => {
    etiquetas.push(`Unidad ${i + 1}`);
})
console.log(etiquetas);

// → ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"]


// ====== Funciones de Orden Superior

/*
        Las funciones que operan en otras funciones, ya sea tomándolas como argumen-
    tos o retornandolas, se denominan funciones de orden superior. Como ya hemos
    visto que las funciones son valores regulares, no existe nada particularmente
    notable sobre el hecho de que tales funciones existen. El término proviene de
    las matemáticas, donde la distinción entre funciones y otros valores se toma
    más en serio.
        Las funciones de orden superior nos permiten abstraer sobre acciones, no
    solo sobre valores. Estas vienen en varias formas. Por ejemplo, puedes tener
    funciones que crean nuevas funciones.
*/

function mayorQue(n) {
    return m => m > n;
}
let mayorQue10 = mayorQue(10);
console.log(mayorQue10(11)); // -> true

// Y puedes tener funciones que cambien otras funciones.

function ruidosa(funcion) {
    return (...argumentos) => {
        console.log("llamando con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, ", retorno", resultado);
        return resultado;
    };
}
ruidosa(Math.min)(3, 2, 1);
// → llamando con [3, 2, 1]
// → llamada con [3, 2, 1] , retorno 1


/*
    Hay un método de array incorporado, forEach que porporciona algo como 
    un ciclo for/of como una función de orden superior.
*/

["A","B"].forEach(letra => console.log(letra));
// -> A
// -> B

// ====== Conjunto de Datos de Códigos

/*
    Un área donde brillan las funciones de orden superior es en el procesamiento de datos.
    Para procesar datos, necesitaremos algunos datos reales. Este capítulo
    usará un conjunto de datos acerca de códigos, sistema de escrituras como Latin, Cirílico, o Arábico.
        El conjunto de datos de ejemplo contiene algunas piezas de información
    acerca de los 140 codigos definidos en Unicode.
*/

let coptic = {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}

/*
        Tal objeto te dice el nombre del codigo, los rangos de Unicode asignados a él,
    la dirección en la que está escrito, la tiempo de origen (aproximado), si todavía
    está en uso, y un enlace a más información. La dirección en la que esta escrito
    puede ser "ltr" (left-to-right) para izquierda a derecha, "rtl" (right-to-left)
    para derecha a izquierda (la forma en que se escriben los textos en árabe y en
    hebreo), o "ttb" (top-to-bottom) para de arriba a abajo (como con la escritura
    de Mongolia).
        La propiedad ranges contiene un array de rangos de caracteres Unicode, cada
    uno de los cuales es un array de dos elementos que contiene límites inferior y
    superior. Se asignan los códigos de caracteres dentro de estos rangos al codigo.
    El limite más bajo es inclusivo (el código 994 es un carácter Copto) y el límite
    superior es no-inclusivo (el código 1008 no lo es).
*/

// ====== Filtrando Arrays

/*
        Para encontrar los codigos en el conjunto de datos que todavía están en uso, la
    siguiente función podría ser útil. Filtra hacia afuera los elementos en un array
    que no pasen una prueba:
*/

function filtrar(array, prueba) {
    let pasaron = [];
    for (const elemento of array) {
        if (prueba(elemento)) {
            pasaron.push(elemento);
        }
    }
    return pasaron;
}

console.log(filtrar(SCRIPTS, codigo => codigo.living));
// -> [{name: "Adlam", ...}, ...]

/*
        Al igual que forEach, filtrar es un método de array estándar, este esta
    incorporado como filter. El ejemplo definió la función solo para mostrar lo
    que hace internamente. A partir de ahora, la usaremos así en su lugar:
*/

console.log(SCRIPTS.filter(codigo => codigo.direction == "ttb"));
// -> [{name: "Mongolian", ...}, ...]

// ====== Transformando con Map

/*
    Digamos que tenemos un array de objetos que representan codigos, produci-
    dos al filtrar el array SCRIPTS de alguna manera. Pero queremos un array de
    nombres, que es más fácil de inspeccionar.
        El método map (“mapear”) transforma un array al aplicar una función a todos
    sus elementos y construir un nuevo array a partir de los valores retornados. El
    nuevo array tendrá la misma longitud que el array de entrada, pero su contenido
    ha sido mapeado a una nueva forma en base a la función.
*/

function map(array, transformar) {
    let mapeados = [];
    for (let elemento of array) {
        mapeados.push(transformar(elemento));
    }
    return mapeados;
}
let codigosDerechaIzquierda = SCRIPTS.filter((codigo) => codigo.direction == "rtl");
console.log(map(codigosDerechaIzquierda, codigo => codigo.name));
// -> ["Adlam", "Arabic", "Imperial Aramaic", ...]

// Al igual que forEach y filter, map es un método de array estándar.

// ====== Resumiendo con Reduce

/*
    Otra cosa común que hacer con arrays es calcular un valor único a partir de
    ellos. Nuestro ejemplo recurrente, sumar una colección de números, es una instancia de esto.
    Otro ejemplo sería encontrar el código con la mayor cantidad de caracteres.
        La operación de orden superior que representa este patrón se llama reduce
    ("reducir"), a veces también llamada fold ("doblar"). Esta construye un valor
    al repetidamente tomar un solo elemento del array y combinándolo con el valor
    actual. Al sumar números, comenzarías con el número cero y, para cada ele-
    mento, agragas eso a la suma.
        Los parámetros para reduce son, además de array, una función de combinación y
    un valor de inicio. Esta función es un poco menos sencilla que filter
    y map, así que mira atentamente:
*/

function reduce(array, combinar, inicio) {
    let actual = inicio;
    for (let elemento of array)  {
        actual = combinar(actual, elemento);
    }
    return actual;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// -> 10 

/*
    El método de array estándar reduce, que por supuesto corresponde a esta 
    función tiene un mayor comodidad. Si tu array contiene al menos un elemento,
    tienes permitido omitir el argumento inicio. El método tomará el primer
    elemento del array como su valor de inicio y comienza a reducir a partir del
    segundo elemento.
*/

console.log([1, 2, 3, 4].reduce((a, b)  => a + b));
// -> 10

/*
    Para usar reduce (dos veces) para encontrar el código con la mayor cantidad de caracteres,
    podemos escribir algo como esto:
*/

function cuentaDeCaracteres(codigo) {
    return codigo.ranges.reduce((cuenta, [desde, hasta]) => {
        return cuenta + (hasta  - desde);
    }, 0)
}

console.log(SCRIPTS.reduce((a, b) => {
    return cuentaDeCaracteres(a) < cuentaDeCaracteres(b) ? b : a;
}));
// → {name: "Han", …}

/*
        La función cuentaDeCaracteres reduce los rangos asignados a un codigo
    sumando sus tamaños. Ten en cuenta el uso de la desestructuración en el
    parámetro lista de la función reductora. La segunda llamada a reduce luego
    usa esto para encontrar el codigo más grande al comparar repetidamente dos
    scripts y retornando el más grande.
        El codigo Han tiene más de 89,000 caracteres asignados en el Estándar Uni-
    code, por lo que es, por mucho, el mayor sistema de escritura en el conjunto de
    datos. Han es un codigo (a veces) usado para texto chino, japonés y coreano.
    Esos idiomas comparten muchos caracteres, aunque tienden a escribirlos de
    manera diferente. El consorcio Unicode (con sede en EE.UU.) decidió tratarlos
    como un único sistema de escritura para ahorrar códigos de caracteres. Esto
    se llama unificación Han y aún enoja bastante a algunas personas.
*/

// ====== Composabilidad

/*
    Considera cómo habríamos escrito el ejemplo anterior (encontrar el código más
    grande) sin funciones de orden superior. El código no es mucho peor.
*/

let mayor = null;
for (let codigo of SCRIPTS) {
    if (mayor == null || cuentaDeCaracteres(mayor) < cuentaDeCaracteres(codigo)) {
        mayor = codigo;
    }
}
console.log(mayor);
// -> {name: "Han", ...}

/*
    Las funciones de orden superior comienzan a brillar cuando necesitas com-
    poner operaciones. Como ejemplo, vamos a escribir código que encuentre el año
    de origen promedio para los codigos vivos y muertos en el conjunto de datos.
*/

function promedio(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(promedio(
    SCRIPTS.filter(codigo => codigo.living).map(codigo => codigo.year)
)));
// -> 1185
console.log(Math.round(promedio(
    SCRIPTS.filter(codigo => !codigo.living).map(codigo => codigo.year)
)));
// -> 209

/*
        Definitivamente también podrías haber escribir este código como un gran
    ciclo.
*/

let total2 = 0, cuenta2 = 0;
for (let codigo of SCRIPTS) {
    total += codigo.year;
    cuenta += 1;
}
console.log(Math.round(total / cuenta));
// -> 1185

/*
        Pero es más difícil de ver qué se está calculando y comó. Y ya que los
    resultados intermedios no se representan como valores coherentes, sería mucho´
    más trabajo extraer algo así como promedio en una función aparte.

        En términos de lo que la computadora realmente está haciendo, estos dos 
    enfoques también son bastante diferentes. El primero creará nuevos arrays al
    ejecutar filter y map, mientras que el segundo solo computa algunos números, 
    haciendo menos trabajo. Por lo general, puedes permitirte el enfoque legible,
    pero si estás procesando arrays enormes, y haciendolo muchas veces, el estilo
    menos abstracto podría ser mejor debido a la velocidad extra.
*/

// ======= Strings y Códigos de Caracteres

/*
    Un uso de conjunto de datos sería averiguar qué código esta usando una pieza
    de texto. Veamos un programa que hace esto.
        Recuerda que cada código tiene un array de rangos para los códigos de ca-
    racteres asociados a el. Entonces, dado un código de carácter, podríamos usar
    una función como esta para encontrar el código correspondiente (si lo hay):
*/

function codigoCaracter(codigo_caracter) {
    for (let codigo of SCRIPTS) {
        if (codigo.ranges.some(([desde, hasta]) => {
            return codigo_caracter >= desde && codigo_caracter < hasta; 
        })) {
            return codigo;
        }
    }
    return null;
}

console.log(codigoCaracter(121));
// -> {name: "latin", ...}

/*
    El método some ("alguno") toma una
    función de prueba y te dice si esa función retorna verdadero para cualquiera de 
    los elementos en el array.
*/

/*
        Al dia de hoy UTF-16 generalmente se considera como una mala idea. Parece
    casi intencionalmente diseñado para invitar a errores. Es fácil escribir progra-
    mas que pretenden que las unidades de código y caracteres son la misma cosa.
    Y si tu lenguaje no usa caracteres de dos unidades, esto parecerá funcionar
    simplemente bien. Pero tan pronto como alguien intente usar dicho programa
    con algunos menos comunes caracteres chinos, este se rompe. Afortunada-
    mente, con la llegada del emoji, todo el mundo ha empezado a usar caracteres
    de dos unidades, y la carga de lidiar con tales problemas esta bastante mejor
    distribuida.
        Desafortunadamente, las operaciones obvias con strings de JavaScript, como
    obtener su longitud a través de la propiedad length y acceder a su contenido
    usando corchetes, trata solo con unidades de código.
*/

// Dos caracteres emoji, caballo y zapato.
let caballoZapato = "🐴👞";
console.log(caballoZapato.length);
// -> 4
console.log(caballoZapato[0]);
// -> ((Medio-carácter inválido))
console.log(caballoZapato.charCodeAt(0));
// -> 55357 (Código del medio-carácter)
console.log(caballoZapato.codePointAt(0))
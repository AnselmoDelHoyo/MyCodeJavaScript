

// ===========================================
// = Capítulo 1: Valores, Tipos y Operadores =
// ===========================================

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
    como un array. Pero estas entradsa no consisten en solo un número o un string, cada
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

let diario = [
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
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

// El Entorno

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

// Flujo de Control

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

// Flujo de control en línea recta:

// =======================>

// Ejecución Condicional

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

// Ciclos While y Do

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

// Ciclos For

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

// Rompiendo un Ciclo

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

// Actualizando Vinculaciones de Manera Sucinta

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

// Despachar una valor con Switch

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

// Capitalización

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

// Comentarios

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

// Resumen

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
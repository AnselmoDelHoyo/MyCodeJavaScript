// Dirección de Escritura Dominante

/*
    Escriba una función que calcule la dirección de escritura dominante en un string
    de texto. Recuerde que cada objeto de codigo tiene una propiedad direction
    que puede ser "ltr" (de izquierda a derecha), "rtl" (de derecha a izquierda),
    o "ttb" (arriba a abajo).
    La dirección dominante es la dirección de la mayoría de los caracteres que
    tienen un código asociado a ellos. Las funciones codigoCaracter y contarPor
    definidas anteriormente en el capítulo probablemente seran útiles aquí.
*/

const SCRIPTS = require("../../chapter/05_data/code/scripts");

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

function contarPor(elementos, nombreGrupo) {
    let cuentas = [];
    for (let elemento of elementos) {
        let nombre = nombreGrupo(elemento);
        let conocido = cuentas.findIndex(c => c.nombre == nombre);
        if (conocido == -1) {
            cuentas.push({nombre, cuenta: 1})
        } else {
            cuentas[conocido].cuenta++
        }
    }
    return cuentas;
}

function codigosTexto(texto) {
    let codigos = contarPor(texto, caracter => {
        let codigo = codigoCaracter(caracter.codePointAt(0));
        return codigo ? codigo.name : "ninguno";
    }).filter(({name}) => name != "ninguno");

    let total = codigos.reduce((n, {cuenta}) => n + cuenta, 0);
    if (total == 0) return "No se encontraron codigos";

    return codigos.map(({nombre, cuenta}) => {
        return `${Math.round(cuenta * 100 / total)}% ${nombre}`;
    }).join(", ")
}

console.log(codigosTexto('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// -> 61% Han, 22% Latin, 17% Cyrilic

function dominantDirection(text) {
    let counted = contarPor(text, char => {
        let script = codigoCaracter(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({nombre}) => nombre != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.cuenta > b.cuenta ? a : b).nombre;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
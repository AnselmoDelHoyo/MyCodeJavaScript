
// Conteo De Frijoles

/*
        Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo
    "string"[N]. El valor devuelto será un string que contiene solo un carácter
    (por ejemplo, "f"). El primer carácter tiene posición cero, lo que hace
    que el último se encuentre en la posición string.length - 1. En otras
    palabras, un string de dos caracteres tiene una longitud de 2, y sus
    carácteres tendrán las posiciones 0 y 1.
        Escribe una función contarFs que tome un string como su único argumento
    y devuelva un número que indica cuántos caracteres "F" en mayúsculas haya en
    el string.
        Después, escribe una función llamada contarCaracteres que se comporte como
    contarFs, excepto que toma un segundo argumento que indica el carácter que debe
    ser contado (en lugar de contar solo caracteres "F" en mayúscula).
    Reescribe contarFs para que haga uso de esta nueva función.
*/

// Resolución:

function contarFs(string) {
    let cantidad = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == "F") cantidad += 1;
    }
    return cantidad;
}

console.log(contarFs("LaFocaSeEnFocaEnElFoco"));

function contarCaracteres(string, caracter) {
    let cantidad = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == caracter) cantidad += 1;
    }
    return cantidad;
}

console.log(contarCaracteres("LaFocaSeEnFocaEnElFoco", "o"));

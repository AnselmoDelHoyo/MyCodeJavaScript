// Cada

/*
    De forma análoga al método some, los arrays también tienen un método every
    (“cada”). Este retorna true cuando la función dada devuelve verdadero para
    cada elemento en el array. En cierto modo, some es una versión del operador
    || que actúa en arrays, y every es como el operador &&.
    Implementa every como una función que tome un array y una función predi-
    cado como parámetros. Escribe dos versiones, una usando un ciclo y una
    usando el método some.
*/

let array = [1, 1, 2, 2, 3, 3, 4, 4];
let array2 = [1, "1"];
let array3 = ["1", true];

console.log(array.some((value) => value == 4));
console.log(array.every((value) => value > 0));

function everyCiclo(array, predicate) {
    let value = null;
    for (element of array) {
        if (!predicate(element)) return false;
        value = true;
    }
    return value;
}

function everySome(array, predicate) {
    let results = [];
    array.some((value) => {
        results.push(predicate(value));
    });
    return !results.some((value) => value === false);
}

console.log(everyCiclo(array, (value) => value > 0));
console.log(everyCiclo(array2, (value) => typeof value === "number"));

console.log(everySome(array2, (value) => typeof value === "string" ));
console.log(everySome(array3, (value) => typeof value === "string" ));

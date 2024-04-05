// Revirtiendo un Array

/*
        Los arrays tienen un método reverse que cambia al array invirtiendo el or-
    den en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
    revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
    un array como argumento y produce un nuevo array que tiene los mismos ele-
    mentos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo
    que hace el métodoreverse: modifica el array dado como argumento invirtiendo
    sus elementos. Ninguno de los dos puede usar el método reverse estándar.
    Pensando en las notas acerca de los efectos secundarios y las funciones puras
    en el capítulo anterior, qué variante esperas que sea útil en más situaciones?
    Cuál corre más rápido?
*/

let arrayLetras = ["a", "b", "c", "d", "e"];
let arrayNumeros = [1, 2, 3, 4, 5, 6];

const revertirArray = (array) => {
    let arrayInvertido = [];
    for (let index = 1; index < array.length + 1; index++) {
        const element = array[array.length - index];
        arrayInvertido.push(element);
    }
    return arrayInvertido;
}

function revertirArrayEnSuLugar(array) {
    arrayNumeros = [];
    for (let index = 1; index < array.length + 1; index++) {
        const element = array[array.length - index];
        arrayNumeros.push(element);
    }
}

console.log(revertirArray(arrayLetras));

revertirArrayEnSuLugar(arrayNumeros);

console.log(arrayNumeros);

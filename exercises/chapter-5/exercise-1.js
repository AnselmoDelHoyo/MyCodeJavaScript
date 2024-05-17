// Aplanamiento

/*
    Use el método de reduce en combinación con el método concat para "aplanar" un
    array de arrays en un único array que tenga todos los elementos de los arrays
    originales.
*/

let arrays = [[1, 2], 3, [4, 5, 6]];

function aplanarArray(array = []) {

    let arrayFinal = array.reduce((previous, current) => previous.concat(current), [])

    return arrayFinal;
}

console.log(aplanarArray(arrays));

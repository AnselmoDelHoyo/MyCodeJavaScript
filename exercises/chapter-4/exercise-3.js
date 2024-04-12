// Una Lista

/*
    Los objetos, como conjuntos genéricos de valores, se pueden usar para construir
    todo tipo de estructuras de datos. Una estructura de datos común es la lista
    (no confundir con un array). Una lista es un conjunto anidado de objetos, con
    el primer objeto conteniendo una referencia al segundo, el segundo al tercero,
    y así sucesivamente.

    let lista = {
        valor: 1,
        resto: {
            valor: 2,
            resto: {
                valor: 3,
                resto: null
            }
        }
    };

    Los objetos resultantes forman una cadena, como esta:

        value: 1
        rest:
            value: 2
            rest:
                value: 3
                rest: null

        Algo bueno de las listas es que pueden compartir partes de su estructura. Por
    ejemplo, si creo dos nuevos valores {valor: 0, resto: lista} y {valor: -1,
    resto: lista} (con lista refiriéndose a la vinculación definida anteriormente),
    ambos son listas independientes, pero comparten la estructura que conforma
    sus últimos tres elementos. La lista original también sigue siendo una lista
    válida de tres elementos.
        Escribe una función arrayALista que construya una estructura de lista como
    el que se muestra arriba cuando se le da [1, 2, 3] como argumento. También
    escribe una función listaAArray que produzca un array de una lista. Luego
    agrega una función de utilidad preceder, que tome un elemento y una lista y
    creé una nueva lista que agrega el elemento al frente de la lista de entrada, y
    posicion, que toma una lista y un número y retorne el elemento en la posición
    dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando
    no exista tal elemento.
        Si aún no lo has hecho, también escribe una versión recursiva de posicion.
*/

let lista = {
    valor: 1,
    resto: {
        valor: 2,
        resto: {
            valor:3,
            resto: {
                valor: 4,
                resto: {
                    valor: 5,
                    resto: {
                        valor: 6,
                        resto: {
                            valor: 7,
                            resto: {
                                valor: 8,
                                resto: {
                                    valor: 9,
                                    resto: {
                                        valor: 10,
                                        resto: null
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function arrayALista(array = []) {
    let lista = null;
    for (let i = 0; i < array.length; i++) {
        lista = {
            value: array[(array.length - i) - 1],
            resto: (i !== 0) 
                ? {...lista}
                : null
        }
    }
    return lista;
};

// console.log(arrayALista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function listaAArray(lista) {
    let list = lista;
    let array = [];
    for (let i = 0; i < 2; i++) {
        Object.entries(list).forEach(([key, value]) => {
            if (key == "valor") array.push(value);
            else if (key == "resto" && value) {
                delete list.valor;
                list = list.resto;
                i = 0;
            } else {
                i = 2;
            };
        })
    }
    return array;
};

// console.log(listaAArray(lista));

function preceder(elemento, lista) {
    return { valor: elemento, resto: lista}
}

// console.log(preceder(-1, lista));

function posicion(lista, indice) {
    let array = [];
    let contador = 0;

    for (let i = 0; i < 2; i++) {
        contador++
        Object.entries(lista).forEach(([key, value]) => {
            if (key == "valor") array.push(value);
            else if (key == "resto" && value) {
                delete lista.valor;
                lista = lista.resto;
                i = 0;
            } else {
                i = 2;
            };
        })
    }

    if (indice > array.length - 1 || indice < 0) {
        return undefined;
    }

    return array[indice];
}

// console.log(posicion(lista, 0));

function posicionRecursiva(lista, indice) {
    let elemento = null;

    if (indice === 0) {
        elemento = lista.valor;
    }

    indice--;

    if (lista.resto !== null && indice >= 0) {
        delete lista.valor;
        lista = lista.resto;
        return posicionRecursiva(lista, indice);
    }

    return elemento;
}

console.log(posicionRecursiva(lista, 3))
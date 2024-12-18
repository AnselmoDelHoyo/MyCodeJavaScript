// Conjuntos

/*
    El entorno de JavaScript estándar proporciona otra estructura de datos llamada
    Set("Conjunto"). Al iagula que una instancia de Map, un conjunto contiene una
    colección de valores. Pero a diferencia de Map, este no asocia valores con otros--
    este solo rastrea qué valores son parte del conjunto. Un valor solo puede ser
    parte de un conjunto una vez, agregarlo de nuevo no tiene ningún efecto.
        Escribre una clase llamada Conjunto. Como Set, debe tener los métodos
    add ("añadir"), delete ("eliminar"), y has ("tiene"). Su constructor crea un 
    conjunto vacío, añadir agrega un valor al conjunto (pero solo si no es ya un miembro),
    eliminar elimina su argumento de conjunto (si era un miembro) y tiene retorna un valor
    booleano que indica si su argumento es un miembro del conjunto.
        Usa el operador ===, o algo equivalente como indexOf, para determinar si
    dos valores son iguales.
        Proporcionale a la clase un método estático desde que tome un objeto iterable
    como argumento y cree un grupo que contenga todos los valores producidos al iterar sobre el.
*/

class Conjunto {
    constructor (valores) {
        this.valores = { ...valores };
    }

    add() {
        console.log("valor añadido");
    }

    eliminar(valor) {

    }

    tiene(valor) {

    }
}

let conjunto = new Set([1, 3, 4, 6, 5, 2, 2]);

console.log(conjunto)

conjunto.add(6);
conjunto.add(7);

console.log(conjunto)

conjunto.delete(7);

console.log(conjunto)

let conjunto2 = new Conjunto([1, 2, 3]);

console.log(conjunto2)

conjunto2.add;

console.log(conjunto2)


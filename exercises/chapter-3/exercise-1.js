
// Mínimo

/*
    La función estándar Math.min que devuelve su argumento más pequeño. 
    Nosotros debemos construir algo como eso ahora. Escribir
    una función min que tome dos argumentos y retorne su mínimo.
*/

// Resolución:

function min(a, b) {
    if (a < b) return a;
    else if (b < a) return b;
    else return a || b;
}

console.log(Math.min(4, 3));
console.log(min(4,3));
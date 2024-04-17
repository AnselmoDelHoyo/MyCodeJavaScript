// Comparación Profunda

/*
        El operador == compara objetos por identidad. Pero a veces preferirias 
    comparar los valores de sus propiedades reales.
        Escribe una función igualdadProfunda que toma dos valores y retorne true
    solo si tienen el mismo valor o son objetos con las mismas propiedades, donde
    los valores de las propiedades sean iguales cuando comparadas con una llamada
    recursiva a igualdadProfunda.
        Para saber si los valores deben ser comparados directamente (usa el operador
    == para eso) o si deben tener sus propiedades comparadas, puedes usar el
    operador typeof. Si produce "object" para ambos valores, deberías hacer una
    comparación profunda. Pero tienes que tomar una excepción tonta en cuenta:
    debido a un accidente histórico, typeof null también produce "object".
        La función Object.keys será útil para cuando necesites revisar las propiedades
    de los objetos para compararlos.
*/

function igualdadProfunda(a, b) {
    if (typeof a !== "object" || typeof b !== "object") {
        if (a === b) return true;
        else return false;
    }
    
    if (a && b) {
        if (typeof a == "object" && typeof b == "object") {
            // Aplica para igual profunda
            if (Object.keys(a).length == Object.keys(b).length) {
                let propiedadesA = Object.keys(a);
                let propiedadesB = Object.keys(b);
                let valoresA = Object.values(a);
                let valoresB = Object.values(b);

                for (let i = 0; i < propiedadesA.length; i++) {
                    if (propiedadesA[i] !== propiedadesB[i]) return false;
                }

                for (let i = 0; i < propiedadesA.length; i++) {
                    if (!igualdadProfunda(valoresA[i], valoresB[i])) return false;
                }

                return true;
            } else return false;
        }
    }
}

console.log(igualdadProfunda({nombre: "Carlos", edad: 34}, {nombre: "Carlos", edad: 34}));

console.log(igualdadProfunda({
    batería: 100,
    sistema: {
        brillo: 100,
        volumen: 100,
    },
},{
    batería: 100,
    sistema: {
        brillo: 99,
        volumen: 100,
    },
}))
// console.log(igualdadProfunda(["Carlos", 34], ["Carlos", 34]));

// console.log({nombre: "Carlos", edad: 34} == {nombre: "Carlos", edad: 34});
// console.log(["Carlos", 34] == ["Carlos", 34])

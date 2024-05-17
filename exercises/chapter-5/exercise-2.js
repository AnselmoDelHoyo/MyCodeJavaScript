// ====== Tu propio ciclo

/*
    Escriba una función de orden superior llamada ciclo que proporcione algo así
    como una declaración de ciclo for. Esta toma un valor, una función de prueba,
    una función de actualización y un cuerpo de función. En cada iteración, primero
    ejecuta la función de prueba en el valor actual del ciclo y se detiene si esta
    retorna falso. Luego llama al cuerpo de función, dándole el valor actual. Y
    finalmente, llama a la función de actualización para crear un nuevo valor y
    comienza desde el principio.
        Cuando definas la función, puedes usar un ciclo regular para hacer los ciclos
    reales.
*/

function ciclo(valor, prueba, actualizar, funcion) {
    while (prueba(valor)) {
        funcion(valor);
        valor = actualizar(valor);
    }
}

ciclo(
    1, 
    (valor) => valor <= 10, 
    (valor) => valor + 1, 
    (valor) => console.log(valor)
)
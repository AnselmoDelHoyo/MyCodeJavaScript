
// Tablero de Ajedréz

/*
    Escribe un programa que cree un string que represente una cuadrícula de 8 ×
    8, usando caracteres de nueva línea para separar las líneas. En cada posición
    de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
    formar un tablero de ajedrez.

    Pasar este string a console.log debería mostrar algo como esto:

     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #

    Cuando tengas un programa que genere este patrón, define una vinculación
    tamaño = 8 y cambia el programa para que funcione con cualquier tamaño,
    dando como salida una cuadrícula con el alto y ancho dados.
*/

let board = "";
let tamaño = 8;

for (i = 0; i < tamaño; i++) {
    let isChapter = (i % 2 == 0) ? true : false;
    let line = ""; 
    for (j = 0; j < tamaño; j++) {
        if (isChapter) line += " ";
        else line += "#";
        if (j == tamaño - 1) line += "\n";
        isChapter = !isChapter
    }
    board += line;
}

console.log(board);
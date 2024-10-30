// Un Tipo Vector

/*
    Escribe una clase Vec que represente un vector en un espacio de dos dimensiones.
    Toma los parámetros (numéricos) x y y, que debería guardar como propiedades del mismo nombre.
        Dale al prototipo de Vector dos métodos, más o menos, los cuales toman
    otro vector como parámetro y retornan un nuevo vector que tiene la suma o
    diferencia de los valores x y y de los dos vectores (this y el parámetro).
        Agrega una propiedad getter llamada longitud al prototipo que calcule la longitud
    del vector, es decir, la distancia del punto (x, y) desde el origen (0,0).
*/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    } 

    mas(x, y) {
        return ((x + this.x),(y + this.y));
    }

    menos(x, y) {
        return((x - this.x),(y - this.y));
    }

    get longitud() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }
}

let vector = new Vec(4,7);

console.log(vector.longitud);


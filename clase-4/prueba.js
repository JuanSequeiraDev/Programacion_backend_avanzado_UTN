/* let producto = {
    nombre: 'Tv samsung',
    precio: 2000,
    id: 1,
    categoria: 'TECNOLOGIA'
}

let producto_2 = {
    nombre: 'Tv samsung',
    precio: 2000,
    id: 1,
    categoria: 'TECNOLOGIA'
}



//Creando una propiedad


const venderProducto = (producto) =>{
    console.log("Has vendido a " + producto.nombre + 'y ahora me quedan ' + producto.stock)
}

producto.stock = 10

venderProducto(producto_2) */

//La clase se usa para crear objetos
class Producto {
    /* El constructor es la funcion que se va a ejecutar cuando se cree el producto */

    constructor(nombre, precio){
        console.log("creando un producto con clase, yeah ")
        /* This es una autoreferencia al objeto que retornara la clase */
        console.log(nombre)
        this.x_valor = 'hola'
        this.precio = precio
        this.nombre = nombre
    }

    //Declaracion de un metodo
    presentarProducto(cliente){
        console.log('Hola ' + cliente +  ', este producto se llama ' + this.nombre)
    }

    comprar(cantidad){
        console.log('Comprar a ' + this.nombre + ' ' +cantidad + ' veces costara $' + (cantidad * this.precio) )
    }

}


//Instanciar la clase producto. Instanciar una clase siempre retorna un objeto
let resultado = new Producto('tv LG', 800)
const samsung = new Producto('s20', 1200)

resultado.presentarProducto('pepe')
resultado.comprar(3)
samsung.comprar(10)

/* Compra es un metodo que recibira una cantidad a comprar y me dira, 'comprar a (nombre), {x} veces costara (cantidad * precio)  */



//Funcion constructora de ES5
function Item (){
    this.nombre = 'x item'

    Item.prototype.presentar = function(){
        console.log('Este producto se llama ' + this.nombre)
    }
}



let item_1 = new Item()

item_1.presentar()


"use strict";
/* class Accion {
    accion_id : number;
    descripcion : string;
    fecha : Date;
    

    constructor(accion_id : number, descripcion : string, fecha : Date){
        this.accion_id = accion_id,
        this.descripcion = descripcion,
        this.fecha = fecha
    }
}

class Historial {
    acciones : Accion[];
    contador_id : number

    constructor(){
        this.acciones = []
        this.contador_id = 1;
    }

    agregarAccion(
        descripcion : string,
        fecha : Date,
    ) : void
    {
        const nueva_accion : Accion = new Accion(this.contador_id++, descripcion , fecha)
        this.acciones.push(nueva_accion)
        console.log(`Accion agregada con éxito con ID ${nueva_accion.accion_id}.`);
    }

    obtenerAccionPorId(id : number) : void{
        const accionBuscada : Accion | undefined = this.acciones.find((accion : Accion) => accion.accion_id === id)
        console.log(accionBuscada)
    }

    eliminarAccionPorId(id : number) : void{
        const accionAEliminarIndex : number = this.acciones.findIndex((accion : Accion) => accion.accion_id === id )
        if(accionAEliminarIndex == -1){
            console.log('No se ha encontrado una accion con este ID')
        }
        else{
            this.acciones.splice(accionAEliminarIndex, 1)
        }
    }
    //ForEach es otra opcion
    eliminarTodo() : void{
        this.acciones.splice(0, this.acciones.length)
    }
    //Condicion para error si historial esta vacio
    mostrarHistorial() : void{
        console.log(this.acciones)
    }
}

const nuevoHistorial1 = new Historial

nuevoHistorial1.agregarAccion('OperaGx buscado en el navegador', new Date())
nuevoHistorial1.agregarAccion('ChatGPT abierto en una pestaña nueva', new Date())
nuevoHistorial1.agregarAccion('Video de youtube reproducido', new Date())

//nuevoHistorial1.eliminarAccionPorId(2)
//nuevoHistorial1.eliminarTodo()
nuevoHistorial1.mostrarHistorial() */ 

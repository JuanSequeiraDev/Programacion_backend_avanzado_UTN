class Accion {
    accion_id: number;
    descripcion: string;
    fecha: Date

    constructor(
        accion_id: number,
        descripcion: string,
        fecha: Date) {
        this.accion_id = accion_id
        this.descripcion = descripcion
        this.fecha = fecha
    }

    mostrarDetalle(): void {
        console.log('La accion ' + this.descripcion + ' con id ' + this.accion_id + ' es de la fecha ' + this.fecha)
    }
}

type dispositivo_origen = 'tablet' | 'ordenador' | 'celular'

class AccionInicioSesion extends Accion {
    dispositivo_origen: dispositivo_origen;

    constructor(
        accion_id: number,
        descripcion: string,
        fecha: Date,
        dispositivo_origen: dispositivo_origen
    ) {
        super(accion_id, descripcion, fecha)
        this.dispositivo_origen = dispositivo_origen
    }

    mostrarDetalle(): void {
        console.log('La accion ' + this.descripcion + ' con id ' + this.accion_id + ' de la fecha ' + this.fecha + ' fue realizada desde un dispositivo tipo ' + this.dispositivo_origen)
    }
}

class AccionCierreSesion extends Accion {
    dispositivo_origen: dispositivo_origen;
    tiempo_de_sesion: number

    constructor(
        accion_id: number,
        descripcion: string,
        fecha: Date,
        dispositivo_origen: dispositivo_origen,
        tiempo_de_sesion: number
    ) {
        super(accion_id, descripcion, fecha)
        this.dispositivo_origen = dispositivo_origen
        this.tiempo_de_sesion = tiempo_de_sesion
    }

    mostrarDetalle(): void {
        console.log('La accion ' + this.descripcion + ' con id ' + this.accion_id + ' de la fecha ' + this.fecha + ' fue realizada desde un dispositivo tipo ' + this.dispositivo_origen + ', la sesion duro ' + this.tiempo_de_sesion + ' minutos ')
    }
}

type Tipos_de_cambio = 'nombre de usuario' | 'contraseña' | 'email asociado'

class Cambio {
    id_cambio: number;
    valor_anterior: string;
    nuevo_valor: string
    tipo_de_cambio: Tipos_de_cambio

    constructor(
        id_cambio: number,
        valor_anterior: string,
        nuevo_valor: string,
        tipo_de_cambio: Tipos_de_cambio
    ) {
        this.id_cambio = id_cambio
        this.valor_anterior = valor_anterior
        this.nuevo_valor = nuevo_valor
        this.tipo_de_cambio = tipo_de_cambio
    }

    mostrarCambio(): void {
        console.log('El cambio con id: ' + this.id_cambio + ' cambio el valor de ' + this.tipo_de_cambio + ', que tenia el valor ' + this.valor_anterior + ' por ' + this.nuevo_valor)
    }
}

class AccionActualizacionPerfil extends Accion {
    cambios: Cambio[];
    id_incrementador: number

    constructor(
        accion_id: number,
        descripcion: string,
        fecha: Date,
    ) {
        super(accion_id, descripcion, fecha)
        this.cambios = []
        this.id_incrementador = 1
    }

    hacerCambio(
        valor_anterior: string,
        nuevo_valor: string,
        tipo_de_cambio: Tipos_de_cambio
    ): void {
        const nuevo_cambio = new Cambio(this.id_incrementador++, valor_anterior, nuevo_valor, tipo_de_cambio)
        this.cambios.push(nuevo_cambio);
        console.log('Cambio con id ' + this.id_incrementador + ' agregado correctamente')
    }

    mostrarDetalle(): void {
        console.log('La accion de actualizacion de perfil con id:' + this.accion_id + ' descripta como ' + this.descripcion + ' realizada en la fecha ' + this.fecha + ' realizo los siguientes cambios: ')
        console.log(this.cambios)
    }
}

class AccionCompra extends Accion {
    productos: string[];
    total: number

    constructor(
        accion_id: number,
        descripcion: string,
        fecha: Date,
        productos: string[],
        total: number
    ) {
        super(accion_id, descripcion, fecha)
        this.productos = productos
        this.total = total
    }

    mostrarDetalle(): void {
        console.log('la accion ' + this.descripcion + ' con id ' + this.accion_id + ' tiene un valor total de $' + this.total + ' y los productos comprados son los siguientes')
        console.log(this.productos)
    }
}

class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string

    constructor(
        accion_id: number,
        descripcion: string,
        fecha: Date,
        destinatario: string,
        mensaje: string
    ) {
        super(accion_id, descripcion, fecha)
        this.destinatario = destinatario
        this.mensaje = mensaje
    }

    mostrarDetalle(): void {
        console.log('la accion ' + this.descripcion + ' con id ' + this.accion_id + ' realizada el ' + this.fecha + ' contiene el mensaje "' + this.mensaje + '" y fue enviado a "' + this.destinatario + '"')
    }
}

class Historial {
    acciones: Accion[];

    constructor() {
        this.acciones = []
    }

    agregarAccion(accion: Accion) : void{
        this.acciones.push(accion)
        console.log('La accion ' + accion.descripcion + ' con id: ' + accion.accion_id + ' se ha agregado correctamente')
    }

    eliminarAccionPorId(id: number): void {
        const accionAEliminarIndex: number = this.acciones.findIndex((accion: Accion) => accion.accion_id === id)
        if (accionAEliminarIndex == -1) {
            console.log('No se ha encontrado una accion con este ID')
        }
        else {
            this.acciones.splice(accionAEliminarIndex, 1)
            console.log('La accion con id ' + id + ' ha sido eliminada correctamente')
        }
    }

    eliminarTodo(): void{
        this.acciones.splice(0)
        console.log(this.acciones)
    }

    mostrarHistorial() : void{
        console.log(this.acciones)
    }
}






const nuevaAccionEstandar = new Accion(1, 'Navegador abierto', new Date())
nuevaAccionEstandar.mostrarDetalle()

const nuevaAccionInicioSesion = new AccionInicioSesion(2, 'Sesion Iniciada', new Date(), 'celular')
nuevaAccionInicioSesion.mostrarDetalle()

const nuevaAccionCierreSesion = new AccionCierreSesion(3, 'Sesion Iniciada', new Date(), 'celular', 5)
nuevaAccionCierreSesion.mostrarDetalle()

const nuevaAccionActualizarPerfil = new AccionActualizacionPerfil(4, 'cambio de nombre de usuario', new Date())
nuevaAccionActualizarPerfil.hacerCambio('juanseque', 'juansequeira', 'nombre de usuario')
nuevaAccionActualizarPerfil.mostrarDetalle()

const nuevaAccionCompra = new AccionCompra(5, 'compra realizada', new Date(), ['Mouse logitech', 'Teclado reddragon', 'monitor LG'], 45000)
nuevaAccionCompra.mostrarDetalle()

const nuevaAccionEnvioMensaje = new AccionEnvioMensaje(6, 'mensaje enviado', new Date(), 'messi', 'hola amigo todo bien')
nuevaAccionEnvioMensaje.mostrarDetalle()

const nuevoHistorial = new Historial()
nuevoHistorial.agregarAccion(nuevaAccionEstandar)
nuevoHistorial.agregarAccion(nuevaAccionInicioSesion)
nuevoHistorial.agregarAccion(nuevaAccionCierreSesion)
nuevoHistorial.agregarAccion(nuevaAccionActualizarPerfil)
nuevoHistorial.agregarAccion(nuevaAccionCompra)
nuevoHistorial.agregarAccion(nuevaAccionEnvioMensaje)

nuevoHistorial.eliminarAccionPorId(1)
nuevoHistorial.mostrarHistorial()
/* nuevoHistorial.eliminarTodo() */
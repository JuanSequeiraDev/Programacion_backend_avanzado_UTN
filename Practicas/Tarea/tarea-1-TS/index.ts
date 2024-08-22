class Empleado {
    nombre: string;
    sueldo: number;
    fecha_contratacion: Date;
    id_empleado: number;
    tipo: Puesto

    constructor(
        nombre: string, 
        sueldo: number, 
        fecha_contratacion: Date, 
        id_empleado: number, 
        tipo: Puesto
        ) {
            this.nombre = nombre;
            this.sueldo = sueldo;
            this.fecha_contratacion = fecha_contratacion;
            this.id_empleado = id_empleado;
            this.tipo = tipo;
    }

    presentarse(nombre : string){
        console.log("hola " + nombre + " soy " + this.nombre + ' y trabajo como ' + this.tipo)
    }
}

class Pasante extends Empleado{
    tiempo_de_contrato_en_meses: number
    constructor(
        nombre: string, 
        sueldo: number, 
        fecha_contratacion: Date, 
        id_empleado: number, 
        tipo: Puesto, 
        tiempo_de_contrato_en_meses: number){
        /* Esta es la invocacion del constructor del empleado */
        super(nombre, sueldo , fecha_contratacion , id_empleado, tipo)
        this.tiempo_de_contrato_en_meses = tiempo_de_contrato_en_meses
    }

    presentarse(nombre : string): void {
        console.log("hola " + nombre +  " soy " + this.nombre + ' y trabajo como pasante de ' + this.tipo)
    }

    hacerCosasDePasante(){
        if(this.tipo === 'Developer'){
            console.log('hacer un while true es mi pasion')
        }
    }
}


type Puesto = 'Developer' | 'Designer' | 'Marketing' | "Project Manager" | 'HR'

class ManejadorDeEmpleados {
    empleados: Empleado[];
    id_manejador: number;
    tipos_permitidos: string[];
    contador_id: number;

    constructor(id_manejador: number) {
        this.empleados = [];
        this.id_manejador = id_manejador;
        this.tipos_permitidos = ["Project Manager", "Developer", "Designer", "Marketing", 'HR'];
        this.contador_id = 1; 
    }

    agregarEmpleado(
        nombre: string,
        sueldo: number, 
        fecha_contratacion: Date, 
        tipo: Puesto) : void {
            if(!this.tipos_permitidos.includes(tipo)){
                console.error("Error: el tipo de empleado "+ tipo + " no es valido")
            }
            else{
                const nuevo_empleado = new Empleado(nombre, sueldo, fecha_contratacion, this.contador_id++, tipo);
                this.empleados.push(nuevo_empleado);
                console.log(`Empleado ${nombre} agregado con éxito con ID ${this.contador_id}.`);
            }
        }

    obtenerEmpleadoPorId(id_empleado: number) : Empleado | null {
        const empleado : Empleado | undefined = this.empleados.find((empleado : Empleado) : boolean => empleado.id_empleado === id_empleado)

        if (empleado) {
            return empleado
        } else {
            return null
        }
    }

    obtenerEmpleadosPorTipo(tipo: string) {
        const empleados_filtrados = this.empleados.filter(empleado => empleado.tipo === tipo);

        if (empleados_filtrados.length > 0) {
            console.log(`Empleados de tipo "${tipo}":`);
            empleados_filtrados.forEach(empleado => {
                console.log(`- ID: ${empleado.id_empleado}, Nombre: ${empleado.nombre}, Sueldo: ${empleado.sueldo}`);
            });
        } else {
            console.log(`No se encontraron empleados de tipo "${tipo}".`);
        }
    }
}


const pepe = new Empleado('pepe', 2000000, new Date(), 1, 'Developer')
const susana = new Pasante('Susana', 820000, new Date(), 2, 'Developer', 6)

console.log(pepe, susana)

pepe.presentarse('Juan')
susana.presentarse('Elias')

susana.hacerCosasDePasante()

const manejador_de_empleados = new ManejadorDeEmpleados(1);




/* manejador_de_empleados.agregarEmpleado('pepe', 10000, new Date(), 'HR') */

/* manejador_de_empleados.agregarEmpleado('Santiago Barletta', 1000000, new Date(), 'Project Manager');
manejador_de_empleados.agregarEmpleado('Pepe Pompím', 500000, new Date(), 'Developer');
manejador_de_empleados.agregarEmpleado('Freddy Kruegger', 350000, new Date(), 'Designer');
manejador_de_empleados.agregarEmpleado('Jason Voorhees', 300000, new Date(), 'Marketing');

console.log(manejador_de_empleados);
manejador_de_empleados.obtenerEmpleadoPorId(1);
manejador_de_empleados.obtenerEmpleadosPorTipo('Developer');
manejador_de_empleados.obtenerEmpleadosPorTipo('Marketing'); */

/* new Empleado('pepe', 1000, new Date(), 1 , 'Developer') */




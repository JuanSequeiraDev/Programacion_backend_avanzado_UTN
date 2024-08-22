/* const saludar = (persona: string) =>{
    console.log('hola ' + persona)
}

let personita = {nombre: 'pepe', apellido: 'suarez'}

saludar(personita.nombre) */


/* Indico explicitamente que la variable nombre es de tipo string */
/* let nombre : string = 'pepe'

nombre = '1' */

let nombre : string | null = null 


if(nombre){
    console.log(nombre)
}
else{
    console.log('no hay nombre aun')
}

let edad : number = 80
let isRegistered : boolean = true
let miNombre : string = 'juan'
let nulo : null = null
let undefinido : undefined = undefined

const calcularIva = (precio : number) : number =>{
    return precio * 0.21
}

const resultado : number = calcularIva(400)

const saludar = (nombre: string) : void =>{
    console.log('hola' + nombre)
}

saludar('pepe')

const mandarEmail = (to : string,  message: string = 'nada', subject?: string,) : void =>{ /* (Parametro)? forma un parametro opcional  */
    /* magia negra */
    console.log(to, message)
}

mandarEmail('pepito@gmail.com')


/* HTTP Hyper text transfer protocol */

/* FETCH Y ASYNC */

/* Que es fetch */
/* Que permite Hacer? , fetch emite consultas HTTP*/

/* 
Las promesas tienen estados

-Pending => indica que dicha promesa aun esta pendiente de resolucion
-Resolved => La promesa fue resuelta
-Rejected => La promesa fue rechazada o hubo un fallo al resolverse
*/



/* 1s cargarse */

/* const obtenerAnakin = async () =>{
    const respuesta = await fetch('https://swapi.dev/api/people/1', {
        method: 'GET'
    })
    const data = await respuesta.json()
    //El retorno de la transformacion a JSON es una promesa ya que no se sabe de por si que cantidad de contenido puede traer ni su tiempo de carga
    console.log('persona1', data)
    return data
}


//Al usar una fucnion async, la funcion devuelve una promise
const obtenerPagina = async () =>{
    const respuesta = await fetch('https://swapi.dev', {
        method: 'GET'
    })
    console.log('persona2', respuesta)
}

const renderizarPersonaje = async () =>{
    const anakin = await obtenerAnakin()
    console.log(anakin)
    document.write(anakin.name)
}

renderizarPersonaje() */
/* obtenerAnakin()
obtenerPagina() */
/* El await hace que el codigo consiguiente espere (en este caso) al fetch */





/* fetch('https://swapi.dev/api/people/1', {
    method: 'GET'
})
fetch('https://swapi.dev/api/people/1', {
    method: 'GET'
}) */

/* POST /api/products  le voy a enviar un objeto */



/* Realizo una consulta http al url https://swapi.dev/api/personas/1 con el metodo GET. Esta respuesta es devuelta con un json, devuelto en un retorno de tipo Promise (Predefinido del fetch ya que es asincronico)*/

/* console.log('hola')
console.log('chau') */
//Es sincronico por lo cual se carga primero el hola




/*    CALLBACKS     */
/* Callback es una funcion llamada x parametro */

const usuarios = [
    {
        nombre: 'Pepe',
        edad: 30
    },
    {
        nombre: 'Maria',
        edad: 49
    },
    {
        nombre: 'Jose',
        edad: 56
    }
]

console.log(usuarios) //El prototype de array tiene todos los metodos para arrays

/* usuarios.push() */

//forEach metodo avanzado de array (metodo basado en el prototipo de un array)
/* forEach recibe una funcion, la cual invocara por detras */

/* usuarios.forEach((usuario, indice, listaDeUsuarios) =>{   //posicionales, primer argumento es el elemento, segundo el indice y tercero el array completo
    console.log('hola ' + usuario.nombre)
})
 */

/* Puede utilizarse como callback una funcion anonima o una funcion nombrada */
/* const accionForEach = () =>{} */



const filterPro = (array, accionCallBackFn) => {
    const resultado = []

    for(const elemento of array){
        if(accionCallBackFn(elemento)){
            resultado.push(elemento)
        }
    }

    return resultado
}

const result = filterPro(usuarios, (usuario) =>{
    return usuario.edad > 35
})

console.log(result)
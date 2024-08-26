// 1

/* const numeros = [5, 2, 3, 4, 5] */

const sumarArray = (array) =>{
    let sumaArray = 0
    for(let number of array){
        sumaArray = sumaArray + number  
    }
    return sumaArray
}
/* 
let suma = sumarArray(numeros) */



// 2

/* const stringArray = ['pepe', 'juan', 'maria', 'thomas']

const concatArray = (array) => {
    let concatArray = ''
    for(let string of array){
        concatArray = concatArray + ' ' + string  
    }
    return concatArray
}

let concat = concatArray(stringArray) */



// 3

/* const numberArray = [15, 2, 5, 23, 45, 9]

const sobreDiez = (array) =>{
    const arraySobreDiez = array.filter(item => item > 10)
    console.log(arraySobreDiez)
}

sobreDiez(numberArray) */



// 4

/* const numberArray = [2, 15, 7, 10, 26, 5, 4, 8]

const sumaDePares = (array) =>{
    const arrayPar = array.filter(number => number % 2 === 0)
    let sumaPar = 0
    for(numero of arrayPar){
        sumaPar = sumaPar + numero
    }
    console.log(sumaPar)
}

sumaDePares(numberArray) */



// 5

/* const stringArray = ['pepe', 'juan', 'maria', 'thomas']

const cortarString = (array, stringEliminar) =>{
    let stringIndex = array.indexOf(stringEliminar)
    if(stringIndex === -1){
        return null
    }
    else{
        array.splice(stringIndex, 1)
        return array
    }
    
}

const arrayCortado = cortarString(stringArray, 'pepe')

console.log(arrayCortado) */



// 6

/* REFERENCIA DE RESULTADO

Lista de (nombreDeLista):

1) juan  
2) pepe  
3) maria 
*/

/* const stringArray = ['pepe', 'juan', 'maria']

const crearLista = (array, nombreDeLista) =>{
    let stringList = ''
    for(nombre of array){
        const index =  array.indexOf(nombre) + 1
        stringList = stringList + index + ')' + nombre + '\n'
    }
    let listaDeNombresCompleta = nombreDeLista + '\n' + '\n' + stringList
    return listaDeNombresCompleta
}

let listaDeNombres = crearLista(stringArray, 'Empleados')
console.log(listaDeNombres) */



// 7 

/* const stirngArray = ['pepe', 'juan', 'pepe', 'maria', 'tomi', 'fernando', 'fernando', 'pepe']

const stringPresence = (array, stringBuscado) =>{
    const arrayFiltrado = array.filter(string => string == stringBuscado)
    return arrayFiltrado.length
}

let cantidadDeVeces = stringPresence(stirngArray, 'pepe')
console.log(cantidadDeVeces) */



// 8

const gananciasMensuales = []

const vender = (cantidadVendida, precio, nombreProducto) =>{
    let recaudado = precio * cantidadVendida
    gananciasMensuales.push(recaudado) 
}

vender(5, 1250, 'bicicletaBMX')
vender(8, 500, 'mouse gamer')
vender(100, 15, 'hojas de papel')
vender(1, 250, 'control ps5')

console.log(gananciasMensuales)


// 9

const gastosMensuales = []

const comprar = (cantidadComprada, precio, nombreProducto) =>{
    let gastado = precio * cantidadComprada
    gastosMensuales.push(gastado) 
}

comprar(6, 320, 'leche 0%')
comprar(1, 5000, 'silla gamer')
comprar(8, 150, 'rollos de papel')
comprar(3, 1000, 'kilo de carne')

console.log(gastosMensuales)



// 10

const dineroRestante = (gananciasMensuales, gastosMensuales) =>{
    const gananciasMensualesTotal = sumarArray(gananciasMensuales)
    const gastosMensualesTotal = sumarArray(gastosMensuales)
    
    const resultado = gananciasMensualesTotal - gastosMensualesTotal
    return resultado
}

const billeteraFinDeMes = dineroRestante(gananciasMensuales, gastosMensuales)
console.log(billeteraFinDeMes)
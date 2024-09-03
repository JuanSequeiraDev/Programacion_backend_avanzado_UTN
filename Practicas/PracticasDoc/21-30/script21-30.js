// 21 (misma consigna que el primer ejercicio🤔)

/* const numberArray = [5, 7, 10, 12, 24]

const sumarArray = (array) =>{
    let sumaArray = 0
    for(let number of array){
        sumaArray = sumaArray + number  
    }
    return sumaArray
}

const resultadoArray = sumarArray(numberArray)
console.log(resultadoArray) */



// 22

/* const numberArray = [5, 7, 99, 3, 4, 54, 2, 12]

const numeroPresente = (numero, array) => array.includes(numero)

const resultadoValidacion = numeroPresente(103, numberArray)
console.log(resultadoValidacion) */



// 23

/* const arraySimbolos = ['⭐','⭐','⭐' ,'⭐' ,'⭐','✨','✨']


//Al trabajar con simbolos es necesario copiar y pegar los mismos simbolos utilizados en la validacion de .includes y pegarlos en los valores del array para que funcione (para quien lo quiera probar con otros simbolos o variando los mismos)


const ganador = (array) =>{
    if(array.length <= 5){
        if(array.includes('💫') || array.includes('✨') || array.includes('⭐') ){
            let primerSimbolo = array[0]
            let simboloAnterior = array[0]
            let resultado
            for(simbolo of array){
                if(simbolo === simboloAnterior){
                    simboloAnterior = simbolo
                    resultado = true
                }
                else if(simbolo !== simboloAnterior){
                    simboloAnterior = false
                    resultado = false
                }
            }
            if(simboloAnterior === primerSimbolo){
                return resultado
            }
            else{
                return resultado
            }
        }
        else{
            console.log('no hay ningun simbolo en su array')
        }
    }
    else if(array.length > 5){
        const arrayCortado = array.slice(0, 5)
        if(arrayCortado.includes('💫') || arrayCortado.includes('✨') || arrayCortado.includes('⭐') ){
            let primerSimbolo = arrayCortado[0]
            let simboloAnterior = arrayCortado[0]
            let resultado
            for(simbolo of arrayCortado){
                if(simbolo === simboloAnterior){
                    simboloAnterior = simbolo
                    resultado = true
                }
                else if(simbolo !== simboloAnterior){
                    simboloAnterior = false
                    resultado = false
                }
            }
            if(simboloAnterior === primerSimbolo){
                return resultado
            }
            else{
                return resultado
            }
        }
        else{
            console.log('no hay ningun simbolo en su array')
        }
    }
}

const gane = ganador(arraySimbolos)
console.log(gane) */



// 24

/* const separar = (string) => {
    const regxp = /^[a-zA-Z0-9_-]$/
    const tieneEmotes = string.includes('🐶') && string.includes('😺')
    const stringSinPerro = string.replaceAll('🐶', '')
    const stringSinEmotes = stringSinPerro.replaceAll('😺', '')
    const validacionReturn = !regxp.test(stringSinEmotes)
    if (tieneEmotes === true && validacionReturn === true) {
        const stringSoloPerro = string.replaceAll('😺', '')
        const stringSoloGato = string.replaceAll('🐶', '')
        const stringOrdenado = stringSoloPerro + stringSoloGato
        return stringOrdenado
    }
    else{
        return 'Error, caracteres erroneos detectados'
    }
}

const emotesOrdenados = separar('🐶😺🐶🐶😺😺😺🐶🐶😺')
console.log(emotesOrdenados) */



// 25

/* const multiplicar = (multiplicador, array) =>{
    if(!(isNaN(multiplicador) || !multiplicador)){
        const arrayMultiplicado = array.map(numero =>{
            if(!(isNaN(numero) || !numero)){
                return numero * multiplicador
            }
            else{
                return 'Error, hay un no numero en este string'
            }
        }) 
        return arrayMultiplicado
    }
    else{
        return 'Error, el multiplicador no es un numero'
    }
}

const arrayMultiplicado = multiplicar(5 , [2, 5, 3, 15, 9])
console.log(arrayMultiplicado) */



// 26 

/* const filtrarPorLongitudMayorA = (maxLength, array) =>{
    let arrayFiltrado = []
    for(string of array){
        if(string.length > maxLength){
            arrayFiltrado.push(string)
        }
    }
    return arrayFiltrado
}



const arrayFiltrado = filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])  
console.log(arrayFiltrado) */



// 27

const jugadasA = ['piedra', 'piedra', 'tijera']  
const jugadasB = ['papel', 'tijera', 'tijera']

const jugarPiedraPapelTijeras = (jugadorA, jugadorB, jugadasA, jugadasB) =>{
    if(jugadasA.length === 3 && jugadasB.length === 3){
        console.log('todo bien')
    }
    else{
        console.log('Faltan o sobran jugadas en el array. Recuerde que deben ser 3 jugadas por jugador')
    }
}

jugarPiedraPapelTijeras('juan', 'maria', jugadasA, jugadasB)













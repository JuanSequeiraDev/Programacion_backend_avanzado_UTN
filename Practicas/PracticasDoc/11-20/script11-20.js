// 11

/* const calcularAreaTriangulo = (baseCM, alturaCM) =>{
    const areaTriangulo = (baseCM  * alturaCM) / 2
    return areaTriangulo
}

const areaCalculada = calcularAreaTriangulo(5, 10)
console.log(areaCalculada) */



// 12

/* const ultimoCaracterValidacion = (palabra, caracter) =>{
    const caracterIndex = palabra.lastIndexOf(caracter) + 1
    const palabraLength = palabra.length
    if(caracterIndex != palabraLength){
        return false
    }
    else if(caracterIndex == palabraLength){
        return true
    }
}

const verificacionUltimoCaracter = ultimoCaracterValidacion('diegoarmandomaradonas', 's')
console.log(verificacionUltimoCaracter) */



// 13

/* const esValida = (contraseña) => contraseña.length >= 8

const resultadoDeMiContraseña = esValida('caracola')
console.log(resultadoDeMiContraseña) */



// 14

/* const contarPalabras = (string) =>{
    const largo = string.trim().length
    const sinEspacios = string.replaceAll(' ', '').length
    const palabras = largo - sinEspacios + 1
    return palabras
}

const cuantasPalabras = contarPalabras('   hola me llamo juan soy yo juan ')
console.log(cuantasPalabras) */



// 15

/* const capitalizar = (string) =>{
    const stringFirstLetter = string.charAt('0')
    const stringCapitalizado = string.replace(stringFirstLetter, stringFirstLetter.toUpperCase())
    return stringCapitalizado
}


const stringCapitalizado = capitalizar('holahola')
console.log(stringCapitalizado) */



// 16 

/* const obtenerPrimeraOracion = (string) =>{
    let puntoFinal = string.indexOf('.')
    if(puntoFinal == -1){
        puntoFinal = string.length
        let primeraOracion = string.slice( 0 , puntoFinal)
        return primeraOracion
    }
    else{   
        let primeraOracion = string.slice( 0 , puntoFinal)
        return primeraOracion
    }
}


const primeraOracion = obtenerPrimeraOracion('Hola me llamo juan y tengo un cuerno de mamut, este cuerno me gusta mucho pero aca termina la oracion. Si queres seguir leyendo anda a mi pagina web')

console.log(primeraOracion) */



// 17


/* const ocultarContraseña = (contraseña) =>{
    if(isNaN(contraseña) || !contraseña){
        console.log('error, contraseña no numerica')
    }
    else{
        const largoContraseña = String(contraseña).length
        const contraseñaOcultada = '\*'.repeat(largoContraseña)
        return contraseñaOcultada
    }
}

const contraseñaOculta = ocultarContraseña(123456)
console.log(contraseñaOculta) */



// 18 


/* const obtenerExtencion = (archivo) =>{
    const puntoUbicacion = archivo.indexOf('.')
    const extencion = archivo.slice(puntoUbicacion + 1, puntoUbicacion + 5)
    return extencion
}


const extencion = obtenerExtencion('archivo.docx')
console.log(extencion) */



// 19

/* const esPuenteSeguro = (puenteString) => {
    if(puenteString.includes('#')){
        return !puenteString.includes(' ')
    }
    else{
        console.log('error, tipo de puente incorrecto. Intente un puente de numerales(#)')
        return null
    }
}


const seguridadDelPuenteBoolean = esPuenteSeguro('## ## ##')
console.log(seguridadDelPuenteBoolean) */



// 20

/* const numberArray = [5, 7, 99, 34, 54, 2, 12]
const arrayDeNumeros = [ 65, 42, 5123, 234, 12 , 313, 21, 99, 102, 3254]

const obtenerMenor = (array) =>{
    let numeroMenor = array[0]
    for(number of array){
        let numeroIndex = array.indexOf(number)
        let numeroSiguiente = array.at(numeroIndex + 1)
        if(!(!numeroSiguiente || isNaN(numeroSiguiente))){
            if(number < numeroMenor){
                numeroMenor = 0
                numeroMenor = number
            }
        }
    }
    return numeroMenor
}

const menorNumero1 = obtenerMenor(numberArray)
const menorNumero2 = obtenerMenor(arrayDeNumeros)
console.log(menorNumero1)
console.log(menorNumero2) */






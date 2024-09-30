import filesystem from 'fs'

const crearTXT = async (fileName, data) =>{
    

    try{
        if(!fileName || !fileName.length >= 1 || !isNaN(fileName)){
            throw {code :'ERR_INVALID_ARG_TYPE' , detail: 'Falta fileName en crearTXT o el formato de fileName es incorrecto. Se recibio lo siguiente: ' + fileName}
        }
        if(!fileName || !fileName.length >= 1 || !isNaN(fileName)){
            throw {code :'ERR_INVALID_ARG_TYPE', detail: 'Falta data en crearTXT o se recibio un tipo de dato incorrecto. Se recibio lo siguiente: ' + data}
        }
        await filesystem.promises.writeFile(fileName + '.txt', data, {encoding: 'utf-8'})
        console.log('Archivo ' + fileName +  '.txt creado con exito')
    }
    // error es el objeto de error
    catch(error){
        if(error.code === 'ERR_INVALID_ARG_TYPE'){
            console.error(error.detail)
        }
        else{
            throw error
        }
    }
}

export class Log {
    timestamp = new Date()

    constructor(id, level, module, message){
        this.id = id
        this.level = level
        this.module = module
        this. message = message
    }
}

export class LoggerManager {
    logs = []
    id_counter = 1

    async addLog(level, module, message) {
        try {
            if (level != 'debug' && level != 'warn' && level != 'error' && level != 'info' || !module || !isNaN(module) || !message || !isNaN(message)) {
                throw {
                    mensaje: 'SERVER ERROR: Alguno de los valores ingresados no cumple con los requisitos',
                    status: 500,
                    ok: false,
                    data: null
                }
            }
            else{
                const nuevoLog = new Log(this.id_counter++, level, module, message)
                this.logs.push(nuevoLog)
                await crearTXT(`./logs/log${this.id_counter - 1}`, `[ID:${this.id_counter - 1}] [${level}] [${module}] [${new Date()}]`)
            }
        }
        catch (error) {
            console.error(error.mensaje)
        }
    }

    showLogs(){
        console.log(this.logs)
    }
}
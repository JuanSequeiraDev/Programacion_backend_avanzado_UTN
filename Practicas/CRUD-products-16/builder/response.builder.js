class ResponseBuilder{
    response = {
        ok: false,
        status: 0,
        message: '',
        data: {},
    }
    //HACER VALIDACIONES COMO PRACTICA
    setOk(ok){
        this.response.ok = ok
        return this
    }
    setStatus(status){
        this.response.status = status
        return this
    }
    setMessage(message){
        this.response.message = message
        return this
    }
    setData(data){
        this.response.data = data
        return this
    }

    build(){
        return this.response
    }
}

export default ResponseBuilder
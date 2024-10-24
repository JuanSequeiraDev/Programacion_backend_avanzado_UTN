

const registerController = (req, res) =>{
    const {name, password, email} = req.body

    //TODO
    //Validar name, password, email

    console.log(name, password, email)
    res.json({ok: true})
}

export default registerController
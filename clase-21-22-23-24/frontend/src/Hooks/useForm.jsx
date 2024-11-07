import react, { useState } from "react"


    //Tener un estado que nos permita controlar el formulario
    //state = {email: '', password: '', name: ''}
    //Cada vez que el usuario ingrese un valor en algun input de nuestro form, DEBE CAMBIAR tambien el objeto state

    //Sabemos que debemos usar onChange


const useForm =  (initialForm) => {
    const [formState, setFormState] = useState(initialForm)
    

    const handleChange = (event) => {
        // event.target Que es? Es el elemnto HTML que emitio el evento
        // event.target.value Que es? El valor del elemento HTML (El input)

        const field_name = event.target.name
        const field_value = event.target.value

        //La funcion setter de mi estado me permite modoficar el estado y re renderizar el componente
        //Opcionalmente yo le puedo pasar una callback, la misma sera invocada y el valor de retorno de la callback sera el nuevo valor de mi estado
        //El parametro de la callback es el prevState o el estado previo de ese estado (osea el valor actual)
        setFormState((prevFormState) => {
            return { ...prevFormState, [field_name]: field_value }
        })
    }

    return {
        formState: formState,
        handleChange
    }
}

export default useForm
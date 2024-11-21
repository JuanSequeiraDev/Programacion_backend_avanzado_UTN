// Una funcion que me devuelve los headers de una consulta autenticada

const getAuthenticationHeaders= () =>{
    const acces_token = sessionStorage.getItem('access-token')
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${acces_token}`
    }
}

export {getAuthenticationHeaders}
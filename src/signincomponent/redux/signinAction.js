export const login = (email , password , loggedIn) => {
    return {
        type: "LOG_IN",
        payload: {
            id: new Date().getTime().toString(),
            email: email,
            password: password,
            loggedIn: true
        }
    }
}

export const signup = (name , Email , Password , dob , siggnedup) => {
    return {
        type: "SIGN_UP",
        payload:{
            id: new Date().getTime().toString(),
            name:name,
            Email:Email,
            Password:Password,
            dob:dob,
            siggnedup: siggnedup
        }
    }
}
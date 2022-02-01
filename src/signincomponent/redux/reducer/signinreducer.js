const initialData = {
    list: []
}

const signinreducer = (state = initialData, action) => {
    switch (action.type) {
        case "LOG_IN":
            const { id, email, password } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list, {
                        id: id,
                        email: email,
                        password: password,
                        loggedIn: true
                    }
                ]
            }
            case "SIGN_UP":
                const { name , Email , Password , dob} = action.payload;
                return {
                    ...state,
                    list: [
                        ...state.list, {
                            name:name,
                            Email:Email,
                            Password:Password,
                            dob:dob,
                            signUp:true
                        }
                    ]
                }

        default: return state
    }
};

export default signinreducer;

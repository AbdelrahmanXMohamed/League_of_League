let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).username
    : "";
let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";
let email = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).email
    : "";


export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null,
    email: "" || email
};

export const AuthReducer = (initialState, action) => {
    console.log(action, initialState)
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.username
                , email: action.payload.email,
                token: action.payload.token,
                loading: false
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: ""
            };

        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
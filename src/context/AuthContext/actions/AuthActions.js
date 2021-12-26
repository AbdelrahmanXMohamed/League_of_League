import axios from "axios";
const ROOT_URL = 'http://127.0.0.1:5000/auth/';
export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: loginPayload
    };
    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await axios({
            url: `${ROOT_URL}login/`
            ,
            ...requestOptions
        });
        let data = response.data;
        if (data.email) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data
        }
        console.log(data)
        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error.response.data.message });
        return error.response.data.message
    }
}

export function logout(dispatch) {

    const requestOptions = {
        method: "get",
        headers: { 'Authorization': JSON.parse(localStorage.getItem('currentUser')).token }
    }
    axios({
        url: `http://127.0.0.1:5000/auth/logout/`
        ,
        ...requestOptions
    }).then(data => {
        localStorage.removeItem('currentUser');
        dispatch({ type: 'LOGOUT' })
        return data
    }
    ).catch(error => dispatch({ type: 'LOGIN_ERROR', error: error.response.data }));


}

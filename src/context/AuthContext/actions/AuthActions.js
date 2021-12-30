import axiosInstance from "../../../utilities/axios";
export async function loginUser(dispatch, loginPayload) {
    console.log(loginPayload)
    const requestOptions = {
        method: 'post',
        data: loginPayload
    };
    try {
        if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
        }
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await axiosInstance('')({
            url: `auth/login/`
            ,
            ...requestOptions
        });
        console.log(response)
        let data = response.data;
        if (data.data.email) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data.data });
            localStorage.setItem('currentUser', JSON.stringify(data.data));
            localStorage.setItem('expires_in', JSON.stringify(data.expires))
            return data.data
        }

        // dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return
    } catch (error) {
        if (error.response.statusText === 'Unauthorized') {
            localStorage.removeItem('currentUser')
            localStorage.removeItem('expires_in')
            dispatch({ type: 'UNAUTHORIZED' })

        }
        //dispatch({ type: 'LOGIN_ERROR', error: error.response.data.message });
        return error.response.data.message
    }
}

export function logout(dispatch) {

    axiosInstance('Token ' + JSON.parse(localStorage.getItem('currentUser')).token)({
        url: `auth/logout/`
        ,
        method: 'get'
    }).then(data => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('expires_in')

        dispatch({ type: 'LOGOUT' })
        return data
    }
    ).catch(error => {
        console.log(error.response)
        if (error.response.statusText === 'Unauthorized') {
            localStorage.removeItem('currentUser')
            localStorage.removeItem('expires_in')
            dispatch({ type: 'UNAUTHORIZED' })

        }
        dispatch({ type: 'LOGIN_ERROR', error: error.response.data })
    });


}

// export function invalidToken(dispatch) {
//     axiosInstance({
//         url: `auth/valid-login/`
//         ,
//         method: 'get',

//         headers: { 'Authorization': localStorage.getItem('currentUser') ? 'Token ' + JSON.parse(localStorage.getItem('currentUser')).token : '' }

//     }).then(response => response).catch(err => {
//         localStorage.removeItem('currentUser')
//         dispatch({ type: 'INVAILD_TOKEN' })
//     }
//     )
//}
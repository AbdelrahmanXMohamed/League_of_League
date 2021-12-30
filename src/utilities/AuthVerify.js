import { withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuthDispatch, logout } from "../context/AuthContext/AuthIndex";

export default withRouter(function AuthVerify(props) {

    const dispatch = useAuthDispatch()
    useEffect(() => {
        props.history.listen(() => {

            if (localStorage.getItem('expires_in') && !(localStorage.getItem('expires_in') - Math.floor(Date.now() / 1000) >= 0)) {
                logout(dispatch)
            }
        })
    }, [dispatch, props.history])

    return <div></div>

})
// class AuthVerify extends Component {
//     constructor(props) {
//         super(props);

//         props.history.listen(() => {
//             console.log(props)
//         });
//     }

//     render() {
//         return <div></div>;
//     }
// }

// export default withRouter(AuthVerify);
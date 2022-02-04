import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../../redux/action/users.action"

const Login = () => {
    const { user } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [loginData, setLogin] = useState({
        userName: "ADMIN",
        password: "ADMIN"
    })

    const ValidateUser = () => {
        let loggedUser = user.users.filter(res => res.userName === loginData.userName && res.password === loginData.password);
        console.log(loggedUser)
        if (loggedUser.length > 0) {
            dispatch(userLogin(loggedUser[0]));
        }

    }
    return (
        <div>Login
            {JSON.stringify(user)}
            <button onClick={ValidateUser}>Login</button>
        </div>
    )
}

export default Login
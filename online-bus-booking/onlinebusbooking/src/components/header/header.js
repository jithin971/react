import { useDispatch } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { userLogout } from "../../redux/action/users.action"

const Header = () => {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(userLogout());
    }
    return (
        <>
            <div> <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/register">register</Link>
                </li>
                <li>
                    <Link to="/addbus">addbus</Link>
                </li>
                <li>
                    <Link to="/viewbus">viewbus</Link>
                </li>
                <li>
                    <Link to="/cancel-booking">cancelTicket</Link>
                </li>
                <li onClick={logout}>
                    logout
                </li>

            </ul></div>
            <Outlet />
        </>
    )
}

export default Header
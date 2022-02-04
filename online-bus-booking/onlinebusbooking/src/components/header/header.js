import { Link, Outlet } from "react-router-dom"

const Header = () => {
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

            </ul></div>
            <Outlet />
        </>
    )
}

export default Header
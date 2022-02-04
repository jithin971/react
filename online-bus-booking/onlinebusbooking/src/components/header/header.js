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
                {/* <li>
                    <Link to="/passengerlist">passengerlist</Link>
                </li>
                <li>
                    <Link to="/payment-success">payment</Link>
                </li>
                <li>
                    <Link to="/cancel-booking">cancel</Link>
                </li> */}

            </ul></div>
            <Outlet />
        </>
    )
}

export default Header
import { Link, Outlet,NavLink } from "react-router-dom";
import './about.css'

const About = () => {

    return (
        <>
            <ul>
                <li><NavLink className="nonactive" activeclassname="active"  to="/about/">Company</NavLink></li>
                <li><NavLink className="nonactive" activeclassname="active" to="members">Members</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to="user/jituhin">User</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}

export default About
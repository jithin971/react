import { Link, Outlet,NavLink } from "react-router-dom";
import './about.css'

const About = () => {

    return (
        <>
            <ul>
                <li><NavLink activeClassName="active" to="/about">Company</NavLink></li>
                <li><NavLink activeClassName="active" to="members">Members</NavLink></li>
                <li><NavLink activeClassName="active" to="user">User</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}

export default About
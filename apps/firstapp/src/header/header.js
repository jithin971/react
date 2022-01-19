import { Link } from "react-router-dom"
import './header.css'

const Header = () => {

    const headerStyle={
        display:"flex",
        listStyle:"none"
    }
    const listStyle={
        marginRight: "10px"
    }

    return (<div>
        <ul className="header">
            <li style={listStyle}><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
        </ul>
    </div>)
}


export default Header
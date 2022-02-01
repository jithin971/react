import { Link, Outlet } from "react-router-dom"

const ReduxEx=()=>{

    return(
        <div>
      <ul>
          <li>
              <Link to="/redux">Add Todo</Link>
          </li>
          <li>
              <Link to="ViewTodo">View Todo</Link>
          </li>
      </ul>

            <Outlet/>
        </div>
    )
}
export default ReduxEx
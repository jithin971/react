import { Link, Outlet } from "react-router-dom"

const FormValidation=()=>{

    return(
        <div>
      <ul>
          <li>
              <Link to="/form">basic form</Link>
          </li>
          <li>
              <Link to="reacthook">reacthook</Link>
          </li>
      </ul>

            <Outlet/>
        </div>
    )
}
export default FormValidation
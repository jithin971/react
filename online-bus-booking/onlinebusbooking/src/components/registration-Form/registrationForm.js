import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action/users.action";

const RegistrationForm = () => {
    const dispatch = useDispatch()
    const [userData, setUser] = useState({
        name: "",
        userName: "",
        password:""
    })
    const setData=(e)=>{
        setUser({...userData,[e.target.name]:e.target.value})
    }
    const handleComplete = () => {
        let {name,userName,password}=userData
        dispatch(addUser({ name: name, userName: userName, password: password }));
    };
    return (
        <div>
            Name: <input name="name" onChange={setData} /><br />
            User Name: <input name="userName" onChange={setData} /><br />
            Password : <input name="password" onChange={setData} /><br />
            <button onClick={handleComplete}>Save Data</button>
        </div>
    )
}

export default RegistrationForm
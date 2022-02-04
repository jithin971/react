import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action/users.action";

const RegistrationForm=()=>{
    const dispatch = useDispatch()
    const handleComplete = () => {
        dispatch(addUser({name:"jithin",userName:"a",password:"a"}));
    };
    return(
        <div>

            <button onClick={handleComplete}>Save Data</button>
        </div>
    )
}

export default RegistrationForm
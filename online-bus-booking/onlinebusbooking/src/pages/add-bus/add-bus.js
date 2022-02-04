import { useDispatch } from "react-redux";
import { addBus } from "../../redux/action/bus.action";

const AddBus = () => {
    const dispatch = useDispatch()
    const handleComplete = () => {
        dispatch(addBus({ regNo: "KL-13", name: "Golden",
         seat: [{ no: "A1", userId: "" },{ no: "A2", userId: "" },{ no: "A3", userId: "" }] }));
    };
    return (
        <div>

            <button onClick={handleComplete}>Save Data</button>
        </div>
    )
}

export default AddBus
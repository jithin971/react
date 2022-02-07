import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBus } from "../../redux/action/bus.action";

const AddBus = () => {
    const dispatch = useDispatch();
    const [busDetails, setBusDetails] = useState({
        regNo: "",
        name: ""
    })
    const setData = (e) => {
        setBusDetails({ ...busDetails, [e.target.name]: e.target.value })
    }
    const handleComplete = () => {
        let { regNo, name } = busDetails
        dispatch(addBus({
            regNo: regNo, name: name,
            seat: [{ no: "A1", userId: "" }, { no: "A2", userId: "" }, { no: "A3", userId: "" }]
        }));
    };
    return (
        <div>
            RegNo: <input name="regNo" onChange={setData} /><br />
            Bus Name: <input name="name" onChange={setData} /><br />
            <button onClick={handleComplete}>Save Data</button>
        </div>
    )
}

export default AddBus
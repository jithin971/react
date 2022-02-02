import { TextField } from "@mui/material";
import { useState } from "react"

const BasicFormValidation = () => {

    const [employee, setEmployee] = useState({});
    const [error, setError] = useState({})

    const handileChanges = (e) => {
        const id = e.target.name;
        const value = e.target.value;
        setError({})
        if (id == "age" && !Number(value)) {
            setError({ ...error, [id]: "Age should be Number" })
        }
        if(id=="userName" && !(/^[A-za-z]+$/.test(value))){
            setError({...error,[id]:"Name allows only alphabet"})
        }
        setEmployee({ ...employee, [id]: value })
    }
    const saveData = (e) => {

    }
    return (
        <form onSubmit={saveData}>
            <div>
                {/* <label>Enter Name
                    <input type="text" name="userName" onChange={handileChanges} />
                </label>
                {error?.userName} */}
                <TextField
                    error={error?.userName}
                    id="standard-error-helper-text"
                    label="userName"
                    helperText={error?.userName}
                    variant="standard"
                    name="userName" 
                    onChange={handileChanges}
                />
            </div>
            <div>
                <label>Enter Age
                    <input type="text" name="age" onChange={handileChanges} />
                </label>
                {error?.age}
            </div>
            <input type="submit" />
        </form>
    )
}
export default BasicFormValidation
import { Alert, AlertTitle, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { savehttpData } from "../../services/httpEx";

const HttpPost = () => {

    const router = useNavigate();
    const [sussess, setSuccess] = useState(false);
    let [formData, setFormData] = useState({
        userid: "",
        title: "",
        completed: false
    })
    const saveData = () => {
        savehttpData(formData).then(
            res => {
                if (res.data.id) {
                    router('/http')
                }
            }
        )
    }

    const updateData = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/1", {
            "title": "updated text",
            "completed": true
        }).then(res => {
            console.log(res)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        }).catch((err) => {
            console.log("err=>", err)
        })
    }

    const deleteData = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            console.log(res)
        })
    }

    const setData=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <div>

            <form>
            <TextField id="standard-basic" label="UserId" variant="standard" name="userid" onChange={setData} /><br/>
            <TextField id="standard-basic" label="title" variant="standard" name="title" onChange={setData}/>
            </form>
            <button onClick={saveData}>Save Data</button>
            <button onClick={updateData}>Update Data</button>
            <button onClick={() => deleteData(2)}>Delete Data</button>
            {sussess ? <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
            </Alert> : <></>}

        </div>
    )
}

export default HttpPost
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/action/todo.action"

const AddTodo = () => {

    const [todoItem, SetTodoItem] = useState("")
    const dispatch = useDispatch()
    const SetData = (e) => {
        SetTodoItem(e.target.value)
    }
    const SaveData = () => {
        dispatch(addTodo(todoItem))
    }
    return (
        <div>
            Add List Item:<input type="text" onChange={SetData} /><br />
            <button onClick={SaveData}>Save Item</button>
            <br />
            {todoItem}
        </div>
    )
}
export default AddTodo
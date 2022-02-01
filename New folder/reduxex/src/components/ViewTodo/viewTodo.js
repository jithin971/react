import { useDispatch, useSelector } from "react-redux"
import { toggleToDo } from "../../redux/action/todo.action";

const Viewtodo = () => {
    const todo = useSelector((state) => state)
    const dispatch = useDispatch();
    const completed = (id) => {
        dispatch(toggleToDo(id))
    }
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
                {
                    todo.map((res) => (
                        <tr>
                            <td>{res.id}</td>
                            <td>{res.text}</td>
                            <td>{res.completed ? JSON.stringify(res.completed) : <button onClick={() => { completed(res.id) }}>Completed</button>}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Viewtodo
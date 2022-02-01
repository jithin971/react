
export const ADD_TODO = "ADDTODO"
export const TOGGLE_TODO = "TOGGLETODO"
let toDoID = 0
export const addTodo = (text) => {

    return {
        type: ADD_TODO,
        payload: { id: ++toDoID, text, completed: false }
    }
}

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}
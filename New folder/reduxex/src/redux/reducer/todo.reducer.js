import { ADD_TODO, TOGGLE_TODO } from "../action/todo.action"

export const todoReducer = (state = [], action) => {
    let { type, payload } = action

    switch (type) {
        case ADD_TODO:
            return [...state, payload];
        case TOGGLE_TODO:
            return state.map((item) => {
                return item.id === payload ? { ...item, completed: !item.completed } : item
            })
        default:
            return state
    }
}
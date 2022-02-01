import { createStore } from "redux"
import { todoReducer } from "../reducer/todo.reducer"
export const store = createStore(todoReducer)
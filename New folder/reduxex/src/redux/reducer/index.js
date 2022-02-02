
import { combineReducers } from "redux"
import { todoReducer } from "./todo.reducer"
import { tutorialReducer } from "./tutorial.reducer"
export const rootReducer = combineReducers({
    todo: todoReducer,
    tutorial: tutorialReducer
})
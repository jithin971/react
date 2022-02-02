import { ADD_TODO } from "./todo.action";
export const SETTUTORIALDATA="SETTUTORIALDATA"
export const setTodo = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: ADD_TODO,
                payload: { id: 10, text: "from Tutorial", completed: false }
            })
        }, 2000);
    }
}
export const getTutorial = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: SETTUTORIALDATA,
                payload: [{id:0,name:"Jithin"},{id:1,name:"Rahul"}]
            })
        }, 2000);
    }
}
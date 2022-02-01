
const redux = require("redux")
const ADD_TODO = "ADDTODO";
const TOGGLE_TODO = "TOGGLETODO"
const ODDEVEN="ODDOREVEN"
const REV="REVERSE"
//Action
let id = 0
const addTODO = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++id,
            text: text,
            completed: false
        }
    }
}

const toggleTodo = (id) => {

    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

const oddOREven = (num) => {

    return {
        type: ODDEVEN,
        payload: num
    }
}

const reverseString = (value) => {
    return {
        type: REV,
        payload: value
    }
}

initoddEven = {
    oddOrEven: "",
    reverseString: ""
}
const oddOREvenReducer = (state = initoddEven, action) => {
    switch (action.type) {
        case ODDEVEN:
            if (action.payload % 2 === 0) {
                return { ...state, oddOrEven: "Even" }
            }
            else return { ...state, oddOrEven: "ODD" }
        case REV:
            return { ...state, reverseString: action.payload.split("").reverse().join("") }
        default:
            return state
    }

}

const InitState = {
    todos: []
}
const todoReducer = (state = InitState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map((item) => {
                    return item.id === action.payload ? { ...item, completed: !item.completed } : item
                })
            }

        default:
            return state

    }

}

const rootRed = redux.combineReducers({
    oddOREvenReducer: oddOREvenReducer,
    todoReducer: todoReducer
})

const store = redux.createStore(rootRed)

const unscr = store.subscribe(() => {
    console.log(JSON.stringify(store.getState()))
})

// store.dispatch(addTODO("Task1"))
// store.dispatch(addTODO("Task2"))
// store.dispatch(toggleTodo(1))
// store.dispatch(toggleTodo(2))
// store.dispatch(oddOREven(3))
store.dispatch(oddOREven(10))
store.dispatch(reverseString("JITHIN"))
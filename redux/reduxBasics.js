const redux = require("redux")

const INC = "INCREMENT"
const DEC = "DECREMENT"
const ADD = "ADD"
const SUB = "SUB"
//Action
//counter
const incFun = (value=0) => {
    return {
        type: INC,
        payload: value
    }
}

const decFun = () => {
    return {
        type: DEC,
        payload: 2
    }
}


//calculator

const addFun = (a=0, b=0) => {
    return {
        type: ADD,
        payload: {
            first: a,
            second: b
        }
    }
}
const subFun = (a, b) => {
    return {
        type: SUB,
        payload: {
            first: a,
            second: b
        }
    }
}


//reducer

const reducerfn = (state = 0, action) => {

    switch (action.type) {
        case INC:
            return state + action.payload;
        case DEC:
            return state - action.payload
        default:
           return state

    }
}

const reducerCalculator = (state = 0, action) => {

    switch (action.type) {
        case ADD:
            return  action.payload.first + action.payload.second;
        default:
            return state
    }
}

const reducerCalculator2 = (state = 10, action) => {

    switch (action.type) {
        case SUB:
            return  action.payload.first - action.payload.second;
        default:
            return state
    }
}


//compine reducers

const rootReducer=redux.combineReducers({
    calculator:reducerCalculator,
    reducerfn:reducerfn

})

//store

const store = redux.createStore(rootReducer)

const sub = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incFun(3))
store.dispatch(incFun())
// store.dispatch(incFun())
// store.dispatch(decFun())
// store.dispatch(decFun())
// store.dispatch(incFun(10))
// store.dispatch(incFun(5))
// store.dispatch(decFun())
// store.dispatch({
//     type: DEC,
//     payload:1
// })
// let add = redux.bindActionCreators(incFun, store.dispatch)
// let dec = redux.bindActionCreators(decFun, store.dispatch)
// add(50)
// add(10)
// dec()

store.dispatch(addFun(5,5))

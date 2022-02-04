import { ADD_USER, USER_LOGIN } from "../action/users.action";

const initValue={
    users:[{id:0,userName:"ADMIN",password:"ADMIN"}],
    loggedUser:{}
}
export const userReducer = (state = initValue, action) => {

    let { type, payload } = action
    switch (type) {
        case ADD_USER:
            return {...state,users:[...state.users, payload]};
        case USER_LOGIN:
            return  {...state,loggedUser:payload};
        default:
            return state
    }

}
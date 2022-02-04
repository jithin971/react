export const ADD_USER = 'ADD_USER';
export const USER_LOGIN = 'USER_LOGIN'

let userId = 0
export const addUser = (userData) => {
    userData.userId=++userId
    return {
        type: ADD_USER,
        payload: userData
    }
}
export const userLogin = (userData) => {
    return {
        type: USER_LOGIN,
        payload: userData
    }
}

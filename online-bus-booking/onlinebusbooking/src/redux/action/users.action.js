export const ADD_USER = 'ADD_USER';
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
let userId = 0
export const addUser = (userData) => {
    userData.userId=(++userId).toString()
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
export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}

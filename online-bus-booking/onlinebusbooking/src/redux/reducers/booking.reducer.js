import { ADD_BOOKING } from "../action/booking.action";


export const bookingReducer = (state = [], action) => {

    let { type, payload } = action
    switch (type) {
        case ADD_BOOKING:
            return [...state, payload];
        default:
            return state
    }

}
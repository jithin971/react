import { ADD_TICKET, SELECTED_SEATS } from "../action/booking.action";

const initState = {
    selectedSeats: [],
    ticket: []
}
export const bookingReducer = (state = initState, action) => {

    let { type, payload } = action
    switch (type) {
        case ADD_TICKET:
            return { ...state, ticket: [...state.ticket, payload] };
        case SELECTED_SEATS:
            return { ...state, selectedSeats: payload }
        default:
            return state
    }

}
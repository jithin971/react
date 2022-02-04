import { ADD_TICKET, CANCEL_TICKET, SELECTED_SEATS } from "../action/booking.action";

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
        case CANCEL_TICKET:
            let index=state.ticket.findIndex(dta=>dta.ticketId==payload)
            return { ...state, ticket:[...state.ticket.slice(0, index),
                ...state.ticket.slice(index + 1)] }
        default:
            return state
    }

}
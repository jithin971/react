export const ADD_TICKET = 'ADD_TICKET';
export const CANCEL_TICKET = "CANCEL_TICKET"
export const SELECTED_SEATS = "SELECTED_SEATS"
var ticketId = 0
export const addTicket = (ticketDetails) => {
    ticketDetails.ticketId = ++ticketId;
    return {
        type: ADD_TICKET,
        payload: ticketDetails
    }
}
export const selectedSeats = (seatDetails) => {

    return {
        type: SELECTED_SEATS,
        payload: seatDetails
    }
}
export const cancelTicket = (id) => {

    return {
        type: CANCEL_TICKET,
        payload: id
    }
}
export const ADD_BOOKING = 'BOOKING';
export const CANCEL_BOOKING = "CANCEL_BOOKING"
export const booking = (bookingDetails) => {

    return {
        type: ADD_BOOKING,
        payload: bookingDetails
    }
}
export const cancelBooking = (id) => {

    return {
        type: CANCEL_BOOKING,
        payload: id
    }
}
export const ADD_BUS = 'ADD_BUS';
export const SEAT_BOOKING = 'SEAT_BOOKING';
export const CANCEL_SEAT_BOOKING = "CANCEL_SEAT_BOOKING"

var busId=0
export const addBus = (busDetails) => {
    busDetails.busId=++busId;
    return {
        type: ADD_BUS,
        payload: busDetails
    }
}


export const seatBooking = (bookingDetails) => {

    return {
        type: SEAT_BOOKING,
        payload: bookingDetails
    }
}

export const cancelBooking = (cancelDetails) => {

    return {
        type: CANCEL_SEAT_BOOKING,
        payload: cancelDetails
    }
}
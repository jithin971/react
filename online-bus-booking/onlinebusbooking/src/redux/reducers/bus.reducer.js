import { ADD_BUS, SEAT_BOOKING } from "../action/bus.action";


export const busReduser = (state = [], action) => {

    let { type, payload } = action
    switch (type) {
        case ADD_BUS:
            return [...state, payload];
        case SEAT_BOOKING:
           return state.map((bus) => {
            return bus.busId === payload.busId?{...bus,seat: bus.seat.map(seat=>{
debugger
                 return  seat.no===payload.seatID?{...seat,userId:payload.userID.toString()}:seat
                })}
                :bus
        })
        default:
            return state
    }

}
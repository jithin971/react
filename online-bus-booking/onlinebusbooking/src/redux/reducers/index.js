import { combineReducers } from "redux";
import { bookingReducer } from "./booking.reducer";
import { busReduser } from "./bus.reducer";
import { userReducer } from "./user.reducer";


export const rootReduser=combineReducers({
    user:userReducer,
    bus:busReduser,
    booking:bookingReducer
})
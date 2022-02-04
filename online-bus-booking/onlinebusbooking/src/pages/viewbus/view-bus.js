import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { selectedSeats } from "../../redux/action/booking.action";
import { seatBooking } from "../../redux/action/bus.action"

const ViewBus = () => {
    let navigate = useNavigate();
    const { bus } = useSelector((state) => state)
    const { user } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [bookedSeats, setbookedSeats] = useState([])

    const selectSeat = (busId, seatID) => {
        let userID = user?.loggedUser?.id
        dispatch(seatBooking({ busId, seatID, userID }));
        setbookedSeats([...bookedSeats,seatID])
    }

    const Bookticket=()=>{
        dispatch(selectedSeats(bookedSeats));
        navigate('/passengerlist')
    }
    return (
        <>
            <div>{JSON.stringify(user.loggedUser)}</div>
            <div>{JSON.stringify(bus)}<button onClick={() => { selectSeat(1, 'A1') }}>Seat 1</button>
                <button onClick={() => { selectSeat(1, 'A2') }}>Seat 2</button></div><br />
            <button onClick={Bookticket}>Book Seats</button>
        </>
    )
}

export default ViewBus
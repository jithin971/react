import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { selectedSeats } from "../../redux/action/booking.action";
import { seatBooking } from "../../redux/action/bus.action"

const ViewBus = () => {
    let navigate = useNavigate();
    const { bus } = useSelector((state) => state)
    const { user } = useSelector((state) => state)
    const { booking } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [bookedSeats, setbookedSeats] = useState([])

    const selectSeat = (busId, seatID, bookingId) => {
        let userID = bookingId.toString() ? "" : user?.loggedUser?.id
        dispatch(seatBooking({ busId, seatID, userID }));
       if(bookingId.toString()){
          let index=bookedSeats.findIndex(dta=>dta.busId==busId&& dta.seatID==seatID)
        setbookedSeats([
            ...bookedSeats.slice(0, index),
            ...bookedSeats.slice(index + 1)
          ]);
        

       }else{
       
        setbookedSeats([...bookedSeats, {busId,seatID}])
       }

    }

    const Bookticket = () => {
        dispatch(selectedSeats(bookedSeats));
        navigate('/passengerlist')
    }
    useEffect(()=>{
        setbookedSeats(booking.selectedSeats)
    },[])
    return (
        <>
            <div>{JSON.stringify(user.loggedUser)}</div>
            <div>{JSON.stringify(bus)}</div><br />

            {bus.map((res) => (
                <div>
                    <div>
                        {res.regNo}--{res.name}
                    </div>

                    <div>
                        <ul>
                            {
                                res.seat.map(result => (
                                    <li>  <button onClick={() => { selectSeat(res.busId, result.no, result.userId) }}>{result.no}</button></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            ))}
            <button onClick={Bookticket}>Book Seats</button>
        </>
    )
}

export default ViewBus
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cancelTicket } from "../../redux/action/booking.action"
import { seatBooking } from "../../redux/action/bus.action"

const CancelBooking = () => {
    const { user } = useSelector((state) => state)
    const { booking } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [myTicket, setMyTicket] = useState([])
    useEffect(() => {
        setMyTicket(booking.ticket.filter(res => res.userId === user.loggedUser.userId))
    }, [booking.ticket])

    const onCancelTicket = (busId, seatID, ticketId) => {
        let userID = user?.loggedUser?.userId
        dispatch(seatBooking({ busId, seatID, userID: "" }));
        debugger
        dispatch(cancelTicket(ticketId));
    }
    return (
        <div>
            {

                myTicket.map(res => (
                    <div>
                        {res.busId}={res.seatId}-<button onClick={() => { onCancelTicket(res.busId, res.seatId, res.ticketId) }}>Cancel</button>
                    </div>
                ))
            }</div>
    )
}

export default CancelBooking
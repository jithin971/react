import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addTicket } from "../../redux/action/booking.action";

const PassangerList=()=>{
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { user } = useSelector((state) => state)
    const { booking } = useSelector((state) => state)


    const handleComplete = () => {
        let userID = user?.loggedUser?.id
        booking.selectedSeats.map(res=>{
            dispatch(addTicket({userId: userID, busId: res.busId, seatId: res.seatID, name: "Abin", age: 30, status: "booked" }));
        })

        navigate('/payment-success')
    };

    return(
        <div>
            {JSON.stringify(booking.selectedSeats)}
            <button onClick={handleComplete}>Save Data</button>
        </div>
    )
}

export default PassangerList
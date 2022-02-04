import { useDispatch, useSelector } from "react-redux"
import { seatBooking } from "../../redux/action/bus.action"

const ViewBus = () => {
    const { bus } = useSelector((state) => state)
    const { user } = useSelector((state) => state)
    const dispatch = useDispatch()
    const selectSeat = (busId, seatID) => {
        let userID=user?.loggedUser?.id
        dispatch(seatBooking({busId,seatID,userID}));
    }
    return (
        <>
            <div>{JSON.stringify(user.loggedUser)}</div>
            <div>{JSON.stringify(bus)}<button onClick={()=>{selectSeat(1, 'A1')}}>Seat 1</button>
                <button onClick={() => { selectSeat(1, 'A2') }}>Seat 2</button></div>
        </>
    )
}

export default ViewBus
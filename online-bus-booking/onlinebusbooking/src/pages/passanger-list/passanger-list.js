import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addTicket, selectedSeats } from "../../redux/action/booking.action";

const PassangerList = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { user } = useSelector((state) => state)
    const { booking } = useSelector((state) => state)
    const [userData, setUser] = useState([])

    const handleComplete = () => {
        let userID = user?.loggedUser?.userId
        booking.selectedSeats.map((res,key) => {
            dispatch(addTicket({ userId: userID, busId: res.busId, seatId: res.seatID, name: userData[key].name, age: userData[key].age, status: "booked" }));
        })
        dispatch(selectedSeats([]));
        navigate('/payment-success')
    };

    const setData = (e,key) => {
        debugger    
        let markers = [ ...userData ];
        markers[key] = {...markers[key], [e.target.name]: e.target.value };
        setUser(markers);
    }
    useEffect(() => {
        booking.selectedSeats.map(res => {
            setUser([...userData,{
                name: "",
                age: ""
            }])
        })

    }, [])
    return (
        <div>
            {JSON.stringify(booking.selectedSeats)}<br />
            {JSON.stringify(userData)}<br />
            {booking.selectedSeats.map((res, key) => (
                <>
                <br/>
                {res.busId}-{res.seatID}<br/>
                    Name: <input name="name" onChange={(e) => { setData(e,key) }} /><br />
                    Age: <input name="age" onChange={(e) => { setData(e,key) }} /><br />
                    <br/>
                </>
            ))}
            <button onClick={handleComplete}>Save Data</button>
        </div>
    )
}

export default PassangerList
import Message from '../message/message'
const CarType = (props) => {
    if (props.noOfGear == 1) {
        return <Message text="Car" />
    }
    else if (props.noOfGear == 2) {
        return <Message text="Jeep" />
    }
    else
        return <Message text="JCB" />
}

export default CarType
import CarType from "../TypeOfCar/typeOfCar"

const Car = (props) => {

    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Type</th>
                </tr>
                {props.cars.map(res => (
                    <tr>
                        <td>{res.model}</td>
                        <td><CarType noOfGear={res.noOfGear} /></td>
                    </tr>
                ))

                }

            </table>
        </div>
    )
}

export default Car
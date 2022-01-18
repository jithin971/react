import { useEffect, useState } from "react"

const AppHooks = () => {

    // const [count, setCount] = useState(0);
    // const [name, setName] = useState("jithin");
    // const [isFlag, setFlag] = useState(true);
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Ecosport",
        color: "red"
    })

    const [searchText, setSearch] = useState("")
    const [carCollection, setCollection] = useState([])
    const [searchedCars, setSearchedCars] = useState([])
    // const [employee, setEmployee] = useState([{ name: "jithin", age: 20 }])

    // let setCounter = () => {
    //     setCount(count + 1)

    //     setName("Rahul")
    //     setFlag(false)
    //     setCar({ ...car, color: "green" })
    //     setEmployee([...employee, { name: "Rahul", age: 30 }])
    // }
    let handileChanges = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }
    let saveData = () => {
        setCollection([...carCollection, car])
    }
    let setSearchText = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        // console.log()
        debugger
        if(searchText==""){
            let cars=carCollection
            setSearchedCars(cars)
        }
        else{
            setSearchedCars(carCollection.filter(res => res.brand.includes(searchText)))
        }
       
    }, [searchText])

    return (
        <>
            Brand:<input type="text" name="brand" onChange={handileChanges} /><br />
            Model:<input type="text" name="model" onChange={handileChanges} />
            <div><button onClick={saveData}>Save</button></div>

            <div>
                Search:<input type="text" onChange={setSearchText} />
            </div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                </tr>
                {
                    searchedCars.map(res => (
                        <tr>
                            <td>{res.brand}</td>
                            <td>{res.model}</td>
                        </tr>
                    ))
                }
            </table>
        </>

    )
}

export default AppHooks
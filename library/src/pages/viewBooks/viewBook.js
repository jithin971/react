import { Outlet, useNavigate,generatePath } from "react-router-dom"

const ViewBook = () => {

    let navigte = useNavigate();
    let container = {
        display: "flex"
    }
    let bookid = [101, 102, 103]

    let loadDetails = (id) => {
        // navigte("details")
        navigte(generatePath("details/:id",{id:id}))
    }
    return (
        <div style={container}>
            <div>{bookid.map(res => (
                <div onClick={()=>loadDetails(res)}>{res}</div>
            ))}</div>

            <div><Outlet /></div>
        </div>
    )
}

export default ViewBook
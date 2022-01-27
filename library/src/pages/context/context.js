import { createContext, useState } from "react"
import Child1 from "./childrens"

export const UserContext = createContext();
const UseContext = () => {

    const [myname, setName] = useState("jithin")

    return (
        <div>
            Parent Components:{myname}
            <UserContext.Provider value={myname}>
                <Child1 user={myname} />
            </UserContext.Provider>



        </div>
    )
}

export default UseContext
import { useContext } from "react"
import { UserContext } from "./context"

const Child1=(props)=>{
    return (
        <div>
            child 1:{props.user}
            <Child2 user={props.user}></Child2></div>
    )
}

const Child2=()=>{
    return (
        <div>
            child 2 :
            <Child3></Child3></div>
    )
}
const Child3=()=>{

    const user=useContext(UserContext)
    return (
        <div>child3 :{user}</div>
    )
}

export default Child1
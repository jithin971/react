import Message from "../message/message"

const Prime = (props) => <div>{props.number % 2 === 0 ? 
<Message text="Its Even Number" /> : 
<Message text="Its Odd Number" />}</div>
export default Prime
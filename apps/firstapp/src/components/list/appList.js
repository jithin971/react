import Message from "../message/message"

const AppList=(props)=><div>

    <ul>
        {
            props.students.map(res=>(
                <li><Message text={res.name}/></li>
            ))
        }
      
    </ul>
</div>
export default AppList
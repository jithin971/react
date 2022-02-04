import MessageText from "../message/messageText"
import React, { useState } from "react"
import { Button, Container, DisbaledButton, Table, Title } from "./style";
const TravelTable = () => {
    const[todolist, settodoList]   = useState([
        {
            title: "Visit Trivandrum",
            completed: true
        },
        {
            title: "Visit Bangalore",
            completed: false
        },
        {
            title: "Visit Kochi",
            completed: false
        }
    ]);
    const[todolists, setNewToDoList] = useState([...todolist]);
    let changeStatus = (key) => e =>{

        let temp_state = [...todolists];
        //console.log(temp_state)
        let temp_element = {...temp_state[key]};
        //console.log(temp_element)
        temp_element.completed = true;
        temp_state[key] = temp_element;
        setNewToDoList(temp_state);
    }
    
    
    return(
        <div>
            <Container>
                <Title>Todo List</Title>
                <Table>
                    <tr>
                        <th>Title</th>
                        <th>Visited</th>
                        <th>Action</th>
                    </tr>
                    {
                        todolists.map((res,key) =>(
                            <tr>
                                <td>{res.title}</td>
                                <td>
                                    {
                                        res.completed ? <MessageText text="Visited" /> : 
                                        <MessageText text="Not Visited" />
                                    }
                                </td>
                                <td>
                                    {
                                        res.completed ? <DisbaledButton type="button">Completed</DisbaledButton> :
                                        <Button onClick={changeStatus(key)} type="button">Complete</Button>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </Table>
            </Container>
        </div>
    )
}
export default TravelTable





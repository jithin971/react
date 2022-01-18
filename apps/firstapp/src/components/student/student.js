import React from "react"
import AppList from "../list/appList";
import AppTable from "../table/appTable";

class Student extends React.Component {

    name = "jithin";
    age = 10;
    studentDetails = {
        name: "jithin",
        age: 20
    }
    students = [
        {
            name: "jithin",
            age: 20,
        },
        {
            name: "Abin",
            age: 30
        },
        {
            name: "sabu",
            age: 40
        }
    ]


    getMyName = () => "jithin"
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.tableFlag ? <AppTable students={this.students} /> : <AppList students={this.students} />}

            </div>


        )
    }
}

export default Student
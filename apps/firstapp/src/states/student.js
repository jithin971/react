import { tab } from '@testing-library/user-event/dist/tab'
import { number } from 'prop-types'
import React from 'react'
class StudentStateEx extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            students: [],
            id: '',
            error:""
        }
    }
    // students = []
    setData = (event) => {
        let id = event.target.name
        let val = event.target.value
        this.setState({error:""})
        if(id==="age" && !Number(val)){
            this.setState({error:"Age Should be Number"})
        }
        else if(id==="name" && !(/^[A-Za-z]+$/.test(val))){
            this.setState({error:"name allows only A to Z and a to z"})
        }
        this.setState({ [id]: val })
    }

    saveData = () => {

        // this.students.push({ name: this.state.name, age: this.state.age })
        // this.setState({ students: this.students })
        this.setState({ students: [...this.state.students, { name: this.state.name, age: this.state.age }] })
        this.resetForm()
    }

    resetForm = () => {
        this.setState({ name: "", age: "", id: "" })
    }

    editData = (key) => {
        let name = this.state.students[key].name;
        let age = this.state.students[key].age;
        this.setState({ name: name, age: age, id: key })
        console.log(key)
    }

    UpdateData = () => {
        let student = this.state.students
        student[this.state.id].name = this.state.name;
        student[this.state.id].age = this.state.age;
        this.setState({ students: student })
        this.resetForm()
    }

    deleteStudent = (id) => {
        let student = this.state.students
        student.splice(id, 1)
        this.setState({ students: student })
    }
    render() {
      let  myStyle={
            color:"red"
        }
        return (
            <div>
                <form>
                    <div>
                        Name:<input type="text" name="name" value={this.state.name} onChange={this.setData} />{this.state.name}
                    </div>
                    <br />
                    <div>
                        Age:<input type="text" name="age" value={this.state.age} onChange={this.setData} />{this.state.age}
                    </div><br />
                    <div style={myStyle}>
                        {this.state.error}
                    </div>
                    <div>{this.state.id}{
                        this.state.id === "" ? <input type="button" value="Save" onClick={this.saveData} /> :
                            <input type="button" value="Update" onClick={this.UpdateData} />
                    }


                    </div>
                </form><br />
                <div>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                        {
                            this.state.students.map((student, key) => (
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td><button onClick={() => { this.editData(key) }}>Edit</button></td>
                                    <td><button onClick={() => { this.deleteStudent(key) }}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>)
    }
}

export default StudentStateEx
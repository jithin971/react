import React from 'react'

class StateEx extends React.Component {


    // counter=0
    constructor() {
        super();
        this.state = {
            counter: 0,
            greetings: "",
            isWelcome: false
        }
    }

    incCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
        console.log(this.state.counter)
    }
    greetings = () => {
        this.setState({ greetings: "Welcome To State" })
        this.setState({isWelcome:true})
    }
    render() {
        return (
            <div>
                {this.state.isWelcome ? <div>{this.state.greetings}</div> : <button onClick={this.greetings}>Greetings</button>}<br />
                <br />
                counter {this.state.counter}<br />
                <button onClick={this.incCounter}>+</button>
            </div>
        )
    }
}

export default StateEx
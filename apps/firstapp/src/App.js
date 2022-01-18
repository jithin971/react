import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Student from './components/student/student';
import Prime from './components/prime/prime';
import Car from './components/car/car';
import PropValidation from './components/propValidate/propvalidate';
import StateEx from './states/stateex/stateEx';
import StudentStateEx from './states/student';
import AppHooks from './states/hooksEx';

function App() {
  let isTable = true
  let age=20
  // let number=20
  let cars=[
    {
      model:"ford",
      color:"red",
      noOfGear:1
    },
    {
      model:"tata",
      color:"blue",
      noOfGear:2
    },
    {
      model:"JCB",
      color:"blue",
      noOfGear:3
    }
  ]

  let arr=[5,6,7]
  return <div className="App" >
    {/* <Student tableFlag={isTable} name="JIthin" age={age}/>
    <Prime number={1}/> */}
    {/* <Car cars={cars}/> */}
    {/* <PropValidation name="Rahul" numArray={arr}/> */}
    {/* <StateEx/> */}
    {/* <StudentStateEx/> */}
    <AppHooks/>
  </div>
    ;
}

export default App;

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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './error/error';
import Header from './header/header';
import Footer from './footer/footer';
import Company from './components/company/company';
import Members from './components/members/members';
import User from './components/user/user';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} >
          <Route index element={<Company/>} />
          <Route  path="members" element={<Members/>} />
          <Route  path="user" element={<User/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

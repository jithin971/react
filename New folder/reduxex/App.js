import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddToDO/addTodo';
import Viewtodo from './components/ViewTodo/viewTodo';
import ReduxEx from './pages/Redux/reduxpage';
import Home from './pages/home/home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import FormValidation from './pages/formValidation/formValidation';
import BasicFormValidation from './components/formValidations/basicForm/basicForm';
import ReactHooksEx from './components/formValidations/react-hook-form/react-hook-form';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/redux">Redux</Link>
          </li>
          <li>
              <Link to="/Form">Form</Link>
          </li>
      </ul>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="redux" element={<ReduxEx />}>
            <Route index element={<AddTodo/>} />
            <Route path="ViewTodo" element={<Viewtodo/>}/>
          </Route>
          <Route path="Form" element={<FormValidation />}>
            <Route index element={<BasicFormValidation/>} />
            <Route path="reacthook" element={<ReactHooksEx/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

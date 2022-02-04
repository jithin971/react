
import './App.css';
import Home from './pages/Home/home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './pages/login/login';
import UserRegistration from './pages/user-registration/user-registration';
import AddBus from './pages/add-bus/add-bus';
import ViewBus from './pages/viewbus/view-bus';
import PassangerList from './pages/passanger-list/passanger-list';
import PaymentSuccess from './pages/pament-success/payment-success';
import CancelBooking from './pages/cancel-booking/cancel-booking';
import Header from './components/header/header';
import { Provider } from 'react-redux';
import { store } from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<UserRegistration />} />
          <Route path="addbus" element={<AddBus />} />
          <Route path="viewbus" element={<ViewBus />} />
          <Route path="passengerlist" element={<PassangerList />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="cancel-booking" element={<CancelBooking />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

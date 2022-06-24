import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'

import FetchAllVehicles from './components/FetchAllVehicles';
import FetchVehicle from './components/FetchVehicle';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from "./components/signup/signup"
import FetchCart from './components/FetchCart';
import SuccessDrawer from './components/success-model';
import Order from './components/Orders';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<FetchAllVehicles />} />
          <Route path="vehicle/all" element={<FetchAllVehicles />}></Route>
          <Route path="/vehicle/get/:id" element={<FetchVehicle />}></Route>
          <Route path="/user/cart/:id" element={<FetchCart />}></Route>
          <Route path="/customer/login" element={<Login />} />
          <Route path="/customer/signin" element={<SignUp />} />
          <Route path="/success" element={<SuccessDrawer />} />
          <Route path="/user/order/:id" element={<Order />}></Route>


        </Routes>
      </Router>
    </div>

  );
}

export default App;

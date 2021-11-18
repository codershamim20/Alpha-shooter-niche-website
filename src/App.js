import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Products/Products';
import Contactus from './Components/ContactUs/Contactus';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import ServiceDetail from './Components/ProductDetails/Productdetails'
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import Register from './Components/Register/Register';
import Addreviews from './Components/Addreviews/Addreviews';
import Pay from './Components/pay/Pay';
import Myorder from './Components/Allorders/Myorder';
import Dashbaord from './Components/Dasboard/Dashbaord';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageProduct from './Components/ManageProduct.js/ManageProduct';

function App() {
  return (
    <div >
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route  path='/home'>
          <Home></Home>
          </Route>
          <Route  path="/about">
          <About></About>
          </Route>
          <Route  path='/contactus'>
            <Contactus></Contactus>
          </Route>
          <Route  path='/products'>
          <Services></Services>
          </Route>
          <Route  path='/reviews'>
          <Addreviews></Addreviews>
          </Route>
          <Route  path='/register'>
          <Register></Register>
          </Route>
          <Route  path='/makeadmin'>
          <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='/login'>
          <Login></Login>
            </Route>
            <PrivetRoute path="/productdetail/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>
            <PrivetRoute path="/dashboard">
            <Dashbaord></Dashbaord>
          </PrivetRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <Route path="/manageproduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/myorder">
            <Myorder></Myorder>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;

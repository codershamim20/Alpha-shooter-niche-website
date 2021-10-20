
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Bodycare from './Components/BodyCare/Bodycare';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail'
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import Register from './Components/Register/Register';

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
          <Route  path='/bodycare'>
            <Bodycare></Bodycare>
          </Route>
          <Route  path='/services'>
          <Services></Services>
          </Route>
          <Route  path='/register'>
          <Register></Register>
          </Route>
          <Route path='/login'>
          <Login></Login>
            </Route>
            <PrivetRoute path="/bookVehicle/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;

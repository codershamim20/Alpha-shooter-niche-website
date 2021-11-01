
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
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail'
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import AddService from './Components/AddService/AddService';

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
            <Route path="/addservice">
              <AddService></AddService>
          </Route>
          <Route  path='/services'>
          <Services></Services>
            </Route>
          <Route path='/login'>
          <Login></Login>
            </Route>
            <PrivetRoute path="/servicedetail/:id">
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

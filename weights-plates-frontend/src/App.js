import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Logout from './components/Logout';
// import RegisterScreen from './components/RegisterScreen';
// import Tracker from './components/Tracker';
import RegisterPage from './pages/register';
import TrackerPage from './pages/tracker';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/register' component={RegisterPage}/>
        <Route path = '/logout' component={Logout}/>
        <Route path ='/supplements' component={TrackerPage}/>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Logout from './components/Logout';
import RegisterScreen from './components/RegisterScreen';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path = '/logout' component={Logout}/>
      </Switch>
    </Router>
  );
}

export default App;

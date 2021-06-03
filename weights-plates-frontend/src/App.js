import React, { Component} from 'react';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Logout from './components/Logout';
// import RegisterScreen from './components/RegisterScreen';
// import Tracker from './components/Tracker';
import RegisterPage from './pages/register';
import TrackerPage from './pages/tracker';
import SupplementPage from './pages/supplements';
import BmrPage from './pages/bmr';
import NutrientPage from './pages/nutrients';


// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path='/' component={Home} exact/>
//         <Route path='/signin' component={SigninPage} exact/>
//         <Route path='/register' component={RegisterPage}/>
//         <Route path = '/logout' component={Logout}/>
//         <Route path ='/foodtracker' component={TrackerPage}/>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

class App extends Component{
    constructor(props){
        super(props);
        this.state={
        supplements:[]
        }
    }
    componentDidMount(){
        this.getSupplements()
        console.log(this.state.supplements)
    }
    async getSupplements(){
        let response = await axios.get('http://127.0.0.1:8000/supplements/');
        console.log('get supplements', response.data);
        this.setState({
            supplements: response.data
        })
        console.log("supplements", response.data)
    }
    render(){
      return (
            <Router>
              <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/signin' component={SigninPage} exact/>
                <Route path='/register' component={RegisterPage}/>
                <Route path = '/logout' component={Logout}/>
                <Route path ='/foodtracker' component={TrackerPage}/>
                <Route path ='/supplements' component={SupplementPage}/>
                <Route path ='/bmrcalculator' component={BmrPage}/>
                <Route path ='/nutrientsdata' component={NutrientPage}/>
              </Switch>
            </Router>
          );
    }
}

export default App
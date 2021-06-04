import {Component} from 'react'

class Logout extends Component{
    componentDidMount(){
        localStorage.removeItem('token');
        window.location = '/signin';
    }
    render(){
        return null
    }
}

export default Logout;

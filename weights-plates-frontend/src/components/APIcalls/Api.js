import axios from 'axios'

export async function registerService(user){
    try{
        const response = await axios.post('https://127.0.0.1:8000/api/register/', user);
        if (response.status === 201){
            console.log('You are registered');
            return response.data;
        }
    }
    catch(ex){
        console.log('Error', ex);
        throw ex;
    }
}

export async function loginService(login){
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/login/', login);
        console.log('You are logged in');
        return response.data;
    }
    catch(ex){
        console.log('Error');
        throw ex;
    }
}

export async function getCurrentUser(id){
    try{
        const jwt = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8000/user/${id}`, {headers: {Authorization: 'Token' + jwt}});
        console.log(response.data);

        if(response.status === 200){
            return response.data;
        }
        return null;
    }
    catch(ex){
        console.log("exception", ex)
    }
}

export async function getSupplements(){
    const response = await axios.get('http://127.0.0.1:8000/supplements/');
    console.log('get supplements', response.data);
    return(response.data)
}

// function componentDidMount(){
//     let response = getSupplements();
//     console.log(response)
//     return(response)
// }
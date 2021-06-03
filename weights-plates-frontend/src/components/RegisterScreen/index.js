import React from 'react'
import { registerService } from '../APIcalls/Api';
import {UseForm} from '../Forms/UseForm'
import {HeroBg, VideoBg} from '../HeroSection/HeroElements'
import Video from '../../videos/video.mp4'
import { FormButton, FormContent, FormH1, FormInput, FormLabel, Container, FormWrap, Icon, Form, Text } from './RegisterScreenElements'

const RegisterScreen = () => {
    const [newUser, setNewUser] = UseForm({username:'', password:'', gender:'', email:''});
    const registerUser = (e, newUser) => {
        e.preventDefault();
        console.log('regsiterUser', newUser)
        registerService(newUser);
        window.location= '/'
    }
    return (
        <>
          <Container>
                <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
                <FormWrap>
                    <Icon to='/'>Weights and Plates</Icon>
                    <FormContent>
                        <Form onClick={(e) => registerUser(e, newUser)}>
                            <FormH1>Register Your New Account</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='text' name='username' onChange={setNewUser} value={newUser.username} placeholder='Enter username'/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' name='password' onChange={setNewUser} value={newUser.password}  placeholder='Enter password'/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' name='email' onChange={setNewUser} value={newUser.email}  placeholder='Enter email'/>
                            <FormLabel htmlFor='for'>Select Gender</FormLabel>
                            <FormInput type='text' name='gender' onChange={setNewUser} value={newUser.gender}  placeholder='Enter Gender'/>
                            <FormButton  >Register</FormButton>
                            <Text>Already Have an Account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default RegisterScreen

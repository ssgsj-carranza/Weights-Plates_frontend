import React from 'react'
import { registerService } from '../APIcalls/Api';
import {UseForm} from '../Forms/UseForm'
import {HeroBg, VideoBg} from '../HeroSection/HeroElements'
import Video from '../../videos/video.mp4'
import { FormButton, FormContent, FormH1, FormInput, FormLabel, Container, FormWrap, Icon, Form, Text } from './RegisterScreenElements'

const RegisterScreen = () => {
    const [newUser, setNewUser] = UseForm({Username:'', Password:'', Gender:''});
    const registerUser = (newUser) => {
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
                        <Form action='#'>
                            <FormH1>Register Your New Account</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='text' name='Username' onChange={setNewUser} value={newUser.Username}  placeholder='Enter username'/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='text' name='Password' onChange={setNewUser} value={newUser.Password}  placeholder='Enter password'/>
                            <FormLabel htmlFor='for'>Select Gender</FormLabel>
                            <FormInput type='text' name='Gender' onChange={setNewUser} value={newUser.Gender}  placeholder='Select Gender'/>
                            <FormButton type='register' onClick={() => registerUser(newUser)}>Register</FormButton>
                            <Text>Already Have an Account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default RegisterScreen

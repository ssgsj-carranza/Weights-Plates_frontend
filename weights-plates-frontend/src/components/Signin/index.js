import React from 'react'
import { FormButton, FormContent, FormH1, FormInput, FormLabel, Container, FormWrap, Icon, Form, Text } from './SigninElements'
import {HeroBg, VideoBg} from '../HeroSection/HeroElements'
import Video from '../../videos/video.mp4'
import UserForm from '../Forms/Form'
import {loginService} from '../APIcalls/Api';

const SignIn = () => {
    const {formValues, handleChange, handleSubmit} = UserForm(loginUser, {username: '', password: ''});
    async function loginUser(loginObj){
        try{
            const response = await loginService(loginObj);
            localStorage.setItem('token', response.token);
            window.location = '/';
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){

            }
        }
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
                            <FormH1>Sign in to Your Account</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='text' name='username' onChange={handleChange} value={formValues.username} required={true} placeholder='Enter username'/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='text' name='password' onChange={handleChange} value={formValues.password} required={true} placeholder='Enter password'/>
                            <FormButton type='signin'>Sign in</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default SignIn

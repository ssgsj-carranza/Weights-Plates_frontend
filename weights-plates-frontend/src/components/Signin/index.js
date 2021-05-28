import React from 'react'
import { FormButton, FormContent, FormH1, FormInput, FormLabel, Container, FormWrap, Icon, Form, Text } from './SigninElements'
import {HeroBg, VideoBg} from '../HeroSection/HeroElements'
import Video from '../../videos/video.mp4'
const SignIn = () => {
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
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='text' name='email' required={true} placeholder='Enter email'/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='text' name='password' required={true} placeholder='Enter password'/>
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

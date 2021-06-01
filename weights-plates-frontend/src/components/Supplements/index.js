import React, {useState} from 'react';
import {Container, HeroBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './SupplementsElements';
import Video from '../../videos/video.mp4'
import SupplementList from './SupplementList'
import axios from 'axios'

function SupplementInfo (){
    const [supplementData, setSupplementData] = useState(null);
  
    async function getSupplementData(){
        const response = await axios.get(
            'http://127.0.0.1:8000/supplements/'
        );
        console.log(response, "getsupplementdata")
        // const supplements = await response.json();
        // return supplements;
    }
        // getSupplementData().then((response) => response.json())
        // .then((data) => {setSupplementData(data); console.log(data)})
        // .catch(() => {console.log("Error")})
    return (
        <Container>
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <FormWrap>
            <Icon to='/'>Weights and Plates</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Weights and Plates</FormH1>
                    <FormLabel htmlFor='for'>Supplement Information</FormLabel>
                    <FormButton type='search' onClick={getSupplementData}>Access Library</FormButton><br></br>
                    {supplementData && <SupplementList supplementData={supplementData} />}
                    </Form>
            </FormContent>
        </FormWrap>
    </Container>  
    )
}

export default SupplementInfo

import React, {useState, useEffect} from 'react';
import NutrientList from './NutrientList'
import {Container, HeroBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './NutrientsElements';
import Video from '../../videos/video.mp4'
import NutrientsList from './NutrientList';
import axios from 'axios'


function NutrientInfo (){
    const [nutrientsData, setNutrientsData] = useState(null);

    function handleChange(event){
        setNutrientsData(event.target.value);
    }
  
    async function getNutrientData(){
        const response = await axios.get(
            'http://127.0.0.1:8000/nutrients/'
        );
        console.log(response, "getnutrientdata")
        setNutrientsData(response.data)
    }
    useEffect(() =>{
        getNutrientData()
    }, []);

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
                    <FormLabel htmlFor='for'>Nutrient Data</FormLabel>
                    <FormInput type='text' placeholder='Search (e.g. fish)' onChange={handleChange}/>
                    <FormButton type='search' onClick={getNutrientData}>Search</FormButton><br></br>
                    {nutrientsData && <NutrientsList nutrientsData={nutrientsData} />}
                </Form>
            </FormContent>
        </FormWrap>
    </Container>  
    )
}
export default NutrientInfo

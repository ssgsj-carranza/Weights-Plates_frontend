import React, {useState} from 'react';
import TrackerPage from '../../pages/tracker';
import MealList from './MealList'
import {Container, HeroBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './TrackerElements';
import Video from '../../videos/video.mp4'


function Tracker (){
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    // const nutrients = mealData.nutrients;
   
    function handleChange(event){
        setCalories(event.target.value);
    }

   function getMealData(){
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=e7d2ab60104c4c6e9967f95e3023ff0b&timeFrame=day&targetCalories=${calories}`
        )
        .then((response) => response.json())
        .then((data) => {setMealData(data); console.log(data)})
        .catch(() => {console.log("Error")})
    }
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
                    <FormLabel htmlFor='for'>Food Tracker</FormLabel>
                    <FormInput type='text' placeholder='Calories (e.g. 2000)' onChange={handleChange}/>
                    <FormButton type='search' onClick={getMealData}>Search</FormButton><br></br>
                    {mealData && <MealList mealData={mealData} />}
                </Form>
            </FormContent>
        </FormWrap>
    </Container>  
    )
}

export default Tracker

import React, {useState, useEffect} from 'react'
import {ServicesCard, ServicesContainer, ServicesH1, ServicesIcon, ServicesWrapper, ServicesH2} from '../Services/ServicesElements'

function Nutrient({nutrients}) {
    // const [nutrientData, setNutrientData] = useState("");
    // useEffect(() =>{
    //     fetch(
    //         `https://api.spoonacular.com/recipes/${nutrients.id}/information?apiKey=e7d2ab60104c4c6e9967f95e3023ff0b&includeNutrition=false`
    //     )
    //     .then((response) => response.json())
    //     .then((data) => {setNutrientData(data.nutrition.nutrients)})
    //     .catch(() => {console.log("Error")})
    // }, [nutrients.id])
    return <ServicesContainer>
        <ServicesH1>{nutrients.name}</ServicesH1>
        <ServicesWrapper>
        <ServicesCard>
        {/* <ServicesIcon src={imageUrl} alt="recipe"/> */}
        <>
            {/* <ServicesH2>Preparation time: {meal.readyInMinutes} minutes</ServicesH2><br></br>
            <ServicesH2>Number of Servings: {meal.servings}</ServicesH2> */}
        </>
        {/* <a href={meal.sourceUrl}>Go to Recipe</a> */}
        </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
}

export default Nutrient
import React, {useState, useEffect} from 'react'
// import {ImageIcon} from './TrackerElements'
// import {ServicesArticle} from './TrackerElements'
import {ServicesCard, ServicesContainer, ServicesH1, ServicesIcon, ServicesWrapper, ServicesH2} from '../Services/ServicesElements'

function Meal({meal}) {
    const [imageUrl, SetImageUrl] = useState("");
    useEffect(() =>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=e7d2ab60104c4c6e9967f95e3023ff0b&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {SetImageUrl(data.image)})
        .catch(() => {console.log("Error")})
    }, [meal.id])
    return <ServicesContainer>
        <ServicesH1>{meal.title}</ServicesH1>
        <ServicesWrapper>
        <ServicesCard>
        <ServicesIcon src={imageUrl} alt="recipe"/>
        <>
            <ServicesH2>Preparation time: {meal.readyInMinutes} minutes</ServicesH2><br></br>
            <ServicesH2>Number of Servings: {meal.servings}</ServicesH2>
        </>
        <a href={meal.sourceUrl}>Go to Recipe</a>
        </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
}

export default Meal

{/* <ServicesContainer id='services'>
           <ServicesH1>Our Services</ServicesH1>
           <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Manage and Track your macros</ServicesH2>
                <ServicesP>With a Database of Almost 3000 Ingredients 5000+ Recipes 90k+ Products and 115k Menu Items We help you track your daily Caloric Goals at a Click</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Learn All About Supplements</ServicesH2>
                <ServicesP>We Have Narrowed Down a List of the Most Essential Supplements and Their Use To Help You Reach Your Goal</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>No Need For a Monthly Subscription</ServicesH2>
                <ServicesP>We Believe That a Healthy Lifestyle Should Be Something Everyone Can Get Access To, No Fees or Credit Cards</ServicesP>
                </ServicesCard>         
            </ServicesWrapper> 
        </ServicesContainer> */}
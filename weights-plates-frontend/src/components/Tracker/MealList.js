import React from 'react'
import { ServicesContainer } from '../Services/ServicesElements';
import { FormLabel } from '../Signin/SigninElements';
import Meal from './Meal'
import{FormH1} from './TrackerElements';

export default function MealList({mealData}) {
    const nutrients = mealData.nutrients;
    console.log(mealData);
    return (
        <main>
            <section className="nutrients">
           <FormH1>Macros</FormH1>
            <ul>
                <FormLabel>Calories: {nutrients.calories.toFixed(0)}</FormLabel><br></br>
                <FormLabel>Protein: {nutrients.protein.toFixed(0)}</FormLabel><br></br>
                <FormLabel>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</FormLabel><br></br>
                <FormLabel>Fat: {nutrients.fat.toFixed(0)}</FormLabel>
            </ul>
            </section>

            <div>
                {mealData.meals.map((meal) =>{
                  return <Meal key={meal.id} meal={meal} /> 
                })}
            </div>
        </main>
    )
}

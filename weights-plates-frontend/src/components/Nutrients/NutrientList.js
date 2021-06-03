import React from 'react'
import { FormLabel } from '../Signin/SigninElements';
import Nutrient from './Nutrient';
import{FormH1} from './NutrientsElements';

export default function NutrientsList({nutrientData}) {
    const nutrients = nutrientData.nutrition.nutrients;
    console.log(nutrientData);
    return (
        <main>
            <section className="nutrients">
           <FormH1>Macros</FormH1>
            <ul>
                <FormLabel>Name: {nutrients.name}</FormLabel><br></br>
                <FormLabel>Amount: {nutrients.amount}</FormLabel><br></br>
                <FormLabel>Unit: {nutrients.unit}</FormLabel><br></br>
                <FormLabel>Percent of Daily Needs: {nutrients.percentOfDailyNeeds}</FormLabel>
            </ul>
            </section>

            <div>
                {nutrientData.nutrition.nutrients.map((nutrients) =>{
                  return <Nutrient key={nutrients.id} nutrients={nutrients} /> 
                })}
            </div>
        </main>
    )
}
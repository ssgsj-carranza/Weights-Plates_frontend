import React from 'react'
import { FormLabel } from '../Signin/SigninElements';
import Nutrient from './Nutrient';
import{FormH1} from './NutrientsElements';


export default function NutrientList(props) {
    console.log('Nutrient Data From nutrient list Component', props.nutrientsdata);
    return (
        <main>
            <section>
           <FormH1>Nutrional Facts</FormH1>
            <ul>
                {props.nutrientsData.map((nutrient, index) => {
                    return (
                        <div key={index} style={{color: 'white'}}><br></br>{nutrient.name}<br></br><br></br> Serving Size:<br></br>{nutrient.serving_size}<br></br><br></br> Protein:<br></br>{nutrient.protein}<br></br><br></br>
                        Carbs:<br></br>{nutrient.carbs}<br></br><br></br> Fats: <br></br>{nutrient.fats}<br></br><br></br> Calories: <br></br>{nutrient.calories}</div>
                    )
                })}
            </ul>
            </section>
        </main>
    )
}

// export default function NutrientsList({nutrientData}) {
//     const nutrients = nutrientData.nutrition.nutrients;
//     console.log(nutrientData);
//     return (
//         <main>
//             <section className="nutrients">
//            <FormH1>Macros</FormH1>
//             <ul>
//                 <FormLabel>Name: {nutrients.name}</FormLabel><br></br>
//                 <FormLabel>Amount: {nutrients.amount}</FormLabel><br></br>
//                 <FormLabel>Unit: {nutrients.unit}</FormLabel><br></br>
//                 <FormLabel>Percent of Daily Needs: {nutrients.percentOfDailyNeeds}</FormLabel>
//             </ul>
//             </section>

//             <div>
//                 {nutrientData.nutrition.nutrients.map((nutrients) =>{
//                   return <Nutrient key={nutrients.id} nutrients={nutrients} /> 
//                 })}
//             </div>
//         </main>
//     )
// }
import React from 'react'
import { ServicesContainer } from '../Services/ServicesElements';
import { FormLabel } from '../Signin/SigninElements';
import Supplement from './Supplement'
import{FormH1} from './SupplementsElements';

export default function SupplementList({supplementData}, props) {
    console.log(supplementData);
    return (
        <main>
            <section>
           <FormH1>Essential Supplements</FormH1>
            <ul>
                <FormLabel>Name: {props.supplements.name}</FormLabel><br></br>
                <FormLabel>Description: {props.supplements.description}</FormLabel><br></br>
                <FormLabel>Side Effects: {props.supplements.side_effects}</FormLabel><br></br>
            </ul>
            </section>

            <div>
                {supplementData.supplements.map((supplements) =>{
                  return <Supplement key={supplements.id} supplements={supplements} /> 
                })}
            </div>
        </main>
    )
}
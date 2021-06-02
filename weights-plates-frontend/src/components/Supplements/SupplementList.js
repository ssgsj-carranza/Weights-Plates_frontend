import React from 'react'
import { ServicesContainer } from '../Services/ServicesElements';
import { FormLabel } from '../Signin/SigninElements';
import Supplement from './Supplement'
import{FormH1} from './SupplementsElements';

export default function SupplementList(props) {
    console.log('Supplement Data From SupplemetnList Component', props.supplementdata);
    return (
        <main>
            <section>
           <FormH1>Supplement Information</FormH1>
            <ul>
                {props.supplementData.map((supplement, index) => {
                    return (
                        <div key={index} style={{color: 'white'}}><br></br>{supplement.name}<br></br><br></br> Description:<br></br>{supplement.description}<br></br><br></br> Side Effects:<br></br>{supplement.side_effects}</div>
                    )
                })}
                {/* <FormLabel>Name: {props.supplementData.name}</FormLabel><br></br>
                <FormLabel>Description: {props.supplementData[0].description}</FormLabel><br></br>
                <FormLabel>Side Effects: {props.supplementData[0].side_effects}</FormLabel><br></br> */}
            </ul>
            {/* <ul>
            {props.supplementData.map((supplement, index) => {
                    return (
                        <li key={index} style={{color: 'white'}}>Description: {supplement.description}</li>
                    )
                })}
            </ul> */}
            </section>

            {/* <div>
                {props.supplements.map((supplements) =>{
                  return <Supplement key={supplements.id} supplements={supplements} /> 
                })}
            </div> */}
        </main>
    )
}
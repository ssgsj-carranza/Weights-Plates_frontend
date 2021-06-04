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
            </ul>
            </section>
        </main>
    )
}
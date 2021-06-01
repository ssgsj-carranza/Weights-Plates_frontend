import React, {useState, useEffect} from 'react'
import {ServicesCard, ServicesContainer, ServicesH1, ServicesIcon, ServicesWrapper, ServicesH2} from '../Services/ServicesElements'

function Supplement({supplements}) {

    return <ServicesContainer>
        <ServicesH1>{supplements.name}</ServicesH1>
        <ServicesWrapper>
        <ServicesCard>
        {/* <ServicesIcon src={imageUrl} alt="recipe"/> */}
        <>
            <ServicesH2>Description: {supplements.description}</ServicesH2><br></br>
            <ServicesH2>Side Effects: {supplements.side_effects}</ServicesH2>
        </>
        {/* <a href={meal.sourceUrl}>Go to Recipe</a> */}
        </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
}

export default Supplement
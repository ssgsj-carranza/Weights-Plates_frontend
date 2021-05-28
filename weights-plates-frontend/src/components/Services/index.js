import React from 'react'
import Icon1 from '../../images/jpg-1.jpg'
import Icon2 from '../../images/jpg-2.jpg'
import Icon3 from '../../images/jpg-3.jpg'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
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
        </ServicesContainer>
    )
}

export default Services

import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Eating Right Is Not About Eating Less</HeroH1>
                <HeroP>
                    Register Today, Nothing To Lose and Everything To Gain
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

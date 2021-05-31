import {NavBtn, NavBtnLink} from '../Navbar/NavbarElements'
import '../../images/jpg-1.jpg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    topLine: 'The Only Nutrition Database You Will Ever Need',
    headLine: 'Special Diets/Intolerances & Essential Supplements with Nutitional Information',
    descriptions: 'We compute the nutritional information for recipes automatically using a proprietary algorithm. With this information, you can find individual recipes or even create entire meal plans that satisfy your dietary goals.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/jpg-1.jpg'),
    alt: 'Food',
    dark: true,
    primary: true,
    darkText: false
}


export const homeObjTwo = {
    id: 'supplements',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topLine: 'Learn About Your Essential Supplements',
    headLine: 'Detailed Description of Your Daily Supplement Needs From Their Benefits To Their Side Effects',
    descriptions: 'Dietary supplements include vitamins, minerals, herbs, botanicals, enzymes, amino acids, or other dietary ingredients.',
    buttonLabel: 'Begin Learning',
    imgStart: true,
    img: require('../../images/jpg-2.jpg'),
    alt: 'supplement',
    dark: false,
    primary: false,
    darkText: true
}


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topLine: 'Join Millions of Other In Their Fitness Journey',
    headLine: 'Follow The Easy Steps To Register',
    descriptions: 'Enter Your Information and Get Started Today',
    buttonLabel:<NavBtn>
                    <NavBtnLink to="/register">Register</NavBtnLink>  
                </NavBtn>,
    imgStart: false,
    img: require('../../images/jpg-3.jpg'),
    alt: 'register',
    dark: false,
    primary: false,
    darkText: true
}


export const homeObjFour = {
    id: 'food tracker',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    topLine: 'Begin Food Tarcking and Searching',
    headLine: 'Simple as Typing and Hitting Enter',
    descriptions: 'Simply Enter What you Wish To Know About Your Food/Meal and Get Immediate Feedback. Enter Your Cravings and Recieve Thousands of Recipes Catered To You',
    buttonLabel: 'Food Search',
    imgStart: false,
    img: require('../../images/jpg-3.jpg'),
    alt: 'tracker',
    dark: true,
    primary: true,
    darkText: false
}
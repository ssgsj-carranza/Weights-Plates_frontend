import {NavBtn, NavBtnLink} from './InfoElements'
import '../../images/jpg-1.jpg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    topLine: 'The Only Nutrition Database You Will Ever Need',
    headLine: 'Special Diets/Intolerances & Essential Supplements with Nutitional Information',
    descriptions: 'We compute the nutritional information for recipes automatically using a proprietary algorithm. With this information, you can find individual recipes or even create entire meal plans that satisfy your dietary goals.',
    buttonLabel: <NavBtn>
                    <NavBtnLink to="/signin">Get Started</NavBtnLink>  
                </NavBtn>,
    imgStart: false,
    img: 'https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
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
    buttonLabel: <NavBtn>
                    <NavBtnLink to="/supplements">Supplement Information</NavBtnLink>  
                </NavBtn>,
    imgStart: true,
    img: 'https://images.unsplash.com/photo-1592323818181-f9b967ff537c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
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
    img: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
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
    buttonLabel: <NavBtn>
                    <NavBtnLink to="/foodtracker">Food Tracker</NavBtnLink>  
                </NavBtn>,
    imgStart: false,
    img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG51dHJpdGlvbiUyMGZhY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt: 'tracker',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjFive = {
    id: 'bmr calculator',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topLine: 'Find out Your BMR',
    headLine: 'Simply Enter Your Information To Find Out Your Exact Caloric Intake To Begin Your Journey',
    descriptions: 'Enter Your Age, Sex, Gender, and Height To receive a Custom Model of Your Exact Calories Required To Your Lifestyle and Goals',
    buttonLabel: <NavBtn>
                    <NavBtnLink to="/bmrcalculator">BMR Calculator</NavBtnLink>  
                </NavBtn>,
    imgStart: true,
    img: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    alt: 'supplement',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjSix = {
    id: 'nutrients data',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    topLine: 'Begin Learning About the Nutrients in Your Food',
    headLine: 'Search for Thousands of Food Items and Learn About Their Nutrients',
    descriptions: 'Simply Enter What you Wish To Know About Your Food/Meal and Get Immediate Feedback',
    buttonLabel: <NavBtn>
                    <NavBtnLink to="/nutrientsdata">Nutrients Data</NavBtnLink>  
                </NavBtn>,
    imgStart: false,
    img: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    alt: 'data',
    dark: true,
    primary: true,
    darkText: false
}
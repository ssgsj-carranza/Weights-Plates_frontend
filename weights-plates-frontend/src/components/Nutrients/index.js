// import React, {useState, useEffect} from 'react';
// import NutrientList from './NutrientList'
// import {Container, HeroBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './NutrientsElements';
// import Video from '../../videos/video.mp4'


function Nutrients ({product}){
    // const [nutrientData, setNutrientData] = useState(null);
    // const [nutrientData, setNutrientData] = useState("");
    // useEffect(() =>{
    //     fetch(
    //         `https://api.spoonacular.com/food/ingredients/${product.id}/information?apiKey=e7d2ab60104c4c6e9967f95e3023ff0b&amount=1`
    //     )
    //     .then((response) => response.json())
    //     .then((data) => {setNutrientData(data.image)})
    //     .catch(() => {console.log("Error")})
    // }, [meal.id])
    // })
    // const [product, setProduct] = useState();
    // // const nutrients = mealData.nutrients;
   
    // function handleChange(event){
    //     setProduct(event.target.value);
    // }

    // function getNutrientData(product){
    //     const response = fetch(
    //         `https://api.spoonacular.com/food/ingredients/${product.id}/information?apiKey=e7d2ab60104c4c6e9967f95e3023ff0b&amount=1`
    //     )
    //     setNutrientData(response.data)
    //     console.log(response, "get nutrient data")
    // }
    // useEffect(() =>{
    //     getNutrientData()
    // },[])
     return (
         <div>hello</div>
//         <Container>
//         <HeroBg>
//         <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
//         </HeroBg>
//         <FormWrap>
//             <Icon to='/'>Weights and Plates</Icon>
//             <FormContent>
//                 <Form action='#'>
//                     <FormH1>Weights and Plates</FormH1>
//                     <FormLabel htmlFor='for'>Nutrient Data</FormLabel>
//                     <FormInput type='text' placeholder='Search (e.g. fish)' onChange={handleChange}/>
//                     <FormButton type='search' onClick={getNutrientData}>Search</FormButton><br></br>
//                     {nutrientData && <NutrientList nutrientData={nutrientData} />}
//                 </Form>
//             </FormContent>
//         </FormWrap>
//     </Container>  
    )
// }
}

 // const [imageUrl, SetImageUrl] = useState("");
    // useEffect(() =>{
    //     fetch(
    //         `https://api.spoonacular.com/recipes/${nutrients.id}/information?apiKey=e7d2ab60104c4c6e9967f95e3023ff0b&includeNutrition=false`
    //     )
    //     .then((response) => response.json())
    //     .then((data) => {SetImageUrl(data.image)})
    //     .catch(() => {console.log("Error")})
    // }, [meal.id])
export default Nutrients

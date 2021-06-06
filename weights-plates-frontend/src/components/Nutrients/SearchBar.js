import React from 'react'
import {Container, HeroBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput} from './NutrientsElements';
import Video from '../../videos/video.mp4'

const SearchBar = (props) =>{
    return(
        <Container>
            <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='videp/mp4'/>
            </HeroBg>
            <FormWrap>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Weights and Plates</FormH1>
                        <FormLabel htmlFor='for'>Nutrition Facts</FormLabel>
                        <FormInput type='text' placeholder='Search (e.g. fish)' onChange={props.handleChange}/>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SearchBar;


{/* <Container>
//         <HeroBg>
//         <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
//         </HeroBg>
//         <FormWrap>
//             <Icon to='/'>Weights and Plates</Icon>
//             <FormContent>
//                 <Form action='#'>
//                     <FormH1>Weights and Plates</FormH1>
//                     <FormLabel htmlFor='for'>Nutrient Data</FormLabel>
//                     <FormInput type='text' placeholder='Search (e.g. fish)' onChange={props.handleSearchChange}/>
//                     <FormButton type='search'>Search</FormButton><br></br>
//                     {nutrientsData && <NutrientsList nutrientsData={nutrientsData} />}
//                 </Form>
//             </FormContent>
//         </FormWrap>
//     </Container>   */}
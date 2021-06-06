import React, {useState, useEffect, Component} from 'react';
import NutrientList from './NutrientList'
import {Container, HeroBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './NutrientsElements';
import Video from '../../videos/video.mp4'
import NutrientsList from './NutrientList';
import axios from 'axios'
import SearchBar from './SearchBar';


// function NutrientInfo (props){
//     const [nutrientsData, setNutrientsData] = useState(null);

//     function handleChange(event){
//         setNutrientsData(event.target.value);
//     }
  
//     async function getNutrientData(){
//         const response = await axios.get(
//             'http://127.0.0.1:8000/nutrients/'
//         );
//         console.log(response, "getnutrientdata")
//         setNutrientsData(response.data)
//     }
//     useEffect(() =>{
//         getNutrientData()
//     }, []);

//     return (
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
//                     <FormInput type='text' placeholder='Search (e.g. fish)' onChange={props.handleSearchChange}/>
//                     <FormButton type='search'>Search</FormButton><br></br>
//                     {nutrientsData && <NutrientsList nutrientsData={nutrientsData} />}
//                 </Form>
//             </FormContent>
//         </FormWrap>
//     </Container>  
//     )
// }
// export default NutrientInfo


class NutrientInfo extends Component {
    constructor(props){
        super(props);
        this.state={
        filterNutrient:[],
        userInput:'',
        nutrients: []
        }
    }

    componentDidMount(){
        this.getNutrientsData()
    }

    async getNutrientsData(){
        let response = await axios.get('http://127.0.0.1:8000/nutrients/');
        console.log(response.data)
        this.setState({
          nutrients: response.data
        })
      }

    mapNutrients(){
        if(this.state.userInput === ''){
            return this.state.nutrients.map(nutrients =>
                <NutrientList 
                    key={nutrients.id}
                    nutrients={nutrients}
                />
            );
        }
        else{
            return this.state.filterNutrient.map(nutrients =>
                <NutrientList 
                    key={nutrients.id}
                    nutrients={nutrients}
                />
            )
        }
    }

      handleSearchChange = (event) => {
        console.log("test")
        this.setState({userInput: event.target.value});
        const filteredNutrient = this.state.nutrients.filter(search => {
            return search.name.toLowerCase().includes(this.state.userInput) ||
            search.serving_size.includes(this.state.userInput) ||
            search.protein.includes(this.state.userInput) ||
            search.carbs.includes(this.state.userInput) ||
            search.fats.includes(this.state.userInput) ||
            search.calories.includes(this.state.userInput)
        });
        console.log(filteredNutrient);
        this.setState({filterNutrient:filteredNutrient})   
    }

    render(){
        return (
            <div>
                <SearchBar handleChange={this.handleSearchChange} mapNutrients={() => this.mapNutrients()} />
                {/* <NutrientList  mapNutrients={() => this.mapNutrients()}/> */}
            </div>
        )
    }
}

export default NutrientInfo
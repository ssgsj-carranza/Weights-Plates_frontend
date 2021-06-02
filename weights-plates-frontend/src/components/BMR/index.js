import React, {useState} from 'react';

class BMR extends Component {
    constructor() {
      super();
      this.state = {
        age: '',
        weight: '',
        gender:'',
        heightFeet:'',
        heightInches:'',
        activityLevel:'',
        bmr:'',
        suggestedActivity:'',
        kgLbs:'',
      };
    }

    handleGenderChange = (event) =>{
        this.setState({gender: event.target.value})
    }

    handleWeightChange = (event) =>{
        this.setState({weight: event.target.value})
    }

    handleAgeChange = (event) =>{
        this.setState({age: event.target.value})
    }

    handleHeightFeetChange = (event) =>{
        this.setState({heightFeet: event.target.value})
    }

    handleHeightInchesChange = (event) =>{
        this.setState({heightInches: event.target.value})
    }

    handleActivityChange = (event) =>{
        this.setState({activityLevel: event.target.value})
    }

    handleKgLbsChange = (event) =>{
        this.setState({kgLbs: event.target.value})
    }

    calcBMR(){
        if(this.state.age == ''|| this.state.weight ==''|| this.state.gender ==''|| this.state.heightFeet == ''||
            this.state.heightInches ==''|| this.state.kgLbs ==''){
                this.setState({ Error: "Please select all fields"});
                return;
        }
            
        let bmrCalculator = '';
        let heightConverter = heightFeet * 30.48 + heightInches * 2.54;
        if (kgLbs == 1) {
            if (gender == 2) {
                bmrCalculator = 66 + 6.2 * weight + 12.7 * heightConverter - 6.76 * age;
            }else if (gender == 1) {
                bmrCalculator = 655.1 + 4.35 * weight + 4.7 * heightConverter - 4.7 * age;
            }
        } else if (kgLbs == 2) {
            if (gender == 2) {
            bmrCalculator = 66.5 + 13.75 * weight + 5.003 * heightConverter - 6.755 * age;
            } else if (gender == 1) {
                bmrCalculator = 655 + 9.563 * weight + 1.85 * heightConverter - 4.676 * age;
            }
        }
        this.setState({brm: bmrCalculator})
    }
    
    render(){
        return (
            <div>
            
            </div>
        )
    }
}

export default BMR

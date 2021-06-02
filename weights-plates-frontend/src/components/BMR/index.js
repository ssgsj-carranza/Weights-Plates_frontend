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
        cal:'',
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
        this.setState({brm: bmrCalculator});

        let activity ='';
        if (bmrCalculator <= 1926){
            activity = "Little to no exercise.";
        }else if (bmrCalculator > 1926 && bmrCalculator <= 2207){
            activity = "Excerise 1 to 3 times a week, giving 2 days rest in between muscle groups."
        }else if (bmrCalculator > 2207 && bmrCalculator <= 2351){
            activity = "Excerise 4 or 5 times a week, giving 2 days rest in between muscle groups."
        }else if (bmrCalculator > 2351 && bmrCalculator <= 2488){
            activity = "Moderate to Intense excercise 3 to 4 times a week."
        }else if (bmrCalculator > 2488 && bmrCalculator <= 2796){
            activity = "Intense excercise 6 to 7 times a week."
        }else if (bmrCalculator > 2796){
            activity = "Very intense daily excercise or physical job"
        }
        this.setState({suggestedActivity: "We suggest: " + activity})
    }

    calcCalories(){
        let calories='';
        if(this.state.activityLevel){
            calories=(<div>{this.state.bmr * this.state.activityLevel}</div>)
        }
    }
    
    render(){
        return (
            <div>
            
            </div>
        )
    }
}

export default BMR

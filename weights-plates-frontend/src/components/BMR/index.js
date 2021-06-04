import React, {Component} from 'react';
import {Container, HeroBg, VideoBg, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './bmrElements'
import Video from '../../videos/video.mp4'

class BMR extends Component {
    constructor() {
      super();
      this.state = {
        age: "",
        weight: "",
        gender:"",
        heightFeet:"",
        heightInches:"",
        activityLevel:"",
        bmr:"",
        cal:"",
        suggestedActivity:"",
        kgLbs:"",
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
        let heightConverter = this.state.heightFeet * 30.48 + this.state.heightInches * 2.54;
        if (this.state.kgLbs == 1) {
            if (this.state.gender == 2) {
                bmrCalculator = 66 + 6.2 * this.state.weight + 12.7 * heightConverter - 6.76 * this.state.age;
            }else if (this.state.gender == 1) {
                bmrCalculator = 655.1 + 4.35 * this.state.weight + 4.7 * heightConverter - 4.7 * this.state.age;
            }
        } else if (this.state.kgLbs == 2) {
            if (this.state.gender == 2) {
            bmrCalculator = 66.5 + 13.75 * this.state.weight + 5.003 * heightConverter - 6.755 * this.state.age;
            } else if (this.state.gender == 1) {
                bmrCalculator = 655 + 9.563 * this.state.weight + 1.85 * heightConverter - 4.676 * this.state.age;
            }
        }
        this.setState({bmr: bmrCalculator});

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
        this.setState({cal: calories});
    }
    
    render(){
        let BMRresult ='';
        if(this.state.bmr){
            BMRresult = <div className="resultBMR">{this.state.bmr.toFixed(0)}</div>
        }
        
        let suggestion = '';
        if(this.state.suggestedActivity){
            suggestion = <div className="resultSug">{this.state.suggestedActivity}</div>
        }

        let calories = '';
        if(this.state.cal){
            calories = <div className="resultSug">{this.state.cal}</div>
        }

        return(
            <Container>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
                <FormWrap>
                    <Icon to='/'>Weights and Plates</Icon>
                    <FormContent>
                    <Form action='#'>
                            <FormH1>Calorie Calculator</FormH1>
                            <FormLabel htmlFor='for'>Gender</FormLabel>
                            <FormLabel>
                            <FormInput  type="radio" 
                                    checked={this.state.gender == "1"}
                                    onChange={this.handleGenderChange}
                                    name="gender"
                                    
                                    value="1"/>Female</FormLabel>
                            <FormLabel>
                            <FormInput  type="radio" 
                                    checked={this.state.gender == "2"}
                                    onChange={this.handleGenderChange}
                                    
                                    name="gender"
                                    value="2"/>Male</FormLabel>
                            <FormLabel htmlFor='for'>Weight</FormLabel>
                            <FormLabel>
                            <FormInput  type="radio"
                                    // name="weighttype"
                                    value={this.state.kgLbs == "1"}
                                    
                                    onChange={this.handleKgLbsChange}
                                    value="1"/>US</FormLabel>
                            <FormLabel>
                            <FormInput  type="radio"
                                    // name="weighttype"
                                    value={this.state.kgLbs == "2"}
                                    onChange={this.handleKgLbsChange}
                                    value="2"/>Metric</FormLabel>
                            <FormInput  type="number"
                                    name="weight"
                                    // className="weight"
                                    onChange={this.handleWeightChange}
                                    value={this.state.weight}
                                    min="0"
                                    max="1000"
                                    placeholder="Enter weight"/>
                            <FormLabel htmlFor='for'>Height</FormLabel>
                            <FormInput  type="number"
                                    // name="heightFeet"
                                    onChange={this.handleHeightFeetChange}
                                    // className="heightFeet"
                                    value={this.state.heightFeet}
                                    min="0"
                                    max="12"
                                    placeholder="Enter feet"/> 
                            <FormInput  type="number"
                                    name="heightInches"
                                    onChange={this.handleHeightInchesChange}
                                    // className="heightInches"
                                    value={this.state.heightInches}
                                    min="0"
                                    max="11"
                                    placeholder="Enter inches"/>
                            <FormLabel htmlFor='for'>Age</FormLabel>
                            <FormInput  type="number"
                                        name="age"
                                        onChange={this.handleAgeChange}
                                        // className="age"
                                        value={this.state.age}
                                        min="0"
                                        max="100"
                                        placeholder="Enter age"/>
                            <FormButton type="button" onClick={() => this.calcBMR()}>Calculate BMR</FormButton>
                            <div style={{color: 'white'}}>BMR (Basal Metabolic Rate): {BMRresult} Calories/day</div>
                            <div style={{color: 'white'}}>{suggestion}</div><br></br>
                <FormLabel htmlFor='for'>Select Lifestyle</FormLabel><br></br>
                        <select value={this.state.activityLevel}
                                onChange={this.handleActivityChange}
                                name="activity">
                            <option value="1.2">Sedentary: little or no exercise</option>
                            <option value="1.375">Lightly Active: Light excercise 1 to 3 times a week</option>
                            <option value="1.55">Moderately Active: Moderate excercise 3 to 5 times a week</option>
                            <option value="1.725">Very Active: Intense excercise 6 to 7 days a week</option>
                            <option value="1.9">Very Intense Activity: Very intense excercise once or more a day and or physical job</option>
                        </select>
                    <FormButton type="button" onClick={() => this.calcCalories()}>Calculate Calories</FormButton>
                    <div style={{color: 'white'}}>Daily calorie needs based on activity level</div>
                    <div style={{color: 'white'}}>Calories: {calories}</div><br></br>
                    <div style={{color: 'white'}}>Exercise: 15-30 minutes of elevated heart rate activity.<br></br>
                         Very Active: 45-120 minutes of elevated heart rate activity.<br></br>
                         Very intense exercise: 2+ hours of elevated heart rate activity.</div>
                    </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        );
        
    }
}

export default BMR



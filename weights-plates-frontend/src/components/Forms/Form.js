import {useState} from 'react';

const UserForm = (callback, initialObject) => {
    const [formValues, setFormValues] = useState(initialObject);
    const handleChange = (event) => {
        setFormValues(formValues => ({...formValues, [event.target.name] : event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues, "form values")
        callback(formValues);
    }
    return {formValues, handleChange, handleSubmit};
}
export default UserForm;
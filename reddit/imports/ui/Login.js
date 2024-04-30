import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

export const Login = () => {
    const [error_state, setError] = useState('');

    const [formData_state, setFormData] = useState({
        email: "",
        password: ""
    })

    let navigate = useNavigate();

    function submitForm(event){
        event.preventDefault();

        Meteor.loginWithPassword({email: formData_state.email}, formData_state.password, (errorCallbackObject) => {
            if (!!errorCallbackObject){
                console.log('Login callback error', errorCallbackObject);
                setError(errorCallbackObject.reason);
            } else {
                navigate("/App");
            }
        });
    }

    return (
        <>
            <h1>Login here!</h1>
            {error_state ? <p>{error_state}</p> : undefined}
            <form onSubmit = {submitForm}>
                <input
                    type='email'
                    value={formData_state.email}
                    onChange={(e) => setFormData({...formData_state, email: e.target.value})}
                    placeholder ="Email" />

                <input type ='password'
                        value={formData_state.password}
                        onChange={(e) => setFormData({...formData_state, password: e.target.value})}
                        placeholder='Password' />
                <button>Login</button>
            </form>
            <br /><br />
            <Link to="/signup">Need to signup?</Link>
        </>
    )
}
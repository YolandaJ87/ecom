import React, { Component } from 'react';

import {reduxForm, Field} from 'redux-form';

import {FormInput} from "../formFields";

class SingInForm extends Component{
    render (){
        const {className } = this.props;
        return (
            <form className={`${className}sign-in-form`}>
                <Field className="sign-in-form__email" 
                    name="email" 
                    type='email' 
                    title='Email' 
                    placeholder='Email' 
                    component={FormInput}/>
                <Field className="sign-in-form__password" 
                    name="password" 
                    type='password' 
                    title='Password' 
                    placeholder='Password' 
                    component={FormInput}/>
            </form>
        );
    };
}
SingInForm = reduxForm({
    form: 'SignIn'
})(SingInForm);

export default SingInForm;
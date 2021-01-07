import React, { Component } from 'react';

import {reduxForm, Field} from 'redux-form';
import Details from '../details';

import history from '../../history';

import {FormInput, FormButton} from "../formFields";

class SingInForm extends Component{
    render (){
        const {className, handleSubmit } = this.props;
        const links = [
            {
                _id=0,
                title: "Not registred? Create account here.",
                onClick: ()=> history.push('/signup')
            },
            {
                _id=1,
                title: "Forgot account email?",
                onClick: ()=> console.log("Forgot email")
            },
            {
                _id=2,
                title: "Forgot password?",
                onClick: ()=> console.log("Forgot password")
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className}sign-in-form`}>
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
                    
                    <div className="sign-in-form__line"></div>

                        
                    <Field className="sign-in-form__login" 
                        onClick={()=>console.log("tryna submit")}
                        name="login" 
                        type='submit' 
                        title='Login' 
                        component={FormButton}/>

                    <Details className="sign-in-form_details" title="QuickLinks" links={links}/>
            </form>
        );
    };
}
SingInForm = reduxForm({
    form: 'SignIn'
})(SingInForm);

export default SingInForm;
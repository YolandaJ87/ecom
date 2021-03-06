import React, { Component } from 'react';

import {reduxForm, Field} from 'redux-form';

import history from '../../history';

import { FormButton} from "../formFields";

class ReviewForm extends Component{
    render (){
        const {className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                {/* <div className='sign-in-form__line'></div> */}
                <Field className='sign-in-form__proceed'
                onClick={() => history.push('/account')}
                type='submit'
                title='Proceed to Checkout'
                name='proceed'
                component={FormButton}/>
                
                <Field className='review-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>
            </form>
        );
    };
}
ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;
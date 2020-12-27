import React, { Component } from 'react';

import {reduxForm, Field} from 'redux-form';

class SingInForm extends Component{
    render (){
        return (
            const {className } = this.props;
            <form className={`${className}sign-in-form`}>
                sign innnn
            </form>
        );
    };
}
SingInForm = reduxForm({
    form: 'SignIn'
})(SingInForm);

export default SingInForm;
import React, { Component } from 'react';

import { connect } from 'react-redux';

class ReviewProducts extends Component{
    render (){
        const{className} = this.props;
        return (
            <div className={`${className} review-products`} >
                {
                    this.props.cartProducts.map(cartPRoduct => {
                        return (<h1 key={cartPRoduct._id}>{cartPRoduct.product.title}</h1>)
                    })
                }
            </div>
        );
    };
}

function mapStateToProps(state){
    const{ cartProducts } = state.user;
    return {cartProducts}
}

ReviewProducts = connect (mapStateToProps)(ReviewProducts);

export default ReviewProducts;
import React, { Component } from 'react';

import {UnderlinedTitle, InfoTitle} from './infoHelp';

import { connect } from 'react-redux';

class OrderSummary extends Component{
    render (){
        const{ className } = this.props;
        let amtStickers=0;
        let subtotal=0;
        let tax=0.16
        this.props.cartProducts.map(cartProduct=>{
            subtotal += cartProduct.quantity * cartProduct.product.price;
            amtStickers += cartProduct.quantity;
        })
        return (
            <div className={`${className} order-summary`} >
                <UnderlinedTitle className='order-summary__title' title='Order Summary' />
                <InfoTitle className='order-sumary_subtotal' title={`${amtStickers} stickers`} value={`$${subtotal}`} />
                <InfoTitle className='order-sumary_tax-shipping' title='Taxes & Shipping' value={`$${tax}`} />
                <InfoTitle className='order-sumary_total info-title-green__title' title='Total' value={`$${subtotal + tax}`} />
            </div>
        )
    };
}

function mapStateToProps(state){
    const { cartProducts}= state.user;
    return { cartProducts} 
}

OrderSummary= connect (mapStateToProps)(OrderSummary);

export default OrderSummary;
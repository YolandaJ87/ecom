import React, { Component } from 'react';

import {UnderlinedTitle, InfoTitle} from './infoHelp';

class OrderSummary extends Component{
    render (){
        const{ className } = this.props;
        return (
            <div className={`${className} order-summary`} >
                <UnderlinedTitle className='order-summary__title' title='Order Summary' />
                <InfoTitle className='order-sumary_subtotal' title='4 stickers' value='$7.96' />
                <InfoTitle className='order-sumary_tax-shipping' title='Taxes & Shipping' value='$0.16' />
                <InfoTitle className='order-sumary_total' title='Total' value='$8.02' />
            </div>
        )
    };
}

export default OrderSummary;
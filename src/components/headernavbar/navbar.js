import React, { Component } from 'react';

import { connect } from 'react-redux';

class Navbar extends Component{
    render (){
        return <div className="navbar">
            {
                this.props.navbarLinks.map( (link, index )=> {
                    return (
                        <a className='navbar__link' key={index} onClick={ () => console.log('trying to swith tab')}>
                            {link.title}
                        </a>
                    )
                })
            }
        </div>
    };
}

function mapStateToProps(state){
    const { navbarLinks } = state.headerNavbar
    return {
        navbarLinks
    }
}

Navbar= connect (mapStateToPProps)(Navbar);

export default Navbar;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component{
    componentDidMount(){
        //set header links
        const headerLinks = [
            { 
                _id: 0, 
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        //fetch shop products action creator
        //fetch navbar links
            //set navbar link --> donde nos permitira filtrar por tipo de Productos a mostrar en el componente
                //all   javascrip ui/ux linux   python  uml ruby
        
    }
    render (){
        return( 
            <div className="shop">  
            {/* barra de busqueda */}
            {/* componente de productos */}
            {/* boton carro compra */}
                Shop ....
            </div>
        )
    };
}
function mapStateToProps( state ){
    return{state};
}
Shop=connect(mapStateToProps, actions)(Shop);

export default Shop;
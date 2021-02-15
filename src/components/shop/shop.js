import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component{
    componentDidMount(){
        const headerLinks = [
            { 
                _id: 0, 
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();

        this.props.fetchShopProducts();
    }
    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps ) {
            this.props.setNavbarLinks(nextProps.categories, ( _id ) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
    }


    render (){
        return( 
            <div className="shop">  
            {/* barra de busqueda */}
            <div className="shop__prodcuts">
                {
                    this.props.filteredPRoducts.map(product => {
                        return (
                            <div key={product._id} className="shop-product">
                                <div className="shop-product__title"> 
                                    {product.title}
                                </div>
                                <div className="shop-product__description">
                                    {product.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* boton carro compra */}
                Shop ....
            </div>
        )
    };
}
function mapStateToProps( state ){
    const { categories, filteredPRoducts } = state.shop;
    return{
        categories, 
        filteredPRoducts
    };
}
Shop=connect(mapStateToProps, actions)(Shop);

export default Shop;
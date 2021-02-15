import {
    // SET_NAVBAR_LINKS,
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from '../actions/types';

const INITIAL_STATE = {
    categories:  [],
    filteredPRoducts: [],
    products:[]
}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case SET_SHOP_CATEGORIES:
            const categories  = action.payload;
            return {
                ...state,
                categories
            }
        case SET_SHOP_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            var filteredPRoducts =[];
            state.products.map(product => {
                if(product.belongsTo.includes(action.payload)){
                    filteredPRoducts.push(product);
                }
             })
            return {
                ...state,
                filteredPRoducts
            }
        default: return state;
    }
}
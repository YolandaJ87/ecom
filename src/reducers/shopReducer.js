import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from '../actions/types';

const INITIAL_STATE = {
    categories:  [],
    selectedCategoryId: 0,
    productsSelected: [],
    produccts:[]
}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case SET_SHOP_PRODUCTS:
            return{
                ...state,
                produccts: action.payload
            }
        default: return state;
    }
}
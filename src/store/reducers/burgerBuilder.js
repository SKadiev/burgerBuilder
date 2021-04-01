import * as actionTypes from '../actions/actionsTypes';


const INGREDIENT_PRICES = {
    salad : 0.5, 
    bacon: 1.7,
    cheese: 0.4, 
    meat: 1.3
};

const initalState = {
    ingredients: {
        salad: 0, 
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const reducer = (state = initalState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT :
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice  + INGREDIENT_PRICES[action.ingredientName]
            } 
        case actionTypes.REMOVE_INGREDIENT : 
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice:  state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            
        } 

        case actionTypes.SET_INGREDIENT : 
        return {
            ...state,
            ingredients: action.ingredients
            
        } 
        default:
            return state;
    }

};

export default reducer;
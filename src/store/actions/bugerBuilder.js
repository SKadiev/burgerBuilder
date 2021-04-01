import * as actionsTypes from './actionsTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionsTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};


export const removeIngredient = (name) => {
    return {
        type: actionsTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredients = ingredients => {
    return {
        type: actionsTypes.SET_INGREDIENT,
        ingredients
    }
}

export const initIngeredients = () => {
    return dispatch => {

        axios.get('/ingredients.json')
        .then(response => dispatch(setIngredients(response.data)))
        .catch(error => this.setState({error: true}))
    }
};
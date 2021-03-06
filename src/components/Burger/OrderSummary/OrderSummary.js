import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilairy'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]} 
                </li>
            ) ;
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicions burger with the following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: {props.totalPrice.toFixed(2)} $</p>
            <p>Continue to Checkout</p>
            <Button clicked={props.purchaseCanceled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinue}  btnType="Success" >CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;
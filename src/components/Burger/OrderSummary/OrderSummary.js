import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const ordersummary =(props)=>{
    
    const ingsummary = Object.keys(props.ingredients)
    .map(igkey => {
        return (
        <li key ={igkey}>
            <span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
        </li>
          )
      }    );
    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Here is your burger: </p>
            <ul>{ingsummary}</ul>
            <p>Price: ${props.price.toFixed(2)}</p>
            <p>Wanna checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked ={props.purchaseContinued}>CONTINUE</Button>

        </Auxiliary>
        
    )
}

export default ordersummary;
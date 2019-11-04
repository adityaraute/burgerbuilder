import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
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
            <p>Wanna checkout?</p>
        </Auxiliary>
        
    )
}

export default ordersummary;
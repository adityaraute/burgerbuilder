import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label: 'Cheese', type:'cheese'},
    {label: 'Salad', type:'salad'},
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'}

];

const buildcontrols = (props) =>(
    <div className={classes.BuildControls}>
        <h4>Total Price: ${props.price.toFixed(2)}</h4>
        {controls.map(obj=>(
            
             <BuildControl 
             key ={obj.label} 
             label = {obj.label} 
             added={()=>{props.ingredientAdded(obj.type )}}
             removed = {()=>{props.ingredientRemoved(obj.type)}}
             disabled = {props.disabled[obj.type]}
             />
             
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW!</button>
    </div>
);

export default buildcontrols;
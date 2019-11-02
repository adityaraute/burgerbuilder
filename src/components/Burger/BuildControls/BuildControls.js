import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
    {label: 'Salad', type:'salad'}

];

const buildcontrols = (props) =>(
    <div className={classes.BuildControls}>
        <h4>Total Price: $ {props.price.toFixed(2)}</h4>
        {controls.map(obj=>(
            
             <BuildControl 
             key ={obj.label} 
             label = {obj.label} 
             added={()=>{props.ingredientAdded(obj.type )}}
             removed = {()=>{props.ingredientRemoved(obj.type)}}
             disabled = {props.disabled[obj.type]}/>
             
        ))}
    </div>
);

export default buildcontrols;
import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) =>{
    return(
        <Auxiliary>
            <Backdrop show={props.show} close={props.closeThis}/>
        <div 
            className={classes.Modal}
            style={{
               transform: props.show ? 'Translate(0)' :'Translate(-100vw,-100vh)',
               opacity: props.show? '1':'0'
            }}>
            {props.children}   
         </div>
         </Auxiliary>
    )

}

export default modal;
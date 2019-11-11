import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses[1]=classes.Open;
    }
    return(
        <Auxiliary>
            <Backdrop show={props.open} close={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                <Logo height="11%" />
                <nav >
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    )
}

export default sideDrawer;
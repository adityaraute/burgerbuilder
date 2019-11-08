import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const sideDrawer = () => {
    return(
        <div className={classes.SideDrawer}>
            <Logo height="11%" />
            <nav >
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;
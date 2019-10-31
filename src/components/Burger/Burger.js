import React from 'react';

import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from '../Burger/Burger.module.css';

const burger = (props) => {
    // Haven't figured yet
    // const newIngredients = Object.keys(props.ingredients);
    // console.log(newIngredients);
    // var quants= Array(newIngredients.length);
    // console.log(quants);
    // var i =0;
    // quants= newIngredients.map(ig=>{
    //     quants[i]=props.ingredients[ig];
    //     // return quants[i++];
        
    //     console.log(quants[i])
    //     {
    //     var L =<BurgerIngredient type={ig} key={ig+quants[i]} />
    //     L =<BurgerIngredient type={ig} key={ig+quants[i]} />

    //     }
    //     console.log(L);
    //      return L;
         
    // });
    // console.log(quants);


    let transformedIngredients = Object.keys(props.ingredients).map(igkey=>
        {
            return [...Array(props.ingredients[igkey])].map((_,i)=>{
                return <BurgerIngredient key={igkey + i} type ={igkey} />;
            });
        }).reduce((arr,el) =>{
            return arr.concat(el);
        });

        if(transformedIngredients.length===0){
            transformedIngredients=<p>Start adding ingredients!</p>
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type ='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type ='bread-bottom' />

            
        </div>
    );
}

export default burger;
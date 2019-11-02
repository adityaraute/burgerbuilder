import React , {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';



const INGREDIENT_PRICES={
    cheese: 0.6,
    bacon:1,
    salad:0.5,
    meat:1.3
};



class BurgerBuilder extends Component{

    // constructor(props)
    // {
    //     super(props);
    //     this.state={...};
    // }
    

    state={
        ingredients: {
            cheese:0,
            salad:0,
            meat:0, 
            bacon:0
        },
        totalPrice: 2
    };

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }        
        updatedIngredients[type]= updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice + priceAddition;
        this.setState({ingredients:updatedIngredients, totalPrice:updatedPrice});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){return;}

        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }        
        updatedIngredients[type]= updatedCount;

        const priceAddition = -INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice + priceAddition;
        this.setState({ingredients:updatedIngredients, totalPrice:updatedPrice});
    }


    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}/>
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;
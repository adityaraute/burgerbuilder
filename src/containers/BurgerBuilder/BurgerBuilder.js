import React , {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger  from '../../components/Burger/Burger';
class BurgerBuilder extends Component{

    // constructor(props)
    // {
    //     super(props);
    //     this.state={...};
    // }

    state={
        ingredients: {
            cheese:0,
            salad:10,
            meat:0, 
            bacon:0
        }
    };
    render(){
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <div>Builder Controls</div>
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;
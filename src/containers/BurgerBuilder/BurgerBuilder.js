import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';

export default class BurgerBuilder extends React.Component {
        state = {
                ingredients: {
                        meat: 0,
                        salad: 0,
                        cheese: 0,
                        bacon: 0
                },
                prices: {
                        meat: 1.2,
                        salad: 0.9,
                        cheese: 1.1,
                        bacon: 0.7
                },
                price: 5
        }

        addIngredientHandler = ( type ) => {
                const newAmount = this.state.ingredients[type] + 1;
                const updatedIngredients = {
                        ...this.state.ingredients
                }
                updatedIngredients[type] = newAmount;
                let price = this.state.price;
                price += this.state.prices[type];
                this.setState({ingredients: updatedIngredients, price: price})

                this.props.updatePrice(price);
        }       

        removeIngredientHandler = ( type ) => {
                if(this.state.ingredients[type] !== 0){
                        const newAmount = this.state.ingredients[type] - 1;

                        const updatedIngredients = {
                                ...this.state.ingredients
                        }
                        updatedIngredients[type] = newAmount;
                        let price = this.state.price;
                        price -= this.state.prices[type];

                        this.setState({ingredients: updatedIngredients, price: price})

                        this.props.updatePrice(price);

                }
        }
        render(){
                return (
                        <React.Fragment>
                                <Modal total={this.state.price} ingredients={this.state.ingredients} modalState={this.props.modal} show={this.props.showModal}/>
                                <Burger ingredients={this.state.ingredients} />
                                <BuildControls add={this.addIngredientHandler} remove={this.removeIngredientHandler}/>
                        </React.Fragment>
                );

        }
}


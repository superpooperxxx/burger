import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const Burger = ( props ) => {
        const ingredientsObj = props.ingredients;
        let ingredients = [];
        let id = 0;
        for(let ingredient in  ingredientsObj){
                for(let i = 0; i < ingredientsObj[ingredient]; i++){
                        ingredients.push(<BurgerIngredient type={ingredient} key={'ig-' + id++}/>)
                }
        }
        


        return (
                <div className={styles.Burger}>
                        <BurgerIngredient type="bread-top"/>
                        {
                                ingredients.length !== 0 ? 
                                ingredients.map((ingredient) => {
                                        return ingredient;
                                }) : (<p className={styles.NoFood}>IN<br/>FOOD<br/>WE<br/>TRUST!</p>)
                        }
                        <BurgerIngredient type="bread-bottom"/>
                </div>
        );
}

export default Burger;
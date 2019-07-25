import React from 'react';
import styles from './Modal.module.css';

const Modal = ( props ) => {
        const ingredients = props.ingredients;
        let list = [];
        let i = 0;
        for(let ingredient in ingredients){
                if(ingredients[ingredient] !== 0){
                        list.push(<li key={'ing-'+ i++}>{ingredient}: {ingredients[ingredient]}</li>)
                }
        }

        let style = {
                display: ''
        }

        if(props.modalState === false) {
                style.display = 'none';
        }else{
                style.display = 'block';
        }

        return (
                <div className={styles.ModalBackground} style={style}>
                        <div className={styles.Modal}>
                                <h4>Your Order</h4>
                                <p>Your burger includes:</p>
                                <ul>
                                        {
                                                list.length !== 0 ? 
                                                list.map((li) => {
                                                        return li;
                                                }) : <span>Add ingredients!!!</span>
                                        }
                                </ul>
                                <p>Total price: {(props.total).toFixed(2)}$</p>
                                <div>Continue to check out?</div>
                                <div className={styles.CheckOut}>
                                        <span className={styles.Cancel} onClick={ props.show }>Cancel</span>
                                        <span className={styles.Continue}>Continue</span>
                                </div>
                        </div>
                </div>
        );
}


export default Modal;
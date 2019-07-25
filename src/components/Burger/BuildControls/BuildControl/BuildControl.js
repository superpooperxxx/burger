import React from'react';
import styles from './BuildControl.module.css';

const BuildControl = ( props ) => {
         return (
                 <div className={styles.BuildControl}>
                         <div className={styles.Ingredient}>{props.ingredient}: </div>
                         <button className={styles.Less} onClick={() => props.remove(props.type)}>less</button>
                         <button className={styles.More} onClick={() => props.add(props.type)}>more</button>
                 </div>
         )
}

export default BuildControl;
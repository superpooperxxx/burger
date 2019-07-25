import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

 const BuildControls = ( props ) => {
        const controls = [
                {label: 'Meat',type: 'meat',},
                {label: 'Cheese',type: 'cheese',},
                {label: 'Bacon',type: 'bacon',},
                {label: 'Salad',type: 'salad',}
        ]

         return (
                 <div className={styles.BuildControls}>
                         <div className={styles.Helper}>
                                {
                                        controls.map((control) => {
                                                return <BuildControl 
                                                key={control.label} 
                                                ingredient={control.label} 
                                                type={control.type} 
                                                add={props.add} 
                                                remove={props.remove}/>
                                        })
                                }
                         </div>
                 </div>
         );
 }

 export default BuildControls;
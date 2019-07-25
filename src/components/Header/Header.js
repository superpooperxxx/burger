import React from 'react';
import styles from './Header.module.css';
import BurgerLogo from '../../assets/burger.png';

const Header = ( props ) => {
        return (
                <div className={styles.Header}>
                        <div><a href='http://localhost:3000'><img src={BurgerLogo} alt='logo'/></a></div>
                        <div className={styles.Payment}>
                                <div className={styles.Total}>Total: <span className='total-price'>{(props.total).toFixed(2)}</span>$</div>
                                <button className={styles.Order} onClick={props.modal}>Order</button>
                        </div>
                </div>
        );
}

export default Header;
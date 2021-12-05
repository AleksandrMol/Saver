import * as React from 'react';
import styles from './header.css';

function Header (){
    return(
        <header>
            <h1 className={styles.example}>Hello React!!!</h1>
        </header>
    );
}
export default Header;
import React from 'react';
import styles from './card.css';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardMain } from './CardMain';
import { CardMenu } from './CardMenu';

export function Card() {
  return (
    <li className = {styles.card}>
        <CardHeader />
        <CardMain />
        <CardMenu />
        <CardFooter />
    </li>
  );
}

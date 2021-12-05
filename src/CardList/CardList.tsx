import React from 'react';
import { Card } from './Card';
import styles from './cardlist.css';

export function CardList() {
  return (
    <ul className = {styles.cardsList}>
      <Card/>
    </ul>
  );
}

import React from 'react';
import styles from './cardfooter.css';
import { Karma } from './Karma';
import { Comments } from './Comments'
import { Actions } from './Actions';

export function CardFooter() {
  return (
    <div className ={styles.controls}>
      <Karma />
      <Comments />
      <Actions />
    </div>
  );
}

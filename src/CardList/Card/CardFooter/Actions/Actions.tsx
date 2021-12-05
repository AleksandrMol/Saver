import React from 'react';
import styles from './actions.css';
import { DeleteBtn } from './DeleteBtn';
import { SaveBtn } from './SaveBtn';
import { ShareBtn } from './ShareBtn';

export function Actions() {
  return (
    <div className = {styles.actions}>
      <ShareBtn />
      <SaveBtn />
      <DeleteBtn />
    </div>
  );
}

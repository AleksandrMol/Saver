import React from 'react';
import styles from './cardmain.css';

export function CardMain() {
  return (
    <div className = {styles.preview}>
      <img 
        className = {styles.previewImg}
        src="https://cdn.dribbble.com/users/4256747/screenshots/16983859/media/96992a243cd33ff308f8cd1e2f8af7ea.png?compress=1&resize=400x300" 
        alt="IMG" 
      />
    </div>
  );
}

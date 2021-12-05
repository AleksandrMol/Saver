import React from 'react';
import styles from './title.css';

export function Title() {
  return (
    <h2 className = {styles.title}>
      <a href="#Title" className = {styles.postLink}>
        Следует отметить, что в большинстве случаев, расширение дорог это дорогостоящая ошибка.
      </a>
    </h2>
  );
}

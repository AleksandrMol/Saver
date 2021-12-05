import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className = {styles.metaData}>
      <div className = {styles.userLink}>
        <img className = {styles.avatar} src="https://cdn.dribbble.com/users/1667332/avatars/mini/edd45777913e5de4434a1a1b812c76cf.png?1566878129" alt="AVA" />
        <a href="#user-url" className = {styles.username}>Alex</a>
      </div>
      <span className = {styles.createdAt}>
        <span className = {styles.publishedLabel}>опубликовано </span>
        4 часа назад
      </span>
    </div>

     
  );
}

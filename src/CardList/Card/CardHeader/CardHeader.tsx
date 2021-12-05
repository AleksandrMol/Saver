import React from 'react';
import styles from './cardheader.css';
import { Title } from './Title';
import { TextContent } from './TextContent';

export function CardHeader() {
  return (
    <div className = {styles.textContent}>
      <TextContent />
      <Title />
    </div>
  );
}

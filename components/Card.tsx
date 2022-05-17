import React from 'react';
import styles from '../styles/Components.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;

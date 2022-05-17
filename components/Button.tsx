import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from '../styles/Components.module.css';

type Props = {
  text: string;
  href: string;
};

const Button = ({ text, href }: Props) => {
  return (
    <Link href={href}>
      <a style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.button}>
          {text} &nbsp;
          <Icon icon='akar-icons:chevron-right' />
        </div>
      </a>
    </Link>
  );
};

export default Button;

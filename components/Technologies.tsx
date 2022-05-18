import React from 'react';
import styles from '../styles/Components.module.css';
import { Icon } from '@iconify/react';

const colors: { [key: string]: string } = {
  'bxl:css3': '#1a7fc0',
  'bxl:sass': '#cc6699',
  'bxl:tailwind-css': '#36b6f0',
  'bxl:react': '#47cef7',
  'cib:next-js': '#393E41',
  'bxl:javascript': '#efd81d',
  'mdi:language-typescript': '#2f73bf',
  'bxl:nodejs': '#7ec728',
  'simple-icons:express': '#393E41',
  'bxl:mongodb': '#14a44d',
  'file-icons:prisma': '#393E41',
  'bxl:python': '#f5cc44',
  'bxl:flask': '#393E41',
  'bxl:postgresql': '#2f5e8d',
};

type Props = {
  highlighted: Array<string>;
};

const IconWrap = ({
  icon,
  highlighted,
}: {
  icon: string;
  highlighted: boolean;
}) => {
  return (
    <div
      style={{
        background: highlighted ? '#E1E5E8' : 'transparent',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%',
        transition: 'all 300ms ease-in-out',
      }}
    >
      <Icon
        icon={icon}
        style={{
          color: highlighted ? colors[icon] ?? '#82878A' : '#82878A',
        }}
      />
    </div>
  );
};

const Technologies = ({ highlighted }: Props) => {
  return (
    <div className={styles.technologies}>
      <h3>Core Technologies</h3>
      <div>
        <p>Frontend</p>
        <div className={styles.icons}>
          <IconWrap
            highlighted={highlighted.includes('bxl:css3')}
            icon='bxl:css3'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:sass')}
            icon='bxl:sass'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:tailwind-css')}
            icon='bxl:tailwind-css'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:react')}
            icon='bxl:react'
          />
          <IconWrap
            highlighted={highlighted.includes('cib:next-js')}
            icon='cib:next-js'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:javascript')}
            icon='bxl:javascript'
          />
          <IconWrap
            highlighted={highlighted.includes('mdi:language-typescript')}
            icon='mdi:language-typescript'
          />
        </div>
        <p>Backend</p>
        <div className={styles.icons}>
          <IconWrap
            highlighted={highlighted.includes('bxl:nodejs')}
            icon='bxl:nodejs'
          />
          <IconWrap
            highlighted={highlighted.includes('simple-icons:express')}
            icon='simple-icons:express'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:mongodb')}
            icon='bxl:mongodb'
          />
          <IconWrap
            highlighted={highlighted.includes('file-icons:prisma')}
            icon='file-icons:prisma'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:python')}
            icon='bxl:python'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:flask')}
            icon='bxl:flask'
          />
          <IconWrap
            highlighted={highlighted.includes('bxl:postgresql')}
            icon='bxl:postgresql'
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

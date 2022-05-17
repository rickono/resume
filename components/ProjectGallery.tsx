import React, { SetStateAction, Dispatch } from 'react';
import Card from './Card';
import Image from 'next/image';
import styles from '../styles/Components.module.css';

type ProjectProps = {
  image: string;
  project: string;
  techs: string[];
};

const ProjectGallery = ({
  setHighlighted,
}: {
  setHighlighted: Dispatch<SetStateAction<string[]>>;
}) => {
  const Project = ({ image, project, techs }: ProjectProps) => {
    return (
      <div
        className={styles.project}
        onMouseEnter={() => {
          setHighlighted(techs);
        }}
      >
        <h4>{project}</h4>
        <Image
          src={image}
          alt={`Preview of the ${project} app.`}
          width='340'
          height='200'
        />
      </div>
    );
  };
  return (
    <div className={styles.projectGallery}>
      <Project
        image='/images/timbreprev.png'
        project='Timbre'
        techs={[
          'bxl:sass',
          'bxl:react',
          'bxl:javascript',
          'bxl:nodejs',
          'simple-icons:express',
          'bxl:mongodb',
        ]}
      />
      <Project
        image='/images/wordleprev.png'
        project='Lying Wordle'
        techs={[
          'bxl:tailwind-css',
          'bxl:react',
          'bxl:javascript',
          'bxl:python',
          'bxl:flask',
          'bxl:postgresql',
        ]}
      />
      <Project
        image='/images/pskvp.png'
        project='PSK VP'
        techs={[
          'bxl:tailwind-css',
          'bxl:react',
          'cib:next-js',
          'bxl:javascript',
          'file-icons:prisma',
          'bxl:mongodb',
        ]}
      />
    </div>
  );
};

export default ProjectGallery;

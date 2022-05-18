import React, { SetStateAction, Dispatch, useState } from 'react';
import Card from './Card';
import Image from 'next/image';
import styles from '../styles/Components.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import projects from './ProjectModals';

type ProjectProps = {
  image: string;
  project: string;
  techs: string[];
};

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};

const ProjectGallery = ({
  setHighlighted,
  highlighted,
}: {
  setHighlighted: Dispatch<SetStateAction<string[]>>;
  highlighted: Array<string>;
}) => {
  const [selected, setSelected] = useState<string | undefined>();
  const Project = ({ image, project, techs }: ProjectProps) => {
    return (
      <div
        className={`${styles.project}`}
        onMouseEnter={() => {
          if (
            techs.length !== highlighted.length ||
            !techs.every(function (value, index) {
              return value === highlighted[index];
            })
          ) {
            setHighlighted(techs);
          }
        }}
        onClick={() => {
          setSelected(project);
        }}
      >
        <h4>{project}</h4>
        <div>
          <Image
            src={image}
            alt={`Preview of the ${project} app.`}
            width='340'
            height='200'
          />
        </div>
        <AnimatePresence exitBeforeEnter>
          {selected === project && (
            <motion.div
              style={{
                backgroundColor: 'white',
                zIndex: 3,
                position: 'fixed',
                left: '20%',
                top: '5%',
                width: '60%',
              }}
              variants={dropIn}
              initial='hidden'
              animate='visible'
              exit='exit'
              key={project}
            >
              {projects.get(project) ?? null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  return (
    <div className={`${styles.projectGallery}`}>
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
      <AnimatePresence>
        {selected !== undefined && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#393E41',
              zIndex: '2',
            }}
            key='background'
            onClick={() => {
              setSelected(undefined);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;

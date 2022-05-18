import React, { useState } from 'react';
import styles from '../styles/Components.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type JobProps = {
  company: string;
  role: string;
  time: string;
  img: string;
  selected: boolean | undefined;
  details: Array<string>;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => any;
};

const Job = ({
  company,
  role,
  time,
  img,
  selected,
  onClick,
  details,
}: JobProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.job} ${
        selected === false ? styles.jobnotselected : styles.jobselected
      }`}
    >
      <div className={styles.jobInfo}>
        <Image src={img} alt={`${company} logo`} width='50px' height='50px' />
        <AnimatePresence>
          {(selected || selected === undefined) && (
            <motion.div
              key={`info${company}`}
              initial={{ opacity: 0, fontSize: 0 }}
              animate={{ opacity: 1, fontSize: '1rem' }}
              exit={{ opacity: 0, fontSize: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4>{company}</h4>
              <em>{role}</em>
              <p>{time}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence exitBeforeEnter>
        {selected && (
          <motion.div
            key={company}
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0, fontSize: 0, padding: 0 }}
            animate={{ opacity: 1, fontSize: '1rem' }}
            exit={{ opacity: 0, fontSize: 0, padding: 0 }}
            transition={{ duration: 0.5 }}
            layout
          >
            <ul>
              {details.map((point) => (
                <React.Fragment key={point}>
                  <li>{point}</li>
                  <br />
                </React.Fragment>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WorkTimeline = () => {
  const [selected, setSelected] = useState<0 | 1 | 2 | 3 | undefined>(
    undefined
  );
  return (
    <motion.div className={styles.jobs}>
      <Job
        img='/images/zaya.webp'
        company='Zaya Health'
        role='Fullstack SWE Intern'
        time='January 2022-Present'
        details={[
          'Developed a frontend calendar UI in React for clients to schedule sessions easily.',
          'Wrote backend routes that handled session scheduling and interfaced with the calendar UI.',
        ]}
        selected={selected === undefined ? undefined : selected === 0}
        onClick={() => setSelected(selected === 0 ? undefined : 0)}
      />
      <Job
        img='/images/bch.png'
        company="Boston Children's Hospital"
        role='Computational Neuroscience Intern'
        time='June-August 2021'
        details={[
          'Did various statistical and machine learning analysis on the Adolescent Brain Cognitive Development dataset, including NN, CNN, random forest, and other algorithms.',
          'Developed a pipeline in MATLAB to help people without machine learning experience do machine learning analysis, from simpler random forest to deep neural networks.',
        ]}
        selected={selected === undefined ? undefined : selected === 1}
        onClick={() => setSelected(selected === 1 ? undefined : 1)}
      />
      <Job
        img='/images/ml.png'
        company='MIT Media Lab'
        role='Undergraduate Researcher'
        time='January 2021-May 2022'
        details={[
          'Worked on a project to detect physical patterns through a facemask, with plans to extend to other devices.',
          'Worked on firmware development in C for the facemask (DA14531 and DA14585).',
          'Developed a mobile application in React Native that interfaces with the facemask.',
          'Developed a backend Flask server to store data with PostgreSQL from the mobile app.',
        ]}
        selected={selected === undefined ? undefined : selected === 2}
        onClick={() => setSelected(selected === 2 ? undefined : 2)}
      />
      <Job
        img='/images/bcs.gif'
        company='MIT Brain and Cognitive Sciences'
        role='Undergraduate Researcher'
        time='January 2020-January 2021'
        details={[
          'Built an anatomical map of a Macaque brain to automatically sort recordings in MATLAB',
          'Made data structures and functions to easily access sorted data.',
        ]}
        selected={selected === undefined ? undefined : selected === 3}
        onClick={() => setSelected(selected === 3 ? undefined : 3)}
      />
    </motion.div>
  );
};

export default WorkTimeline;

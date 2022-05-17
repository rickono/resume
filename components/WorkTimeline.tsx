import React from 'react';
import styles from '../styles/Components.module.css';
import Image from 'next/image';

type JobProps = {
  company: string;
  role: string;
  time: string;
  img: string;
};

const Job = ({ company, role, time, img }: JobProps) => {
  return (
    <div className={styles.job}>
      <Image src={img} alt={`${company} logo`} width='50px' height='50px' />
      <h4>{company}</h4>
      <em>{role}</em>
      <p>{time}</p>
    </div>
  );
};

const WorkTimeline = () => {
  return (
    <div className={styles.jobs}>
      <Job
        img='/images/zaya.webp'
        company='Zaya Health'
        role='Fullstack SWE Intern'
        time='January 2022-Present'
      />
      <Job
        img='/images/bch.png'
        company="Boston Children's Hospital"
        role='Computational Neuroscience Intern'
        time='June-August 2021'
      />
      <Job
        img='/images/ml.png'
        company='MIT Media Lab'
        role='Undergraduate Researcher'
        time='January 2021-May 2022'
      />
      <Job
        img='/images/bcs.gif'
        company='MIT Brain and Cognitive Sciences'
        role='Undergraduate Researcher'
        time='January 2020-January 2021'
      />
    </div>
  );
};

export default WorkTimeline;

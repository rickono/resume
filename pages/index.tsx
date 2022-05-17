import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Card from '../components/Card';
import Button from '../components/Button';
import WorkTimeline from '../components/WorkTimeline';
import ProjectGallery from '../components/ProjectGallery';
import Technologies from '../components/Technologies';

const Home: NextPage = () => {
  const [highlighted, setHighlighted] = useState<Array<string>>([]);
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.introText}>
          <p style={{ fontSize: '1.4rem' }}>Hello, I&#x27;m</p>
          <h1 style={{ fontSize: '4rem' }}>Rick Ono!</h1>
          <p>MIT Class of 2023, Course 6-3: Computer Science</p>
          <div className={styles.navbar}>
            <a
              onClick={(e) => {
                document &&
                  document
                    .getElementById('about')
                    ?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              About Me
            </a>
            <a
              onClick={(e) => {
                document &&
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              Projects
            </a>
            <a
              onClick={(e) => {
                document &&
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </a>
          </div>
        </div>
        <Icon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          icon='akar-icons:chevron-down'
          onClick={(e) => {
            document &&
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
      <div className={`${styles.about}`} id='about'>
        <div className={styles.container}>
          <h2>About Me</h2>
          <p>
            I am a junior at MIT studying computer science with a wide breadth
            of interests and hobbies.
          </p>
          <div className={styles.aboutSection}>
            <h3>
              <em>Academics</em>
            </h3>
            Over the course of my time at MIT, I have taken classes past the
            general requirments in many disciplines, including computer science,
            neuroscience, mathematics, chemistry, and biology. I have found a
            passion in computer science, especially programming and theory.
            <div className={styles.cards}>
              <Card>
                <div style={{ width: '100px', margin: 'auto' }}>
                  <Image
                    src='/images/mitlogo.png'
                    width='80px'
                    height='40px'
                    alt='MIT logo'
                  />
                </div>
                <div>
                  <h3>
                    MIT{' '}
                    <span style={{ fontWeight: 'normal', fontSize: '1rem' }}>
                      GPA: 4.8/5
                    </span>
                  </h3>
                  <h4>Major</h4>
                  <p>6-3: Computer Science</p>
                  <p style={{ marginLeft: '1rem' }}>
                    <em>
                      Software Construction, Design and Analysis of Algorithms,
                      Theory of Computation, Computation Structures, Machine
                      Learning, Signal Processing
                    </em>
                  </p>
                  <br />
                  <h4>Minor</h4>
                  <p>9: Brain and Cognitive Science</p>
                  <p style={{ marginLeft: '1rem' }}>
                    <em>
                      Computational Neuroscience, Computational Cognitive
                      Science, Distributed Neural Circuits, Machine Vision
                    </em>
                  </p>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    color: '#0504aa',
                    fontFamily: 'Georgia, "Times New Roman", Times, serif;',
                    width: '115px',
                    margin: '0 auto',
                    paddingBottom: '1rem',
                  }}
                >
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>Phillips&nbsp;</div>
                    <div>Academy</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                    }}
                  >
                    <div>A</div>
                    <div>N</div>
                    <div>D</div>
                    <div>O</div>
                    <div>V</div>
                    <div>E</div>
                    <div>R</div>
                  </div>
                </div>
                <h3>
                  Phillips Academy, Andover{' '}
                  <span style={{ fontWeight: 'normal', fontSize: '1rem' }}>
                    GPA: 5.4/6
                  </span>
                </h3>
                <p>
                  Varsity swimming, water polo, crew. <em>Phillipian</em>{' '}
                  Editor. Calisthenics club founder.
                </p>
                <div>
                  <p>
                    <b>ACT</b>: 36
                  </p>
                  <p>
                    <b>AP Chemistry, Computer, Calculus BC, Physics C</b>: 5
                  </p>
                  <p>
                    <b>SAT II Math, Chemistry</b>: 800
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className={styles.aboutSection}>
            <h3>
              <em>Work Experience</em>
            </h3>
            <WorkTimeline />
          </div>
          <div className={styles.aboutSection}>
            <h3>
              <em>Leadership</em>
            </h3>
            <div className={styles.cards}>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <div style={{ marginRight: '1rem' }}>
                    <Image
                      src='/images/mitsports.png'
                      alt='MIT Sports Logo'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div>
                    <h3>Men&apos;s Lightweight Rowing, NCAA D1</h3>
                    <p>Captain 2022-23</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <div style={{ marginRight: '1rem' }}>
                    <Image
                      src='/images/psk.png'
                      alt='Phi Sigma Kappa'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div>
                    <h3>Phi Sigma Kappa, Omicron Chapter</h3>
                    <p>Vice President: Spring 2022</p>
                    <p>Recruitment Chair: Fall 2021</p>
                    <p>Social Chair: Spring 2020</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.projects}`} id='projects'>
        <div className={styles.container}>
          <h2>Projects</h2>
          <p>
            In my free time, I enjoy creating websites and exploring new
            technologies. Here is a sample of some of my recent personal
            projects!
          </p>
          <ProjectGallery setHighlighted={setHighlighted} />
        </div>
        <Technologies highlighted={highlighted} />
      </div>
      <div className={`${styles.contact}`} id='contact'>
        <div className={styles.container}>
          <div className={styles.contacts}>
            <h3>Contact</h3>
            <div className={styles.contactIcons}>
              <a href='mailto:rrono@mit.edu'>
                <div className={styles.contactIcon}>
                  <Icon icon='eva:email-outline' />
                  <p>Email</p>
                </div>
              </a>
              <a href='https://www.linkedin.com/in/rick-ono-6335b3186/'>
                <div className={styles.contactIcon}>
                  <Icon icon='akar-icons:linkedin-box-fill' />
                  <p>LinkedIn</p>
                </div>
              </a>
              <div className={styles.contactIcon}>
                <Icon icon='carbon:document' />
                <p>Resume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

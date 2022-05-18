import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
type LightboxProps = {
  images: Array<[string, string]>;
  width?: number;
  height?: number;
};

const Lightbox = ({ images }: LightboxProps) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, -1]);
  const turnPage = (increment: number) => {
    setPage([
      (increment + page) % images.length >= 0
        ? (increment + page) % images.length
        : images.length - 1,
      increment,
    ]);
  };
  return (
    <div style={{ width: '100%', maxHeight: '100%', position: 'relative' }}>
      <AnimatePresence custom={direction} exitBeforeEnter>
        <motion.div
          key={images[page][0]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={images[page][0]}
            alt={images[page][1]}
            width='100%'
            height='60%'
            layout='responsive'
            objectFit='contain'
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        whileHover={{
          color: '#fff',
          scale: 1.1,
        }}
        style={{
          position: 'absolute',
          left: '1rem',
          top: 'calc(50% - 1rem)',
          cursor: 'pointer',
          fontSize: '2rem',
        }}
      >
        <Icon
          icon='akar-icons:circle-chevron-left'
          onClick={() => turnPage(-1)}
        />
      </motion.div>
      <motion.div
        whileHover={{
          color: '#fff',
          scale: 1.1,
        }}
        style={{
          position: 'absolute',
          right: '1rem',
          top: 'calc(50% - 1rem)',
          cursor: 'pointer',
          fontSize: '2rem',
        }}
      >
        <Icon
          icon='akar-icons:circle-chevron-right'
          onClick={() => turnPage(1)}
        />
      </motion.div>
    </div>
  );
};

const Modal = ({
  name,
  description,
  images,
  link,
  icons,
}: {
  name: string;
  description: Array<string>;
  images: Array<[string, string]>;
  link?: string;
  icons: Array<JSX.Element>;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem 2rem',
        gap: '0.4rem',
        boxShadow: '0px 0px 20px 4px #393E4188',
      }}
    >
      <h2>{name}</h2>
      {description.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          fontSize: '20px',
          color: '#393E41',
          padding: '1rem 0',
        }}
      >
        {icons.map((icon) => {
          return icon;
        })}
      </div>
      {link && (
        <motion.a
          href={link}
          target='_blank'
          rel='noreferrer'
          style={{
            backgroundColor: '#393E41',
            color: '#F3F5F6',
            padding: '0.4rem 0.8rem',
            borderRadius: '0.4rem',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Live Demo
        </motion.a>
      )}
      <Lightbox images={images} />
    </div>
  );
};

const projects: Map<string, JSX.Element> = new Map([
  [
    'Timbre',
    <Modal
      key='timbre'
      name='Timbre'
      description={[
        'Timbre is a web application to help curate your perfect playlist. Navigate a generated landscape to explore songs curated to your tastes.',
        'This project helped me become improve with React state management, and become familiar with Three JS, a framework for 3D graphics in the web.',
      ]}
      images={[
        ['/images/timbreprev.png', 'Timbre Preview'],
        ['/images/timbre1.png', 'Timbre Preview'],
        ['/images/timbre2.png', 'Timbre Preview'],
        ['/images/timbre3.png', 'Timbre Preview'],
      ]}
      link='https://timbre.life'
      icons={[
        <Icon icon='akar-icons:react-fill' key='react' />,
        <Icon icon='akar-icons:javascript-fill' key='js' />,
        <Image
          src='/images/threejs.svg'
          key='three'
          width='20'
          height='20'
          alt='three js logo'
        />,
        <Icon icon='akar-icons:sass-fill' key='sass' />,
        <Icon icon='gg:framer' key='framer' />,
        <Icon icon='akar-icons:node-fill' key='node' />,
        <Icon icon='simple-icons:express' key='express' />,
        <Icon icon='bxl:mongodb' key='mongo' />,
        <Icon icon='akar-icons:spotify-fill' key='spotify' />,
        <Icon icon='bi:git' key='git' />,
        <Icon icon='akar-icons:github-fill' key='github' />,
        <Icon icon='cib:postman' key='postman' />,
      ]}
    />,
  ],
  [
    'PSK VP',
    <Modal
      key='pskvp'
      name='PSK VP'
      description={[
        'As vice president of my fraternity, I was responsible for assigning chores to the 40 people who lived in the house. I created this website to help streamline my workflow and make it easy for people to find their assignments.',
        'This project was simple, but one of the first that I built for other people to use, so I made very intentional design choices to make the UX intuitive. I used Next JS for static site generation so that static pages could be served even if the database went down. This was also my first time using the Prisma ORM.',
      ]}
      images={[
        ['/images/pskvp.png', 'PSK VP preview'],
        ['/images/pskvp1.png', 'PSK VP preview'],
        ['/images/pskvp2.png', 'PSK VP preview'],
      ]}
      icons={[
        <Icon icon='akar-icons:javascript-fill' key='js' />,
        <Icon icon='akar-icons:react-fill' key='react' />,
        <Icon icon='cib:next-js' key='next' />,
        <Icon icon='bxl:tailwind-css' key='tailwind' />,
        <Icon icon='file-icons:prisma' key='prisma' />,
      ]}
    />,
  ],
  [
    'Lying Wordle',
    <Modal
      key='lyingwordle'
      name='Lying Wordle'
      description={[
        'I created this game so that my friends and I could play a "Lying Wordle", where the classic Wordle game would lie on any given hint a percentage of the time.',
        'This started as a tiny frontend app, but I had a lot of fun working on it, and ended up adding a full backend and database so people could create accounts and save their scores: both time and guesses.',
      ]}
      images={[
        ['/images/wordleprev.png', 'Lying Wordle preview'],
        ['/images/wordle1.png', 'Lying Wordle preview'],
        ['/images/wordle2.png', 'Lying Wordle preview'],
      ]}
      icons={[
        <Icon icon='akar-icons:javascript-fill' key='js' />,
        <Icon icon='akar-icons:react-fill' key='react' />,
        <Icon icon='bxl:tailwind-css' key='tailwind' />,
        <Icon icon='akar-icons:python-fill' key='python' />,
        <Icon icon='bxl:flask' key='flask' />,
        <Icon icon='akar-icons:postgresql-fill' key='postgres' />,
      ]}
    />,
  ],
]);

export default projects;

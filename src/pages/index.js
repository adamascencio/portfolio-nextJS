import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import cover from '../../public/cover.jpg';
import Projects from '../components/Projects';
import { contact } from '../config';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Adam Ascencio Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='pt-7 flex justify-between'>
            <h1 className='text-xl dark:text-white'>DEVELOPEDBY</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2x dark:text-white'/>
              </li>
              <li>
                <a 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
                  href={contact.resume} 
                  target='_blank' 
                  rel='noreferrer noopener'>
                Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-left p-8 md:text-center'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Adam Ascencio</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer</h3>
            <p className='text-md text-gray-800 py-2 md:text-xl dark:text-white'>I build things for the web</p>
          </div>
          <div className='text-5xl flex justify-center gap-x-16 py-3 text-gray-600 dark:text-white'>
          <Link 
            href={contact.github}
            target='_blank'
            rel='noreferrer noopener'
          >
            <AiFillGithub />
          </Link>
          <Link 
            href={contact.linkedin}
            target='_blank'
            rel='noreferrer noopener'
          >
            <AiFillLinkedin />
          </Link>
          </div>
          <div className='mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-7 md:h-96 md:w-96'>
            <Image src={cover} alt='cover photo' />
          </div>
        </section>
        <section className='min-h-screen py-10'>
          <div className='text-left max-w-xl'>
            <h2 className='text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium'>About Me</h2>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Hi! I&apos;m Adam and I love building things for the web. My passion for coding was sparked when I built my first cat photo app on FreeCodeCamp. I&apos;ve been hooked ever since.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I&apos;m looking to work on consumer-facing products that improve people&apos;s lives. I&apos;ve recently completed a full-stack software engineering bootcamp. See below for some of the technologies I&apos;ve been working with recently.
            </p>
          </div>
          <div className='mt-10 grid place-items-center grid-cols-3 gap-10'>
            <FaHtml5 className='text-5xl text-red-600' />
            <FaCss3Alt className='text-5xl text-blue-600' />
            <FaJs className='text-5xl text-yellow-400' />
            <SiTailwindcss className='text-5xl text-blue-400' />
            <FaReact className='text-5xl text-blue-400' />
            <FaNode className='text-5xl text-green-400' />
            <SiMongodb className='text-5xl text-green-600' />
            <SiExpress className='text-5xl text-gray-600 dark:text-white' />
            <TbBrandNextjs className='text-5xl text-black dark:text-white' />
          </div>
        </section>
        <Projects />
      </main>
    </div>
  )
}

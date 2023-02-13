import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import cover from '../../public/cover.jpg';
import project1 from '../../public/travel-buddy.jpeg';
import project2 from '../../public/homecourt.png';
import project3 from '../../public/powerlist.png';
import project4 from '../../public/blackjack.png';
import { projects } from '../../src/config';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Home() {
  const projectImages = [project1, project2, project3, project4];
  const projectSections = projects.map((project, idx) => (
    <section key={idx} className='min-h-screen py-10'>
      <div className='text-left grid auto-rows-auto gap-4'>
        {idx === 0 && <h2 className='text-5xl py-2 text-teal-600 font-medium'>Projects</h2>}
        <div className='flex justify-between'>
          <h3 className='text-2xl mb-5'>{project.name}</h3>
          <div className='text-right mt-auto'>
            <ul>
              <Link 
                href={project.href}
                target="_blank" 
                rel="noreferrer noopener"
              >
                <li className='underline text-sm'>View Deployed App</li>
              </Link>
              <Link 
                href={project.github}
                target="_blank" 
                rel="noreferrer noopener"
              >
                <li className='underline text-sm'>Source Code</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='grid gap-5'>
          <p>{project.description}</p>
          <p>{project.tech.join(', ')}</p>
        </div>
        <div className='place-self-center'>
          <Image 
            src={projectImages[idx]} 
            alt={`${project.name} screenshot`} 
            width={'auto'}
            height={'auto'}
          />
        </div>
      </div>
    </section>
  ));
  return (
    <>
      <Head>
        <title>Adam Ascencio Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='pt-10 flex justify-between'>
            <h1 className='text-xl'>DEVELOPEDBY</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2x'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-left p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Adam Ascencio</h2>
            <h3 className='text-2xl py-2'>Developer</h3>
            <p className='text-md text-gray-800 py-2'>I build things for the web</p>
          </div>
          <div className='text-5xl flex justify-center gap-x-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className='mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-16 md:h-96 md:w-96'>
            <Image src={cover} alt='cover photo' />
          </div>
        </section>
        <section className='min-h-screen py-10'>
          <div className='text-left'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>About Me</h2>
            <p className='text-md py-2 leading-8 text-gray-800'>Hi! I&apos;m Adam and I love building things for the web. My passion for coding was sparked when I built my first cat photo app on FreeCodeCamp. I&apos;ve been hooked ever since.</p>
            <p className='text-md py-2 leading-8 text-gray-800'>I&apos;m looking to work on consumer-facing products that improve people&apos;s lives. I&apos;ve recently completed a full-stack software engineering bootcamp. See below for some of the technologies I&apos;ve been working with recently.</p>
          </div>
          <div className='mt-10 grid place-items-center grid-cols-3 gap-10'>
            <FaHtml5 className='text-5xl text-red-600' />
            <FaCss3Alt className='text-5xl text-blue-600' />
            <FaJs className='text-5xl text-yellow-400' />
            <SiTailwindcss className='text-5xl text-blue-400' />
            <FaReact className='text-5xl text-blue-400' />
            <FaNode className='text-5xl text-green-400' />
            <SiMongodb className='text-5xl text-green-600' />
            <SiExpress className='text-5xl text-gray-600' />
            <TbBrandNextjs className='text-5xl text-black' />
          </div>
        </section>
        {projectSections}
        <footer>
          <div className='text-center'></div>
        </footer>
      </main>
    </>
  )
}

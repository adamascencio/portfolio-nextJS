import Link from 'next/link';
import Image from 'next/image';
import Contact from '../components/Contact';
import { projects } from '../config';
import project1 from '../../public/travel-buddy.jpeg';
import project2 from '../../public/homecourt.png';
import project3 from '../../public/powerlist.png';
import project4 from '../../public/blackjack.png';

export default function Projects() {
  const projectImages = [project1, project2, project3, project4];
  const projectSections = projects.map((project, idx) => (
    <section key={idx} className={`min-h-screen py-10 dark:text-white`}>
      <div className='text-left grid auto-rows-auto gap-4'>
        {idx === 0 && <h2 className='text-4xl md:text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium'>Projects</h2>}
        <div className='flex justify-between'>
          <h3 className='text-2xl font-medium self-center md:text-3xl lg:text-4xl'>{project.name}</h3>
          <div className='text-center mt-auto'>
            <ul className='text-sm grid gap-2'>
              <Link 
                href={project.href}
                target="_blank" 
                rel="noreferrer noopener"
              >
                <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>View App</li>
              </Link>
              <Link 
                href={project.github}
                target="_blank" 
                rel="noreferrer noopener"
              >
                <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Github</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='mt-2 grid gap-5 max-w-md'>
          <p>{project.description}</p>
          <p>{project.tech.join(', ')}</p>
        </div>
        <div>
          <div className='relative w-4/5 mx-auto mt-5 max-w-xs shadow-2xl dark:border dark:border-white'>
            <Image 
              src={projectImages[idx]} 
              alt={`${project.name} screenshot`} 
              width={'100%'}
              height={'100%'}
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
      {idx === 3 && <Contact />}
    </section>
  ));

  return projectSections;
}
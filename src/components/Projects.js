import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../config';
import project1 from '../../public/travel-buddy.jpeg';
import project2 from '../../public/homecourt.png';
import project3 from '../../public/powerlist.png';
import project4 from '../../public/blackjack.png';

export default function Projects() {
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
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
    </section>
  ));

  return projectSections;
}
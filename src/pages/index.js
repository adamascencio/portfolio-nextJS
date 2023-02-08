import Head from 'next/head';
import Image from 'next/image';
import cover from '../../public/cover.jpg';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Ascencio Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 flex justify-between'>
            <h1 className='text-xl'>DEVELOPEDBY</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2x'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Adam Ascencio</h2>
            <h3 className='text-2xl py-2'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>I build things for the web</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className='mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
            <Image src={cover} alt='cover photo' />
          </div>
        </section>
      </main>
    </>
  )
}

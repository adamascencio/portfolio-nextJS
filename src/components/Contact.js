import { contact } from '../config';
import { MdMail, MdLocationPin } from 'react-icons/md';

export default function Contact() {
  return (
    <footer className='mt-8 grid place-items-center gap-6'>
      <div>
        <MdMail className='mx-auto text-2xl text-red-600'/>
        <p>{contact.email}</p>
      </div>  
      <div>
        <MdLocationPin className='mx-auto text-2xl text-red-600'/>
        <p>{contact.location}</p>
      </div>
    </footer>
  );
}
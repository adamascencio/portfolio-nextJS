import { contact } from '../config';
import { MdMail, MdLocationPin } from 'react-icons/md';

export default function Contact() {
  return (
    <footer>
      <div>
        <MdMail />
        <p>{contact.email}</p>
      </div>  
      <div>
        <MdLocationPin />
        <p>{contact.location}</p>
      </div>
    </footer>
  );
}
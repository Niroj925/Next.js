
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Navbar from '@/component/Navbar';

export default function Home() {
  return (
    <>
  <Navbar/>
      <header className="header">
        <div>
          Hello Nepal
        </div>
        <div className='textbox'>
         <h3>
          <span>Welcome to MERN University</span>
           <span>mero Nepal</span>
         </h3>
        
        </div>
      </header>
      
    </>
  )
}


import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <nav>
      <ul className='menu-bar'>
        <li>
           <Link href='/home'>        
            Home
          </Link>
        </li>

       <li>
         <Link href='/contact'>
       
            contact
       
          </Link>
       </li>
         
         <li>
           <Link href='/about'>
         
            About
        
          </Link>
         </li>
         <li>
          <Link href='/blog'>
        
            Blog
         
          </Link>
         </li>
          
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
        a {
          margin-right: 10px;
        }
      `}</style>
    </nav>
    
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

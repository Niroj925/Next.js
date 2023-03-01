import Link from 'next/link'

const Navbar=()=>{
    return(
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
    
        </>
    )
}
export default Navbar
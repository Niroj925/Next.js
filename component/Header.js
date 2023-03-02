import Link from 'next/link'

const Headers=()=>{
    return(
        <>
          <nav>
      <ul className='menu-bar'>
        <li>
           <Link href='/'>        
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
    </nav>
    
        </>
    )
}
export default Headers
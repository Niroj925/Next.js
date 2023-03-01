//this is our own custome page is any page is not found 
import Link from 'next/link'
import {useRouter} from 'next/router';
import { useEffect } from 'react';

const noPage=()=>{
    const router=useRouter();
  const handleClick=()=>{
    router.push('/');
  }

  useEffect(()=>{
    //this will redirect homepage after 5 seconds when typed incorrect url
    setTimeout(()=>{
        router.push('/')
    },5000)
  })
    return(
        <>
        <h3>404</h3>
        <h3>page not found gaich</h3>
        <Link href='/'>Home</Link>
        <br/>
        <a onClick={handleClick} style={{cursor:'pointer'}}>Back to Home</a>
        </>
    )
}
export default noPage
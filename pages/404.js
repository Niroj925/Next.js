//this is our own custome page is any page is not found 
import Link from 'next/link'
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import Navbar from '@/component/Navbar';
import styles from "@/styles/404.module.css";

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
        <Navbar/>
        <h3>404</h3>
        <h3>page not found gaich</h3>
        <Link href='/' className='btc'>Home</Link>
        <br/>
        <a onClick={handleClick} className={`${styles.home} ${styles.font_weight}`}>Back to Home</a>
        </>
    )
}
export default noPage

import style from '@/styles/index.module.css'
import Navbar from '@/component/Navbar';
import Head  from 'next/head';

export default function Home() {
  return (
    <>
    {/* content of meta tag are essential for SEO  */}
    <Head>
      <title>Basic next</title>
      <meta name='description' content="next practice" />
      <meta  name='keyword' content='HTML,CSS,JS,React,Next' />
       <meta name='author' content='Thapakaji'/>
    </Head>
  <Navbar/>
      <header className="header">
        <div>
          Hello Nepal
        </div>
        <div className={style.textbox}>
         <h3>
          <span>Welcome to MERN University</span>
           <span>mero Nepal</span>
         </h3>
        
        </div>
      </header>
      
    </>
  )
}

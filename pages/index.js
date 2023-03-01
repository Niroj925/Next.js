
import style from '@/styles/index.module.css'
import Navbar from '@/component/Navbar';

export default function Home() {
  return (
    <>
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

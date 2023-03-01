//to access blog folder with their respective name which is of name index.js file name 
import Navbar from '@/component/Navbar';
import style from '@/styles/blog.module.css';


const blog=()=> {
  return (
    <>
    <Navbar/>
        <p className={style.text}>Hello this is a blog page which is in blog folder</p> 
    </>
  )
}
export default blog

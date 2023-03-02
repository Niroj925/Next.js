//to access blog folder with their respective name which is of name index.js file name 
import Navbar from '@/component/Navbar';
import styles from '@/styles/blog.module.css';
import Link from 'next/link';
export const getStaticProps=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  //parse into json form which in array
  const posts=await res.json();
  return{
    props:{
      posts,
    }
  }
  
}

const blog=({posts})=> {
  return (
    <>
    <Navbar/>
    <p className={styles.text}>Hello this is a blog page which is in blog folder</p> 

        {( posts.slice(0,5).map((item)=>{
            return (
              <div key={item.id} className={styles.ssr_styles}>
                <h2>{item.id}</h2>
                <Link href={`/blog/${item.id}`}>
                 <h3>{item.title}</h3>
                </Link>
               
              </div>
            )
          }))
        }
    </>
  )
}
export default blog

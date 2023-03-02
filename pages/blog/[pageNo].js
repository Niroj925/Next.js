//this is a dynamic routing page 

import {useRouter} from 'next/router';
import Navbar from '@/component/Navbar';
export const getStaticPaths=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    //parse into json form which in array
    const data=await res.json();
    const paths=data.map((item)=>{
    return{
      params:{
        pageNo:item.id.toString(),
      },
    }
    })
    return {
        paths,
        fallback:true
    }
    
  }
  export const getStaticProps=async(context)=>{
    const id=context.params.pageNo;
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //parse into json form which in array
    const data=await res.json();
    return{
      props:{
        data,
      }
    }
    
  }

const pageNo=({data})=>{

    const router=useRouter();
    const pageNumber=router.query.pageNo;

    

    return (
        <>
        <Navbar/>
        <h3>Welcome to page {pageNumber}</h3>
        <div key={data.id} className='posts'>
         <p>{data.id}</p>
        <h2>{data.title}</h2>
        <h3>{data.body}</h3>
        </div>
        
        </>
    )
}
export default pageNo;

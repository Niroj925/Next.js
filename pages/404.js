//this is our own custome page is any page is not found 
import Link from 'next/link'
import {useRouter} from 'next/router';

const noPage=()=>{
    const router=useRouter();

    return(
        <>
        <h3>404</h3>
        <h3>page not found gaich</h3>
        <Link href='/'>Home</Link>
        <br/>
        <a onClick={()=>router.push('/')} style={{cursor:'pointer'}}>Back to Home</a>
        </>
    )
}
export default noPage
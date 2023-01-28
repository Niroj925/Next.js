//this is our own custome page is any page is not found 
import Link from 'next/link'
const noPage=()=>{
    return(
        <>
        <h3>404</h3>
        <h3>page not found gaich</h3>
        <Link href='/'>Home</Link>
        </>
    )
}
export default noPage
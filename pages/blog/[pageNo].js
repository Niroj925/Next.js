//this is a dynamic routing page 

import {useRouter} from 'next/router';
import Navbar from '@/component/Navbar';

const pageNo=()=>{

    const router=useRouter();
    const pageNumber=router.query.pageNo;

    return (
        <>
        <Navbar/>
        <h3>Welcome to page {pageNumber}</h3>
        </>
    )
}
export default pageNo;

//this is a dynamic routing page 

import {useRouter} from 'next/router';

const pageNo=()=>{

    const router=useRouter();
    const pageNumber=router.query.pageNo;

    return (
        <>
        <h3>Welcome to page {pageNumber}</h3>
        </>
    )
}
export default pageNo;

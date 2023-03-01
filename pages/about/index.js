import Image from 'next/image'
const about=()=>{
    return (
        <>
        <h3 style={{color:'green'}}>
            This is about page
        </h3>
        <Image src='/niroc.png' width='200' height='200'></Image>
        <Image src='https://images.pexels.com/photos/11662238/pexels-photo-11662238.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width='200' height='200' alt='img'></Image>
        </>
    )
}
export default about
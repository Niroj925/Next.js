import Navbar  from "@/component/Navbar"
const contact=()=>{

    return (
        <>
        <Navbar/>
        <h3 className="icss">This is inline css with style jsx tag</h3>
        <p>This is contact page</p>
    
         <style jsx>
            {`
            p{
                color:purple
            }
            .icss{
                color:green
            }

          `}
         </style>
        </>
    )
}

export default contact
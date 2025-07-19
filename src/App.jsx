import { useState } from "react"
import About from "./Componnets/About/About"
import Navbar from "./Componnets/Navbar/Navbar"
import Textrform from "./Componnets/Textform/Textrform"


function App() {
  const [showa , setshowa] = useState(true)
  return (
    <>
    {/* <Navbar name = "TextUtils"/>
    <button onClick={ ()=> setshowa(true)}>
      textform
    </button>
    <button onClick={ ()=> setshowa(false)}>
      about
    </button>
    {showa ?  <Textrform headline="Enter the text to Analize" /> : <About/> } */}
  

                    {/* --------------------- componnents rendering using state ---------------------- */}


        {/* parsing as prop bot states to use in navbar componnets: */}
        
       <Navbar name = "TextUtils" showa={showa} setshowa={setshowa}/>                  
       {
        showa ? 
         <Textrform headline="Enter the text to Analize" /> : 
          <About/>
       }

    </>
  )
}

export default App

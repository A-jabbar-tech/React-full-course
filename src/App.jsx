import { useState } from "react"
import About from "./Componnets/About/About"
import Navbar from "./Componnets/Navbar/Navbar"
import Textrform from "./Componnets/Textform/Textrform"


function App() {
  const [showa , setshowa] = useState(true)

  const [mode , Setmode] = useState("light")   // tell mode either dark/light using this we make changes to our app and anable dark and light mode it is updated version of dark mode that we made in about.jsx in previous video
  const ToggleMode = ()=>{
    if(mode === "light"){
      Setmode("dark");
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
    }
    else{
      Setmode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <>
   

      {/* --------------------- componnents rendering using state ---------------------- */}
      {/* parsing as prop bot states to use in navbar componnets: */}
        
       <Navbar name = "TextUtils" showa={showa} setshowa={setshowa} mode={mode} ToggleMode={ToggleMode}/>                  
       {
        showa ? 
         <Textrform headline="Enter the text to Analize" /> : 
          <About/>
       }

    </>
  )
}

export default App

import { useState } from "react"
import About from "./Componnets/About/About"
import Navbar from "./Componnets/Navbar/Navbar"
import Textrform from "./Componnets/Textform/Textrform"
import Alert from "./Componnets/Alert.jsx/Alert"


function App() {
  const [showa , setshowa] = useState(true)    // used for routing 
  const [mode , Setmode] = useState("light")   // tell mode either dark/light using this we make changes to our app and anable dark and light mode it is updated version of dark mode that we made in about.jsx in previous video
  const [alert , setalert] = useState(null)
  
  
  const showalert = ( message , type)=>{
    setalert({
      msg : message , 
      type : type
    });
    setTimeout(() => {  // dismiss the alert after 0.7 sec
      setalert(null)
    }, 700);
  }
  
  
  
  const ToggleMode = ()=>{
    if(mode === "light"){
      Setmode("dark");
      document.body.style.backgroundColor = "#042743" ;
      document.body.style.color = "white" ;
      showalert("Dark mode has enabled" , "success");
    }
    else{
      Setmode("light");
      document.body.style.backgroundColor = "white" ;
      document.body.style.color = "black" ;
      showalert("Light mode has enabled" , "success")
    }
  }
  return (
    <>
   

      {/* --------------------- componnents rendering using state ---------------------- */}
      {/* parsing as prop bot states to use in navbar componnets: */}
        
       <Navbar name = "TextUtils" showa={showa} setshowa={setshowa} mode={mode} ToggleMode={ToggleMode}/>                  
       {
        showa ? 
        <>
        <Alert alert={alert} /> 
        <Textrform showalert={showalert} headline="Enter the text to Analize" /> 
        </>
        :
        <About/>
       }

    </>
  )
}

export default App

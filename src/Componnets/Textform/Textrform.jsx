import React, { useState } from "react";

function Textrform(props) {
    const[text , settext] = useState("")
    
    // text = "new text" ;  wrong way to update text
    // settext ("new text") ; correct way to set text


    // to upper case 
    const handleupclick = ()=>{
        settext(text.toUpperCase())
    }

    // for lower case 
    const handledownclick = ()=>{
        settext(text.toLowerCase())
    }
    //for clear
    const handleClearclick = ()=>{
        settext("")
    }
    const handleonchange = (e)=>{
        settext(e.target.value)   // enables us to write value in textarea
    }

    

  return (
    <>
      <div className="container my-4" id="home">
        <h3>{props.headline}</h3>
        <div>
            <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"/>
        </div>
        <button className="btn btn-primary my-2 mx-1" onClick={handleupclick}>
            ToUppercase
        </button>

        <button className="btn btn-primary my-2 mx-1" onClick={handledownclick}>
            ToLowercase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleClearclick}>
            clear
        </button>

        
      </div>

      <div className="container my-3">
        <h3>Your Text Sumary</h3>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> { 0.008 * text.split(" ").length } : minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>


      </div>
     
    </>
  );
}

export default Textrform;

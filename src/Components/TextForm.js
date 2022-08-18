import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const clearText = ()=>{
        setText('')
        props.showAlert("Cleared all the text", "success")
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "warning")
    }


    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/) 
        setText(newText.join(" "))
        props.showAlert("Removed extra space", "success")

    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
        
    }

  const [text, setText] = useState('')
  
//   setText("New text is this") // Correct way to change the text
  return (
    <>
        <div className='container'> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary...</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>Can be read in {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes</p>
            <p>{text}</p>
        </div>
    </>
  )
}

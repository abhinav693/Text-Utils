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
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
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
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary...</h3>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>Can be read in {0.008 * text.split(" ").length} minutes</p>
            <p>{text}</p>
        </div>
    </>
  )
}

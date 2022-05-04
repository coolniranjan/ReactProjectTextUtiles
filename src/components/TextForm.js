// import React from 'react'
import React, { useState } from 'react';
export default function TextForm(props) {
  function toUpCase() {
    let newtxt = text.toUpperCase();
    settext(newtxt)
  }
  function tolowCase() {
    let newtxt = text.toLowerCase();
    settext(newtxt)
  }
  function toClear() {
    let newtext = ""
    settext(newtext)
  }
  function toCopy() {
    console.log("copied")
    let txt = document.getElementById('textarea');
    txt.select();
    navigator.clipboard.writeText(txt.value);
  }
  function handleOnChange(event) {
    settext(event.target.value)
  }
  const [text, settext] = useState("");
  return (
    <>
      <div className='container'>
        <h2 className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h2>
        <div className="mb-3">
          <textarea value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' ,color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} className="form-control" id="textarea" rows="7"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={toUpCase}>Converted to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={tolowCase}>Converted to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={toClear}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={toCopy}>Copy Textt</button>
        <div className='my-3' style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2>Text Summary</h2>
          <p>In your text have {text.split(" ").length}words and {text.length} characters</p>
        </div>
      </div>
    </>
  )
}
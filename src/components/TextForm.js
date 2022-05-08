// import React from 'react'
import React, { useState } from 'react';
import './st.css'
import Alert from './alert';
export default function TextForm(props) {
const [alertmsg, setalertmsg] = useState(null);
  
  const showmsg=(type,message)=>{
    setalertmsg({
      msgtype:type,
      msg:message
  
    })
    setTimeout(() => {
      setalertmsg(null)
    }, 2000);
  }
  function toUpCase() {
    let newtxt = text.toUpperCase();
    settext(newtxt)
    if (text==='') {
      showmsg("warning","Please Enter text")
    }
    else{
      showmsg("success","Converted to UpperCase")
    }
  }
  function tolowCase() {
    let newtxt = text.toLowerCase();
    settext(newtxt)
    if (text==='') {
      showmsg("warning","Please Enter text")
    }
    else{
      showmsg("success","Converted to LowerCase")
    }
  }
  function toClear() {
    let newtext = ""
    settext(newtext)
    if (text==='') {
      showmsg("warning","Please Enter text")
    }
    else{
      showmsg("success","Text clered")
    }
  }
  function toCopy() {
    console.log("copied")
    let txt = document.getElementById('textarea');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    if (text==='') {
      showmsg("warning","Please Enter text")
    }
    else{
    
      showmsg("success","Text are copied")
    }
  }
  function handleOnChange(event) {
    settext(event.target.value)
  }
  let charLen=function(){
    let s=(text.split(""))
    var count=0
    for(let i=0;i<s.length;i++){
        if(s[i]!==' '){
            count+=1
        }
    }
    return (count)
  }
let wordLen=()=>{
  let s=(text.split(" "))
var count=0
for(let i=0;i<s.length;i++){
    if(s[i]===''){
        count+=1
    }
}
return (s.length-count)
}
  const [text, settext] = useState("");
  return (
    <>
     <Alert alertmsg={alertmsg}/>
     <div id='mrgn'>
      <div className='container'>
        <h2 className="my-2 " style={{color: props.mode === 'dark' ? 'white' : 'black'  }}>{props.heading}</h2>
        <div className="mb-2">
          <textarea value={text} style={{ backgroundColor: props.mode === 'dark' ? '#152b36' : 'white' ,color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} className="form-control" id="textarea" rows="7"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={toUpCase}>Converted to uppercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={tolowCase}>Converted to lowercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={toClear}>Clear Text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={toCopy}>Copy Textt</button>
        <div className='my-3' style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2>Text Summary</h2>     
          <p>In your text have {wordLen()} words and {charLen()} characters</p>
        </div>
      </div>
      </div>
    </>
  )
}

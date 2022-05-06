import { useState } from 'react';
import React  from 'react';
import './App.css';
// import AboutUs from './components/AboutUs';
import NavBar from './components/Navbar';
import Alert from './components/alert';
import TextForm from './components/TextForm';

function App() {
  const [mode, setdarkmode] = useState('light');
  const [modetxt, setdarkmodetxt] = useState("Enable Dark Mode");
  const [btndisc, setbtndisc] = useState("dark");
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
  const togglemode=()=>{
   
    if(mode==='light'){
      setdarkmode('dark');
      setdarkmodetxt("Disable Dark Mode")
      setbtndisc("light")
      showmsg("success","Dark mode enabled")

      document.body.style.backgroundColor="#00394d"
      
    }
    else{
      setdarkmode('light');
      setdarkmodetxt("Enable Dark Mode")
      setbtndisc("dark")
      showmsg("success","Light mode enabled")
      document.body.style.backgroundColor="white"
    }
  }
  
  return (<>
    <NavBar title="TextUtiles" abouttxt="About Us" hm="Home" mode={mode} togglemode={togglemode} modetxt={modetxt} btndisc={btndisc}/>
    {/* <NavBar/> */}
   <Alert alertmsg={alertmsg}/>
    <TextForm heading="Enter Your Text To Analyze"  mode={mode}/>
    {/* <AboutUs/> */}
  </>
  );
}
export default App;

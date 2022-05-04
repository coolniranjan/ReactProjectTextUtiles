import { useState } from 'react';
import React  from 'react';
import './App.css';
// import AboutUs from './components/AboutUs';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setdarkmode] = useState('light');
  const [modetxt, setdarkmodetxt] = useState("Enable Dark Mode");
  const [btndisc, setbtndisc] = useState("dark");
  const togglemode=()=>{
    if(mode==='light'){
      setdarkmode('dark');
      setdarkmodetxt("Disable Dark Mode")
      setbtndisc("light")
      document.body.style.backgroundColor="#00394d"
    }
    else{
      setdarkmode('light');
      setdarkmodetxt("Enable Dark Mode")
      setbtndisc("dark")
      document.body.style.backgroundColor="white"
    }
  }
  
  return (<>
    <NavBar title="TextUtiles" abouttxt="About Us" hm="Home" mode={mode} togglemode={togglemode} modetxt={modetxt} btndisc={btndisc}/>
    {/* <NavBar/> */}
    <TextForm heading="Enter Your Text To Analyze"  mode={mode}/>
    {/* <AboutUs/> */}
  </>
  );
}
export default App;

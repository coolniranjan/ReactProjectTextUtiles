import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import './App.css';
import NavBar from './components/Navbar';
import Alert from './components/alert';
import TextForm from './components/TextForm';
import Error from './components/Error';

function App() {
  const [mode, setdarkmode] = useState('light');
  const [modetxt, setdarkmodetxt] = useState("Enable Dark Mode");
  const [btndisc, setbtndisc] = useState("dark");
  const [alertmsg, setalertmsg] = useState(null);

  const showmsg = (type, message) => {
    setalertmsg({
      msgtype: type,
      msg: message

    })
    setTimeout(() => {
      setalertmsg(null)
    }, 3000);
  }
  const togglemode = () => {

    if (mode === 'light') {
      setdarkmode('dark');
      setdarkmodetxt("Disable Dark Mode")
      setbtndisc("light")
      showmsg("success", "Dark mode enabled")
      document.body.style.backgroundColor = "#00394d"
      // document.title = "dark mode enabled"

    }
    else {
      setdarkmode('light');
      setdarkmodetxt("Enable Dark Mode")
      setbtndisc("dark")
      showmsg("success", "Light mode enabled")
      document.body.style.backgroundColor = "white"
      // document.title = "Light mode enabled"
      // setTimeout(() => {
      //   document.title = "TextUtiles home"
      // }, 2000);
    }
  }

  return (<>
    <Router>
      <NavBar title="MyTextUtiles" mode={mode} togglemode={togglemode} modetxt={modetxt} btndisc={btndisc} />
      <Alert alertmsg={alertmsg} />
      <Routes>
        <Route exact path='/' element={<TextForm heading="Enter Your Text To Analyze" mode={mode} />}></Route>
        <Route exact path='/about' element={<AboutUs mode={mode}/>}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  </>
  );
}
export default App;

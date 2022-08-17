import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1600);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2C3333 '
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'Just a demo!'
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Do not replicate!'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="ReactApp" contents="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch> */}
        {/* React does partial matching so to avoid any conflict 'exact' is used in route */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
  }


  const toggleMode = (cls)=>{
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgba(0,0,0,0.8)'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")    
    }
  }
  return (
    <>
    <Router> 
      <Navbar title="ReactApp" contents="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
        {/* React does partial matching so to avoid any conflict 'exact' is used in route */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm  showAlert={showAlert} heading="Try TextUtils - Word Counter, Characters Counter and many more" />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import About from './component /About/About';
import Navbar from './component /Navbar/Navbar';
import Textform from './component /TextForm/Textform';
import { useState } from "react";
function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor ="gray"
    }
    else{
      setmode('light'); 
      document.body.style.backgroundColor ="white"

    }
  }



  return (
   <>
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />

   <div className='container my-3'>
   <Textform heading="Enter the text to analyze"/>
   <About/>

   </div>
   </>
  );
}

export default App;

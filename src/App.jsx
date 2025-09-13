import React, { useContext } from 'react';
import "./App.css"
import va from "./assets/girl-3.png"
import speakimg from "./assets/speak.gif"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';

function App() {
 let {recognition,speaking,setSpeaking} =useContext(datacontext)
 
  return (
    <div className='main'>
     <img src={va} alt="" id="shifra"/>
     <span>I'm Liza, your Advanced Virtual Assistant</span>
     {!speaking?<button onClick={()=>{
      setSpeaking(true);
      recognition.start()
     }}>Click here <CiMicrophoneOn /></button>
    :
    <div className='response'>
      <img src={speakimg} alt="" id="speak" />
      <p>listening...</p>n0
    </div>
    }
     
    </div>
  )
}

export default App;


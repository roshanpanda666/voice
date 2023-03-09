import './App.css';
import { useState } from 'react';
import Speech from 'react-speech';
import React from 'react';

function App() {
  const[title,seTtitle]=useState('')

  const onSubmit=(event)=>{
      event.preventDefault()

      seTtitle(event.target.value)
  }

  
 let voiceB=title
if(title==="hello"||"hii"){
   voiceB="hello, how are you doing"
 }
if("good"||"im good" in title){
  voiceB="thats greate"
}
if(title==="how are you"||"how about you"){
  voiceB="i am good thanks for asking"
}



  return (
    <>

 
    <div>
      
      
        <input type="text" className='TxtForm'onChange={onSubmit} value={title}/>
        
        <Speech text={voiceB}
        voice="Google UK English Female" />,
     
    </div>
    </>
  );
  

}




export default App;

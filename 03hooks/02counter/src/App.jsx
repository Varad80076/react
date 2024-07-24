import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  
  let [counter,setCounter] = useState(0)

  // let counter =15
  const addValue=() =>{
      console.log("Clicked",counter);
      counter +=1;
      setCounter(counter +=1)

  }
  const RemoveValue=() =>{
      console.log("Clicked",counter);
      if(counter >0){
        
        counter -=1;
      }
      setCounter(counter)

  }


  return (
    <>
     <h1>Varad Badgujar</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value{counter}</button><br/>
     <button onClick={RemoveValue}>Remove Value{counter}</button>
     <p>Footer{counter}</p>
    </>
  )
}

export default App

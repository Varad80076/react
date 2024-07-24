import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [allowed,setAllowed] = useState(false)
  const [addChar,setChar] = useState(false)
  const [Password,setPassword] = useState("")


  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowed) str +="0123456789"
    if(addChar) str +="!@#$%^&*(){}[]?~`_-+-/*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      
    }
      setPassword(pass)


  },[length,allowed,addChar,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(Password)
  },[Password])


  useEffect(() => {
    passwordGenerator()
  },[length,allowed,addChar,passwordGenerator,])
  
  return (
    
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 mt-56 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4 '>
      <input 
      type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button className=' px-1  bg-white' onClick={passwordGenerator}><i className="fa fa-refresh text-gray-600" aria-hidden="true"></i></button>
      <button className='bg-blue-600 px-4 text-white hover:bg-blue-800' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          
       
        <input 
          type="checkbox" 
          defaultChecked={addChar}
          id='numberInput'
          className='cursor-pointer'
          onChange={()=>{
            setAllowed((prev =>!prev))
          }}
          />
          <label htmlFor='numberInput'>Number</label>
        <input 
          type="checkbox" 
          defaultChecked={addChar}
          id='CharacterInput'
          className='cursor-pointer'
          onChange={()=>{
            setChar((prev =>!prev))
          }}
          />
          <label htmlFor='CharacterInput'>Characters</label>
        </div>
      </div>
     </div>
    
  )
}

export default App

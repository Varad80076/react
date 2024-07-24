import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj ={
    username: "shree",
    age:15
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-lg mb-4 text-black'>Tailwin Test</h1>
     <Card username="Varad Badgujar" data="hi i'am varad"/>
     <Card username="shree Badgujar" />

    </>
  )
}

export default App

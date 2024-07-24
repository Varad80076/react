import { useState } from "react"


function App() {
    const [color,setColor] = useState("olive")

  return (
     <div className="w-full h-screen duration-300"
     style={{backgroundColor: color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 justify-center bg-white px-3 py-1 rounded-3xl">
          <button
          onClick={() =>setColor("red")}
          className="outline-none p-2 rounded-full px-4 py-2 m-1"
          style={{backgroundColor: "red"}}
          >red</button>
          <button
            onClick={() =>setColor("green")}
          className="outline-none p-2 rounded-full px-4 py-2 m-1"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
            onClick={() =>setColor("blue")}
          className="outline-none p-2 rounded-full px-4 py-2 m-1"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
            onClick={() =>setColor("purple")}
          className="outline-none p-2 rounded-full px-4 py-2 m-1"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button
            onClick={() =>setColor("yellow")}
          className="outline-none p-2 rounded-full px-4 py-2 m-1"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
            onClick={() =>setColor("black")}
          className="outline-none p-2 rounded-full px-4 py-2 m-1"
          style={{backgroundColor: "black",color: "white"}}
          >Yellow</button>
          <button
            onClick={() =>setColor("grey")}
          className="outline-none p-2 rounded-full px-4 py-2 m-1"
          style={{backgroundColor: "gray"}}
          >Yellow</button>
        </div>
      </div>
     </div> 
  )
}

export default App

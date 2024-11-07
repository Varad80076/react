import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './componenets/Sidebar'
import NavBar from './componenets/NavBar';
import NewCom from './componenets/NewCom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './componenets/About';
import { PDFViewer } from '@react-pdf/renderer';
import Project from './componenets/Project';
import Doc from './componenets/Doc';
import ContactFormm from './componenets/ContactForm';


function App() {
   // Create an array to loop through (e.g., array with 4 elements to repeat NewCom)
   const componentsArray = [1, 2, 3, 4,5,6,7,8]; // This array will define how many times you repeat the component
   const cardRepeater=()=>{
    return componentsArray.map((_,index) => (<NewCom key={index}/>));
   }
  return (
    <>
    <Router>
    
    <div className='flex flex-col sm:flex-row justify-around gap-3 p-2 rounded-md h-[680px] mt-1 w-full'> 
     <Sidebar/>
    
    <div className='flex flex-wrap bg-gray-700  w-full sm:max-w-7xl  p-4 justify-around gap-2 max-w-screen-lg h-[570px] rounded-xl sm:h-[663px] overflow-scroll scrollbar-none '>
    <Routes>
              <Route path="/" element={cardRepeater()} /> {/* Default Home */}
              <Route path="/nevbar" element={<NavBar />} /> {/* About Page */}
              <Route path="/about" element={<About />} /> {/* New Component Page */}
              <Route path="/doc" element={<Doc />} /> {/* Resume Page */}
    
   {/* Resme Page */}
              <Route path="/newcom" element={cardRepeater()} /> {/* New Component Page */}
              <Route path="/project" element={<Project />} /> {/* New Component Page */}
              <Route path="/newcontact" element={<newContact />} /> {/* New Component Page */}
              <Route path="/contact" element={<ContactFormm />} /> {/* New Component Page */}
            </Routes>
    </div></div>
      

    </Router>
    </>
  )
}

export default App

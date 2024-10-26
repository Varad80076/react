import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './componenets/Sidebar'
import NavBar from './componenets/NavBar';
import NewCom from './componenets/NewCom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './componenets/About';
import { PDFViewer } from '@react-pdf/renderer';
import Resume from './componenets/Resume';
import Project from './componenets/Project';
import ContactForm from './componenets/contact';


function App() {
   // Create an array to loop through (e.g., array with 4 elements to repeat NewCom)
   const componentsArray = [1, 2, 3, 4,5,6,7,8]; // This array will define how many times you repeat the component
   const cardRepeater=()=>{
    return componentsArray.map((_,index) => (<NewCom key={index}/>));
   }
  return (
    <>
    <Router>
    
    <div className='flex flex-col sm:flex-row bg-gray-400 justify-around gap-2 p-2 rounded-md h-[680px] mt-1 w-full'> 
     <Sidebar/>
    
    <div className='flex flex-wrap bg-gray-700  w-full sm:max-w-7xl  p-4 justify-around gap-2 max-w-screen-lg h-[570px]  sm:h-[663px] overflow-scroll scrollbar-none '>
    <Routes>
              <Route path="/" element={cardRepeater()} /> {/* Default Home */}
              <Route path="/nevbar" element={<NavBar />} /> {/* About Page */}
              <Route path="/about" element={<About />} /> {/* New Component Page */}
              <Route path="/resume" element={<PDFViewer>
    <Resume />
  </PDFViewer>} /> {/* New Resume Page */}
              <Route path="/newcom" element={cardRepeater()} /> {/* New Component Page */}
              <Route path="/project" element={<Project />} /> {/* New Component Page */}
              <Route path="/contact" element={<ContactForm />} /> {/* New Component Page */}
            </Routes>
    </div></div>
      

    </Router>
    </>
  )
}

export default App

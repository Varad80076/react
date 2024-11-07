import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewCom from './componenets/NewCom.jsx'
import NavBar from './componenets/NavBar.jsx'
import About from './componenets/About.jsx'
import Project from './componenets/Project.jsx'
import Doc from './componenets/Doc.jsx'
import ContactFormm from './componenets/ContactForm.jsx'


const router =createBrowserRouter([
  {
     path: "/",
     element: <App />,
     childern: [
      {
        path: "/navbar",
     element: <NavBar />,
      },
      {
        path: "/newcom",
     element: <NewCom />,
      },
      {
        path: "/about",
     element: <About />,
      },
      {
        path: "/doc",
     element: <Doc />,
      },
      {
        path: "/project",
     element: <Project />,
      },
      {
        path: "/newcontact",
     element: <newContact />,
      },
      {
        path: "/contact",
     element: <ContactFormm />,
      },
      
  
     ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

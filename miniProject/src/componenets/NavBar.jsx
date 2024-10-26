import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  return (
        <div className=' w-full rounded-lg p-0 navbar-expand-lg'>
          <Navbar {...args} >
            <Link className=' hover:text-cyan-500 text-2xl' href="/">Varad Badgujar</Link>
            <NavbarToggler className='bg-white text-gray-50 hover:text-gray-500' onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto gap-1 " navbar>
                <NavItem>
                  <Link className=' hover:text-cyan-500' to="/">home </Link>
                </NavItem>
                <NavItem>
                  <Link className='hover:text-cyan-500' to='/about'>
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className='hover:text-cyan-500' to='/project'>
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className='hover:text-cyan-500' to='/contact'>
                    Contact
                  </Link>
                </NavItem>
               
              </Nav>
              
            </Collapse>
          </Navbar>
        </div>
    
  );
}

export default NavBar;
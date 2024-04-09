import { useState } from 'react';
import '../../../css/navbar.css'
import { TiThMenu } from "react-icons/ti";
import ToggleMenu from './ToggleMenu/ToggleMenu';
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {

  const [Open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!Open);
  }

  return <>

    <ToggleMenu isOpen={Open} toggleMenu={toggle} />

    <header className='header'>
    <button className='toggle-btn' onClick={() => { toggle() }}>
          {Open ? <IoCloseSharp /> : <TiThMenu />}
        </button>
      <div className='logo-container'>
        <h2 className='logo'>Dummy</h2>
      </div>
      <nav className='nav-list'>
        <ul>
          <li><a className='menu-items' href='#home'>Home</a></li>
          <li><a className='menu-items' href='#about'>About</a></li>
          <li><a className='menu-items' href='#skill'>Skills</a></li>
          <li><a className='menu-items' href='#experience'>Experience</a></li>
          <li><a className='menu-items' href='#project'>Project</a></li>
          <a href='#contact'><button className='contact-btn'>Hire me</button></a>
        </ul>
       

      </nav>

    </header>
  </>
}

export default Navbar

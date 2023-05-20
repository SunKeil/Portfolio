import React from 'react'
import sunlogo from "../img/sunlog.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="menu-container">
           
                <div class="links">
                    <div>
                        <Link to="experience"><li className='navli'><p className='links-text'>EXPERIENCE</p></li></Link>            
                    </div>
                    <div class="">
                        <Link to="/"><li className='navli'><img src={sunlogo} alt="My Awesome Website" className='rotate'/> </li></Link>
                    </div>
                    <div>
                        <Link to="projects"><li className='navli'><p className='links-text'>PROJECTS</p ></li></Link>
                    </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar

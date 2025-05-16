import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
const navLinks = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "contact", path: "/contact"},
    {name: "Service", path: "/service"},
];

  return (

    <div>
        <nav>
      <h2>My Logo</h2>
      <ul >
        {navLinks.map((link)=>(
            <li key={link.name}><Link to= {link.path}>{link.name}</Link></li>
        ))}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar

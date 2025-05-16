import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop'},
    { name: 'Categories', path: '/categories' },
    { name: 'Deals', path: '/deals'  },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-btn"> 
        {isOpen ? 'Close' : 'Open'}
      </button>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>
             
              {isOpen && <span >{link.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

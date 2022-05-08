import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import './Header.css';

const Navbar = () => {
   const handleLogout = () => {};

   return (
      <div className='navbar'>
         <div className='left'>
            <h2>Delivery Note</h2>
         </div>
         <div className='right'>
            <ul>
               <li>
                  <a href='/home' className='link'>
                     Home
                  </a>
                  <a href='/new' className='link'>
                     new note
                  </a>
                  <a href='/about' className='link'>
                     about
                  </a>
               </li>
            </ul>
            <div className='person'>
               <BsPersonCircle /> <span>John Wick</span>
            </div>
            <div className='search'>
               <input type='text' placeholder='Search by Note id...' />
               <FiSearch color='#777' size={20} className='searchIcon' />
            </div>

            <p className='link' onClick={handleLogout}>
               logout
            </p>
         </div>
      </div>
   );
};

export default Navbar;

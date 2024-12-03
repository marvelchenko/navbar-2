import React from 'react';
// import { navLinks, dropdownData } from './constants';
import logo from '../assets/logoC.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const Navbar = () => {
  return (
   <div>
    <header>
      <input type='checkbox' name='' id='chk1'></input>
      <div className='logo'>
        <img src={logo} alt='logo' style={{ height: '40px' }}/>
      </div>
      <div className='search-box'>
        <form action=''>
          <input type='text' name='search' id='srch' placeholder='search'></input>
          <button type='submit'><i className="bi bi-search"></i></button>
        </form>
      </div>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Product</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Contact</a></li>
        <li>
        <div className='icon'>
        <FontAwesomeIcon icon={faFacebook}  className='icon-2' />
        <FontAwesomeIcon icon={faTwitter} className='icon-2' />
        <FontAwesomeIcon icon={faInstagram} className='icon-2'/>
        </div>
        </li>
      </ul>
      <div className='menu'>
        <label htmlFor='chk1'>
        <FontAwesomeIcon icon={faBars} size='2px' className='menu-2'  />
        </label>
      </div>
    </header>
   </div>
  );
};

export default Navbar;

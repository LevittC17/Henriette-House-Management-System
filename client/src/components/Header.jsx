import React from 'react';
import { Link } from 'react-router-dom';
import logonge from '../assets/logonge.png';

const Header = () => {
  return (
    <header className='py-6 mb-5 border-b ml-10 mr-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'><img src={logonge} alt='logo' /></Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-yellow-500 text-white transition' to='/'>Home</Link>
          <Link className='hover:text-yellow-500 text-white transition' to='/about'>About Us</Link>
          <Link className='hover:text-yellow-500 text-white transition' to='/login'>Add new Property</Link>
          {/* <Link className='hover:text-yellow-500 text-white transition' to='/login'>Log In</Link>
          <Link className='bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-3 rounded-lg transition' to='/signup'>Sign Up</Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
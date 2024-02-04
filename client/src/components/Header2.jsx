import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaRegUserCircle } from 'react-icons/fa';

const Header2 = () => {
    const [userInfo, setUserInfo] = useState({});

    const logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.replace('/');
    };

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                setUserInfo(parsedUser);
            } catch (error) {
                console.error('Error parsing user data:', error);
            }
        }
    }, []);
    
    return (
        <header className='py-6 mb-5 border-b ml-10 mr-10'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/home'><img src={logo} alt='logo' /></Link>
                <div className='flex items-center gap-6'>
                    <Link className='hover:text-yellow-500 text-white transition' to='/'>Home</Link>
                    <Link className='hover:text-yellow-500 text-white transition' to='/about'>About Us</Link>
                    <FaRegUserCircle className='text-4xl' />
                    {userInfo && (
                        <Link to={'/account'}>
                            <p className='text-white'>{userInfo.firstName} {userInfo.lastName}</p>
                            <p className='text-white'>{userInfo.email}</p>
                        </Link>
                    )}
                    <button onClick={logOut} className='px-4 py-2 cursor-pointer bg-yellow-500 text-black rounded-lg'>LogOut</button>
                </div>
            </div>
        </header>
    );
};

export default Header2;

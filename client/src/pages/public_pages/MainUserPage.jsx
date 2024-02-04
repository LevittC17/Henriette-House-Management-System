import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainUserPage = () => {
  return (
    <div className='max-w-[1920px] mx-auto bg-black'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainUserPage;

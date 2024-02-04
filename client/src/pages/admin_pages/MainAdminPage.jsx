import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';

const MainAdminPage = () => {
  return (
    <div className='max-w-[1920px] mx-auto bg-black'>
      <Header2 />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainAdminPage

import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarTwo from '../components/NavbarTwo';

const LayoutTwo = () => {
  return (
    <div className=" relative w-full h-screen">
      <div className="">
        <NavbarTwo />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default LayoutTwo
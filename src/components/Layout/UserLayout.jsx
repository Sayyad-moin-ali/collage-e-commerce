import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';
const UserLayout = () => {
  return (
    <>
    {/* Header section */}
    <Header/>
    {/* Main section */}
    <main>
      
    </main>
    {/* Footer section */}  
    <Footer/>
    </>
  )
}

export default UserLayout
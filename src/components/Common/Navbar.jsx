import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {

    const [drawerOpen, setDraweropen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
        setDraweropen(!drawerOpen);
    }

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to="/" className='text-2xl font-medium'>Rabbit</Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>TopWear</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>BottomWear</Link>
                </div>

                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className='hover:text-black '><HiOutlineUser className='h-6 w-6 text-gray-700' /></Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black '>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>

                    <SearchBar />

                    <button className='md:hidden relative hover:text-black' onClick={toggleNavDrawer}><HiBars3BottomRight className='h-6 w-6 text-gray-700' /></button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* Mobile Navigation */}
            <div className={`md:hidden fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='relative'>
                    <button onClick={toggleNavDrawer} className='absolute top-4 right-4 p-2'>
                        <IoMdClose className='h-6 w-6 text-gray-600' />
                    </button>
                </div>
                <div className='p-4 mt-8'>
                    <Link to="#" className='block text-gray-700 hover:text-black text-sm font-medium uppercase mb-4'>Men</Link>
                    <Link to="#" className='block text-gray-700 hover:text-black text-sm font-medium uppercase mb-4'>Women</Link>
                    <Link to="#" className='block text-gray-700 hover:text-black text-sm font-medium uppercase mb-4'>TopWear</Link>
                    <Link to="#" className='block text-gray-700 hover:text-black text-sm font-medium uppercase mb-4'>BottomWear</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;
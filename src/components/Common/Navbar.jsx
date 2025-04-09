import React, { useState } from 'react'
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2"
import { Link } from 'react-router-dom'
import CartDrawer from '../Layout/CartDrawer'
import SearchBar from './SearchBar'

const Navbar = () => {

    const [drawerOpen, setDraweropen] = useState(false);

    const toggleCartDrawer = () => {
        setDraweropen(!drawerOpen)
    }

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to="/" className='text-2xl font-medium'>Zayra Mart</Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Fashion</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Mobiles</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Electronics</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Toys</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Home and Furniture</Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Appliances</Link>

                </div>

                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className='hover:text-black '><HiOutlineUser className='h-6 w-6 text-gray-700' /></Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black '>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-1  bg-red-600 text-white text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>

                    <SearchBar />

                    <button className='md:hidden relative hover:text-black '><HiBars3BottomRight className='h-6 w-6 text-gray-700' /></button>

                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
        </>
    )
}

export default Navbar
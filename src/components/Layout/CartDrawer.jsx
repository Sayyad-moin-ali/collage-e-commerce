import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContents from '../cart/CartContents';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-500 flex flex-col z-50 ${drawerOpen ? "translate-x-0 " : "translate-x-full"}`}>
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600' />
                </button>
            </div>

            {/* Start Cart Contents Component */}
            <div className='flex-grow p-4 overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
                <CartContents />
            </div>
            {/* End Cart Contents Component */}

           {/*Start Cart button*/}
            <div className='p-4 bg-white  sticky bottom-0'>
                <button className='w-full bg-black text-white py-3 rounded  font-semibold hover:bg-gray-800 transition'>Checkout</button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center '>shipping, taxes and didcount are codes calculated at checkout. </p>
            </div>
            {/*End Cart button*/}
        </div>
    )
}

export default CartDrawer
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { TbBrandFacebook, TbBrandInstagram, TbBrandMeta, TbBrandTwitter } from 'react-icons/tb'; // Import TbBrandMeta from react-icons/tb
import { RiFacebookBoxLine, RiTwitterXLine } from 'react-icons/ri';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t py-12"> {/* Added border-t for top border */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to know about new arrivals, sales, and special offers.
          </p>
          <form className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md
              focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-r-md text-sm font-semibold hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop link */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                Men's Wear
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                Women's Wear
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                Furniture
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                Kids Wear
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                Electronics
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Support link */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-800 transition-all">
                Features
              </Link>
            </li>
          </ul>
        </div>
        
        {/*Follow us link */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
          <div className='flex items-center space-x-4 mb-6'>
            <a href="#" target='_blank' rel="noopener noreferrer" className='hover:text-gray-500'>
              <TbBrandMeta className='h-5 w-5'/>
            </a>
            <a href="#" target='_blank' rel="noopener noreferrer" className='hover:text-gray-500'>
              <TbBrandFacebook className='h-5 w-5'/>
            </a>
            <a href="#" target='_blank' rel="noopener noreferrer" className='hover:text-gray-500'>
              <IoLogoInstagram className='h-5 w-5'/>
            </a>
            <a href="#" target='_blank' rel="noopener noreferrer" className='hover:text-gray-500'>
              <RiTwitterXLine className='h-4 w-5'/>
            </a>
          </div>
          
        </div>
        <div>
          <p className='text-gray-500'>Call Us</p>
          <p>
            <FiPhoneCall className='inline-block mr-2'/>
            +91 9344234232
          </p>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
        <p className='text-gray-500 text-sm text-center tracking-tight'>
          &copy;, 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
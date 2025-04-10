import React from 'react'
import { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsopen] = useState(false)

    const handleSearchToggle = () => {
        setIsopen(!isOpen)
    }

    const handleSearch=(e)=>{
        e.preventDefault();
        console.log("Search Term:", searchTerm);
        setIsopen(false)
    }
    return (
        <div className={`flex items-center justify-center w-full transition-all  duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50":"w-auto"}`}>{
            isOpen ? (
            <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
                <div className='relative w-1/2'>
                <input type='text ' onChange={(e)=>setSearchTerm(e.target.value)} placeholder='search' value={searchTerm} className='bg-gray-100 px-4 py-2 pr-12 rounded focus:outline-none w-full placeholder:textgray'/>
                <button type='submit'><HiMagnifyingGlass className='h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900'/></button>
                </div>
                <button type='button' onClick={handleSearchToggle} className='absolute right-4 top-1/2 transform -translate-1/2
                text-gray-600 hover:text-gray-800'><HiMiniXMark className='w-6 h-6'/></button>
            </form>) : (<button onClick={handleSearchToggle}><HiMagnifyingGlass className='h-6 w-6 ' /></button>)
        }</div>
    )
}

export default SearchBar
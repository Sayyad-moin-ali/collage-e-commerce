import React from 'react'

export const Footer = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-gray-800 mb-4">NewsLetter</h3>
                <p className="text-gray-500 mb-4">
                    Be the first to know about new arrivals, sales, and special offers.
                </p>
                <form className="flex">
                    <input type="text"
                        placeholder="Enter your email"
                        className="p-3 w-full text-sm border-t"
                    />
                </form>
            </div>
        </div>
  )
}

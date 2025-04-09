import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
const CartContents=() => {
    const cartproducts=[
        {
            ID:1,
            Name:"Shrit",
            Price:100,
            Image:"https://picsum.photos/200?random=1",
            Quantity:1,
            size:"M",
            color:"Red",
        },
        {
            ID:2,
            Name:"jeans",
            Price:10,
            Image:"https://picsum.photos/200?random=2",
            Quantity:1,
            size:"M",
            color:"Blue",
        },
    ];
    return (
        <div>
            {cartproducts.map((product,index) => (
                 <div key={index} className="flex items-start justify-between py-4 border-b">
                    <div className="flex items-start">
                        <img src={product.Image}
                             alt={product.Name} 
                             className="w-20 h-24 object-cover rounded mr-4" rounded 
                        />
                    </div>
                    <div>
                        <h3>{product.name}</h3>
                        <p className="text" color="black-200">
                            size: {product.size} | color: {product.color}
                        </p>
                    <div className='flex items-center mt-2'>
                        <button className='border rounded px-2 py-1 text-xl font-medium'> - </button>
                        <span className='mx-4'>{product.Quantity}</span>
                        <button className='border rounded px-2 py-1 text-xl font-medium'> + </button>
                    </div>
                    </div>
                    <div>
                        <p>$ {product.Price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin6Line className="text-2xl text-red-500 hover:text-red-700" />
                        </button>
                    </div>
                 </div>
                )
            )}
        </div>
    );
};

export default CartContents;
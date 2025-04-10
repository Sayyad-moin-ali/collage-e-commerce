import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartContents = ({ isLoggedIn }) => {
    const cartProducts = [
        {
            ID: 1,
            Name: "Shirt",
            Price: 100,
            Image: "https://picsum.photos/200?random=1",
            Quantity: 1,
            size: "M",
            color: "Red",
        },
        {
            ID: 2,
            Name: "Jeans",
            Price: 200,
            Image: "https://picsum.photos/200?random=2",
            Quantity: 1,
            size: "L",
            color: "Blue",
        },
    ];

    const handleAddItem = (product) => {
        if (!isLoggedIn) {
            alert("Please log in to add items to your cart.");
            return;
        }
        console.log(`Added ${product.Name} to the cart.`);
    };

    const handleRemoveItem = (product) => {
        if (!isLoggedIn) {
            alert("Please log in to remove items from your cart.");
            return;
        }
        console.log(`Removed ${product.Name} from the cart.`);
    };

    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index} className="flex items-start justify-between py-4 border-b">
                    <div className="flex items-start">
                        <img
                            src={product.Image}
                            alt={product.Name}
                            className="w-20 h-24 object-cover rounded mr-4"
                        />
                    </div>
                    <div>
                        <h3>{product.Name}</h3>
                        <p className="text-gray-500">
                            Size: {product.size} | Color: {product.color}
                        </p>
                        <div className="flex items-center mt-2">
                            <button
                                onClick={() => handleRemoveItem(product)}
                                className="border rounded px-2 py-1 text-xl font-medium"
                            >
                                -
                            </button>
                            <span className="mx-4">{product.Quantity}</span>
                            <button
                                onClick={() => handleAddItem(product)}
                                className="border rounded px-2 py-1 text-xl font-medium"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div>
                        <p>$ {product.Price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin6Line className="text-2xl text-red-500 hover:text-red-700" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;
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
                        <img src={product.image}
                             alt={product.name} 
                             className="w-20 h-24 rounded-md mr-4" rounded 
                        />
                    </div>
                    <div>
                        <h3>{product.name}</h3>
                        <p className="text" color="black-200">
                            size: {product.size} | color: {product.color}
                        </p>
                    </div>
                 </div>
                )
            )}
        </div>
    );
};
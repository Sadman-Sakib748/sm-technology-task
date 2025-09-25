import { useState } from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Add to cart functionality
        console.log(`${product.name} added to cart with quantity: ${quantity}`);
    };

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <div className="relative">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-64"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 rounded-full px-3 py-1 text-white text-xs">
                    {product.category}
                </div>
            </div>

            <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600">
                    {product.rating} ★ ({product.reviews} reviews)
                </p>
                <p className="text-lg font-semibold text-green-600">${product.price}</p>
            </div>

            <div className="mt-4">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setQuantity(quantity - 1)}
                        className="p-2 bg-gray-300 rounded-full"
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-12 text-center border rounded-md"
                        min={1}
                    />
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 bg-gray-300 rounded-full"
                    >
                        +
                    </button>
                </div>

                <div className="mt-4">
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-orange-500 text-white p-2 rounded-md"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;

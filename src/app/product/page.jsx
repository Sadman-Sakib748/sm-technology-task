"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const mockProducts = [
    { id: "1", productName: "Mushroom", price: 2.3, images: ["/fresh-mushrooms.jpg"], categoryId: "1" },
    { id: "2", productName: "Mustard", price: 2.5, images: ["/fresh-mustard-greens.jpg"], categoryId: "2" },
    { id: "3", productName: "Orange", price: 4.2, images: ["/fresh-oranges.png"], categoryId: "3" },
    { id: "4", productName: "Pomegranate", price: 2.9, images: ["/fresh-pomegranate.jpg"], categoryId: "3" },
    { id: "5", productName: "Kiwi", price: 5.5, images: ["/fresh-kiwi-fruit.jpg"], categoryId: "3" },
    { id: "6", productName: "Coconut", price: 8.3, images: ["/fresh-coconut.jpg"], categoryId: "3" },
    { id: "7", productName: "Guava", price: 3.8, images: ["/fresh-guava-fruit.jpg"], categoryId: "3" },
    { id: "8", productName: "Eggplant", price: 2.7, images: ["/fresh-eggplant.jpg"], categoryId: "2" },
];

const categories = [
    { id: "all", name: "All" },
    { id: "1", name: "Mushrooms" },
    { id: "2", name: "Vegetables" },
    { id: "3", name: "Fruits" },
];

export function ProductsSection() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts =
        selectedCategory === "all"
            ? mockProducts
            : mockProducts.filter((product) => product.categoryId === selectedCategory);

    return (
        <section className="py-16 bg-white relative">
            {/* Decorative leaves */}
            <div className="absolute left-10 w-12 h-12 opacity-20">
                <div className="w-full h-full bg-green-400 rounded-full rotate-45"></div>
            </div>
            <div className="absolute right-16 w-16 h-16 opacity-20">
                <div className="w-full h-full bg-green-300 rounded-full -rotate-12"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-green-600 font-medium mb-2">Our Products</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fresh Products</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-12">
                    <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`px-6 py-2 rounded-md transition-colors ${selectedCategory === category.id
                                    ? "bg-green-600 text-white hover:bg-green-700"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                                    }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} href={`/product/${product._id}`}>
                            <div
                                className="group bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center cursor-pointer"
                            >
                                <div className="relative w-[258px] h-[208px] mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src={product.images[0] || "/placeholder.svg"}
                                        alt={product.productName}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg">{product.productName}</h3>
                                <p className="text-gray-600 mb-3">
                                    <span className="text-sm">$</span>
                                    <span className="text-lg font-bold">{product.price}</span>
                                    <span className="text-sm"> /kg</span>
                                </p>
                                <button className="w-[258px] bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                                    Add to cart
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* See All Products Button */}
                <div className="text-center">
                    <button
                        className="px-8 py-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg bg-transparent"
                    >
                        See All Products
                    </button>
                </div>
            </div>
        </section>
    );
}

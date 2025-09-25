"use client";

import { useParams } from "next/navigation";
import ProductCard from "@/components/pages/ProductCard";

export default function ProductDetailsPage() {
    const params = useParams();

    // 🔹 এখানে সরাসরি hardcoded data
    const mockProducts = [
        { id: "1", productName: "Mushroom", price: 2.3, images: ["/fresh-mushrooms.jpg"], categoryId: "1" },
        { id: "2", productName: "Mustard", price: 2.5, images: ["/mustard.jpg"], categoryId: "2" },
        { id: "3", productName: "Onion", price: 1.8, images: ["/onion.jpg"], categoryId: "1" },
        { id: "4", productName: "Tomato", price: 3.0, images: ["/tomato.jpg"], categoryId: "2" },
    ];

    const product = mockProducts.find((p) => p.id === params.id);

    if (!product) return <p className="p-8 text-red-500">Product not found</p>;

    return (
        <div className="p-8">
            <ProductCard product={product} />
        </div>
    );
}

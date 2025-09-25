"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, User, Menu, Apple } from "lucide-react";
import Image from "next/image";
import heroImage from '../../../../../public/benner.png';
import bgImage from '../../../../../public/bg.png';
import tree from '../../../../../public/tree.png';
import dinner from '../../../../../public/dinner.png';

export default function HomePage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 18,
        minutes: 54,
        seconds: 21,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-green-50 to-orange-50 overflow-hidden">

            {/* Background Image */}
            <div className="absolute top-0 left-50 md:left-[950px] w-full md:w-[400px] h-full z-0 opacity-30">
                <Image src={bgImage} alt="Background" className="object-cover w-full h-full" priority />
            </div>

            {/* Header / NavBar */}
            <header className="relative z-10 bg-transparent">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                            <Apple className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-800">Fresh Harvests</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Home</a>
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Shop</a>
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">About us</a>
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Blog</a>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 transition-colors relative">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
                        </button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-6">Sign Up</Button>
                    </div>

                    <div className="md:hidden">
                        <button className="p-2 text-gray-600">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative container mx-auto px-4 py-12 lg:py-20 z-10 min-h-screen overflow-hidden">
                <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12 relative">

                    {/* Left Content */}
                    <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1">
                        <p className="text-green-600 font-medium text-sm md:text-base">Welcome to Fresh Harvest</p>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Fresh Fruits and Vegetables
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 max-w-md">
                            At Fresh Harvests, we are passionate about providing you with the finest and most nutritious fresh fruits and vegetables.
                        </p>

                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg rounded-lg">
                            Shop Now
                        </Button>

                        {/* Countdown Promo Card */}
                        <div className="absolute md:top-[350px] left-[4px] w-[172px] h-[91px] md:w-[200px] md:h-[90px] bg-white rounded-[7px] shadow-lg flex p-1 md:p-2 items-center">
                            {/* Left Content */}
                            <div className="flex flex-col justify-center w-1/2 pr-1 md:pr-2">
                                <p className="text-[8px] md:text-xs font-bold mb-0.5">Special Offer</p>
                                <p className="text-[6px] md:text-lg font-bold mb-0.5">Fresh Salad</p>
                                <p className="text-[4px] md:text-xs mb-1">Up to 70% off</p>
                                <button className="bg-green-500 text-white py-[1px] px-[2px] md:py-1 md:px-2 rounded-full text-[5px] md:text-xs font-bold">
                                    CODE: FRESH25
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="w-[50px] h-full relative pl-1 md:pl-2">
                                <Image src={dinner} alt="Fresh Salad" fill className="object-cover rounded-[7px]" />
                            </div>
                        </div>



                    </div>

                    {/* Right Hero Image */}
                    <div className="flex-1 order-1 md:order-2 relative">
                        <Image
                            src={heroImage}
                            alt="Fresh fruits and vegetables"
                            className="absolute -mt-30 md:left-0 left-39 w-[220px] md:w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

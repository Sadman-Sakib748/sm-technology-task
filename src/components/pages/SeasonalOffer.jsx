import Image from "next/image"
import { Button } from "../ui/button"

import { useEffect, useState } from "react"

export function SeasonalOffer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 18,
        minutes: 54,
        seconds: 21,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative max-w-6xl mx-auto bg-white py-16 px-4">
            {/* Decorative leaves */}
            <div className="absolute top-16 left-10 opacity-20">
                <div className="w-16 h-16 bg-green-400 rounded-full transform rotate-45" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left - Text content */}
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                    <div className="bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                        <div className="space-y-4">
                            <p className="text-green-600 text-sm font-medium">Special Offer</p>
                            <h3 className="text-2xl font-bold text-gray-900">Seasonal Fruit Bundle</h3>
                            <p className="text-gray-600">
                                Discount up to <span className="text-orange-500 font-bold">80% OFF</span>
                            </p>

                            {/* Countdown Timer */}
                            <div className="flex space-x-4">
                                <div className="text-center">
                                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[50px]">
                                        <span className="text-xl font-bold text-gray-900">{timeLeft.days.toString().padStart(2, "0")}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Days</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[50px]">
                                        <span className="text-xl font-bold text-gray-900">{timeLeft.hours.toString().padStart(2, "0")}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Hour</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[50px]">
                                        <span className="text-xl font-bold text-gray-900">
                                            {timeLeft.minutes.toString().padStart(2, "0")}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Min</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[50px]">
                                        <span className="text-xl font-bold text-gray-900">
                                            {timeLeft.seconds.toString().padStart(2, "0")}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Second</p>
                                </div>
                            </div>

                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg">CODE: FRESH25</Button>

                            {/* Fruit images */}
                            <div className="flex justify-center space-x-2 pt-2">
                                <span className="text-2xl">🍊</span>
                                <span className="text-2xl">🍓</span>
                                <span className="text-2xl">🥝</span>
                                <span className="text-2xl">🍎</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Product Image */}
                <div className="relative w-full sm:w-[400px] lg:w-[500px]">
                    {/* Main Image */}
                    <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[250px]">
                        <Image
                            src="/images/fruit-bundle.png"
                            alt="Seasonal Fruit Bundle"
                            fill
                            className="object-cover rounded-2xl shadow-lg"
                            priority
                        />
                    </div>

                    {/* Floating Decorative Image */}
                    <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[350px] lg:w-[450px] h-[220px] sm:h-[250px] lg:h-[270px] rotate-[180deg] opacity-100">
                        <Image
                            src="/images/fruit-bundle.png"
                            alt="Seasonal Fruits"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

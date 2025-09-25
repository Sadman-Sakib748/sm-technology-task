import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
    return (
        <section className="relative bg-gray-50 py-16">
            {/* Decorative leaves */}
            <div className="pointer-events-none absolute right-16 top-16 h-16 w-16 opacity-20">
                <div className="h-full w-full rotate-45 rounded-full bg-green-400" />
            </div>
            <div className="pointer-events-none absolute left-10 bottom-20 h-12 w-12 opacity-20">
                <div className="h-full w-full -rotate-12 rounded-full bg-green-300" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div className="relative mx-auto w-full max-w-[686.11px]">
                        {/* Background plate */}
                        <div className="absolute inset-0 -z-10 -rotate-3 scale-95 rounded-2xl from-green-100 to-green-200 bg-gradient-to-br" />

                        {/* Main farmer image */}
                        <Image
                            src="/images/about-farmer.png"
                            alt="Fresh Harvest farmer with produce"
                            width={686}
                            height={657}
                            className="w-full rounded-2xl shadow-lg lg:h-[657px] lg:w-[686.1058px]"
                            priority
                        />

                        {/* Small floating product card */}
                        <div
                            className="absolute right-[8%] top-[58%] 
              flex h-[192px] w-[150.4px] flex-col items-center gap-2 
              rounded-2xl bg-white p-3 shadow-xl"
                        >
                            <div className="h-[96px] w-full overflow-hidden rounded-xl bg-green-100">
                                <Image
                                    src="/images/leafy-greens.png"
                                    alt="Mushroom / Greens"
                                    width={150}
                                    height={96}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="w-full text-center">
                                <p className="text-xs text-gray-500">Mushroom</p>
                                <p className="text-[10px] text-gray-400">0.5 kg</p>
                                <div className="mt-1 text-[10px] font-medium text-gray-700">
                                    Add to cart
                                </div>
                            </div>
                        </div>

                        {/* Fresh Harvests badge */}
                        <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                                <div className="h-6 w-6 rounded-sm bg-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Fresh Harvests</h4>
                                <p className="text-sm text-gray-600">100% Organic</p>
                            </div>
                        </div>

                        {/* Secondary decorative image block */}
                        <div className="absolute -right-[40px] -top-[40px] hidden h-[334px] w-[461px] rounded-2xl bg-white/70 p-3 shadow-lg lg:block">
                            <Image
                                src="/images/veggie-grid.png"
                                alt="Decorative veggies"
                                width={461}
                                height={334}
                                className="h-full w-full rounded-xl object-cover"
                            />
                        </div>

                        {/* Tiny decorative leaf */}
                        <Image
                            src="/images/leaf.png"
                            alt="Leaf"
                            width={24}
                            height={24}
                            className="absolute -top-6 left-[20%] hidden h-6 w-6 rotate-[18deg] lg:block"
                        />
                    </div>


                    {/* Right (Image + overlays) */}
                    <div className="space-y-6">
                        <div>
                            <p className="mb-2 font-medium text-green-600">About us</p>
                            <h2 className="mb-4 text-4xl font-bold text-gray-900">
                                About Fresh Harvest
                            </h2>
                            <p className="mb-6 leading-relaxed text-gray-600">
                                Welcome to Fresh Harvest, your premier destination for the
                                finest, farm-fresh produce! We are passionate about providing
                                you with the highest quality fruits, vegetables, and salad
                                ingredients to nourish your body and delight your taste buds.
                            </p>
                            <p className="mb-6 leading-relaxed text-gray-600">
                                At Fresh Harvest, we believe that everyone deserves access to
                                fresh, nutritious, and delicious produce. That's why we work
                                tirelessly to source the best ingredients from trusted local
                                farmers and growers.
                            </p>
                        </div>

                        <Button className="rounded-lg bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

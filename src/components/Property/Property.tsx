import { formatPrice } from "@/utils/formatPrice"
import { PropertyProps } from "./propertyTypes"
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia"
import { TfiLocationPin } from "react-icons/tfi"
import Image from "next/image"
export function Property(props : PropertyProps ) {
    const { house: { bathroom, bedrooms, description, id, image, location, meters, price, star} } = props
    return (
        <main className="max-w-5xl mx-auto ">
            <div className="grid md:grid md:grid-cols-[70%, 1fr ] my-3 py-5 ">
                <div className="px-6">
                    <h1 className="text-3xl mb-4 text-secondary flex justify-between">
                        <span>House {id}</span>
                        <span className="font-semibold" >{formatPrice(price)}</span>
                    </h1>
                    <div className="flex gap-5 my-4">
                        <h2 className="flex gap-3 text-xl items-center">
                            <TfiLocationPin/>
                            {location}
                        </h2>
                        <div className="flex items-center px-2 py-1 rounded-lg bg-secondary top-2 right-2 text-white" >
                            <LiaStarSolid/>
                            <span className="ml-1 font-semibold">{star}</span>
                        </div>
                    </div>
                    <Image 
                        src={`/assets/properties/${image}`}
                        alt="casa"
                        width={1200}
                        height={1200}
                        className="w-full h-auto rounded-2xl"
                        priority
                    />
                    <div className="gap-4 lg:flex mt-4">
                        <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
                            <LiaBedSolid/>
                            <span className="ml-2">{bedrooms}</span>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
                            <LiaBathSolid/>
                            <span className="ml-2">{bathroom}</span>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
                            <LiaRulerCombinedSolid/>
                            <span className="ml-2">{meters}</span>
                        </div>
                    </div>
                    <div className="my-3">{description}</div>
                </div>
            </div>
            <p>{location}</p>
        </main>
    )
}

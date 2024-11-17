import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div 
            className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrHome/>
            <div >
                <p>Propiedades</p>
                <p className='text-xs'> Seleccion el tipo de propiedad </p>
            </div>
            {
                isOpen ? (
                    <GrFormUp className='cursor-pointer'/>
                ):
                (
                    <GrFormDown className='cursor-pointer'/>
                )
            }
            {
                isOpen && (
                    <div className='absolute top-[71px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0 '>
                        <p>Casa</p>
                        <p>Chalet</p>
                        <p>Piso</p>
                    </div>
                )
            }
        </div>
    )
}
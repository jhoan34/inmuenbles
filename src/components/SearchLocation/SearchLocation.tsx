import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div 
            className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrLocation/>
            <div >
                <p>Localizacion</p>
                <p className='text-xs'> Seleccion tu Localizacion </p>
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
                        <p>MADRID</p>
                        <p>BARCELONA</p>
                        <p>ZARAGOZA</p>

                    </div>
                )
            }
        </div>
    )
}

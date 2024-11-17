import { Marker, Popup, useMap } from 'react-leaflet'
import { MarkerHouseProps } from './MarkerHouse.types'
import { icon } from 'leaflet'
import { housesData } from './MarkerHouse.data'
import { FaMapMarkerAlt } from "react-icons/fa"
import Image from 'next/image'

export function MarkerHouse(props: MarkerHouseProps) {
    const { selectMarker } = props
    const fnMap = useMap()
    const customIcon = icon({
        iconUrl: '/assets/marker.svg',
        iconSize: [40, 40],
    })
    return (
        <>
            {
                housesData.map(({ id, name, position, image }) => (
                    <Marker key={id} position={position} icon={customIcon} eventHandlers={{click: () => {selectMarker(position, fnMap)}}}>
                        <Popup>
                            <div className='flex items-center flex-col mb-2'>
                                <span className='mr-4 text-secondary'>
                                    <FaMapMarkerAlt/>
                                </span>
                                <h5 className='text-mb text-secondary'>{name}</h5>
                                <img
                                    src={`/assets/houses/${image}`}
                                    alt={name}
                                    width={100}
                                    height={100}

                                />

                                <button className='px-3 py-3 mt-2 text-white rounded-lg bg-slate-500'>Ver Propiedad</button>
                            </div>
                        </Popup>
                    </Marker>
                ))
            }
        </>
    )
}

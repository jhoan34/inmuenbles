"use client"
import { Map } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import { Transition } from "../Transition"
import "leaflet/dist/leaflet.css"
import { MarkerHouse } from "./MarkerHouse"

export function Location() {
    const cordinatePoint = {
        lat: 40.463667,
        lng: -3.74922
    }
    const centerMarker = (possition : {lat: number, lng: number}, fnMap: Map ) => {
        fnMap.flyTo({
            lat: possition.lat,
            lng: possition.lng,
        })
    }
    return (
        <Transition className="px-3 py-8 md:py-44 md:px-36">
            <h4 className="text-center text-secondary" id="location">Localizacion</h4>
            <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">Disponibles en toda España</h2>
            <MapContainer center={cordinatePoint} zoom={8} scrollWheelZoom={false} className="h-[700px]">
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
                <MarkerHouse selectMarker={centerMarker}/>
            </MapContainer>
        </Transition>
    )
}

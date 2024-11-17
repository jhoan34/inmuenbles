import Image from "next/image"
import { Transition } from "../Transition"

export function About() {
    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-35 md:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre Nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Mas de 1.000 de vivienda en spain</h2>
                <p className="mb-10 mt-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos voluptatem alias tempore! Dolorem, necessitatibus illo tempore culpa numquam aliquid rem id delectus doloremque enim dolor facilis, illum autem! Sapiente.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black ">Cargar mas</button>
            </div>
            <div className="flex items-center justify-center ">
                <Image src="/assets/house.jpeg" alt="About" width={350} height={450} className="w-auto h-auto" />

            </div>
        </Transition>
    )
}

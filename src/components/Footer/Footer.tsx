import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

export function Footer() {
    return (
        <div className='flex justify-center items-center flex-col gap-[25vh] px-4 py-8 bg-black/90 md:p-40 md:px-36'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-[1fr, 1fr, 1fr,_400px] text-white'>
                {
                    dataFooter.map(({ id, links }) => (
                        <div key={id} className='flex items-center justify-center gap-4 flex-row'>
                            {
                                links.map(({ id, name, link }) => (
                                    <Link key={id} href={link} className='block mb-5'>{name}</Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className='md:text-right'>
                <h4 className='mb-6 text-xl font-semibold'>TarreRealState</h4>
                <p>Calle inventada</p>
                <p>Madrid, Spain</p>
                <div className='flex gap-4 mt-5 md:justify-end'>
                    <Link href="#" aria-label="YouTube">
                        <LiaYoutube className="text-3xl cursor-pointer" />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <LiaInstagram className="text-3xl cursor-pointer" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                        <LiaLinkedinIn className="text-3xl cursor-pointer" />
                    </Link>
                    <Link href="#" aria-label="Pinterest">
                        <LiaPinterestP className="text-3xl cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

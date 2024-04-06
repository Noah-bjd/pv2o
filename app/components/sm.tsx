import react from 'react';
import Bouton from './link';
import Link from '@/node_modules/next/link';
export default function SmallState() {
    return(
        <div className='w-full h-[3rem] flex flex-row  '>
             <nav className='flex overflow-x-scroll hidScroll w-full'>
                    <ul className='flex items-center  w-full'>
                        <Link href="https://www.linkedin.com/in/nouhaila-bouljihad-255b36234/" style={{ whiteSpace: 'nowrap' }}  className="text-white flex text-sm flex-row bg-gradient-to-r from-blue-600 to-orange-500  ml-2 px-4 py-[0.4rem] max-h-[3rem]  w-auto  justify-center items-center rounded-2xl font-normal ">Noah Bjd</Link>
                        <li><Bouton target="About">About</Bouton></li>
                        <li><Bouton target="Design">Design process</Bouton></li>
                        <li><Bouton target="Skills">Skills</Bouton></li>
                        <li><Bouton target="Blog">Blog</Bouton></li>
                        <li><Bouton target="Contact">Contact</Bouton></li>
                        <li><Bouton target="Github">Github</Bouton></li>
                    </ul>
                </nav>
        </div>
    )
}
import react from 'react';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
interface Props{
    link?: string;
    src?: string;
}
export default function Icon(){
    return(
    <div className='w-10 h-10 rounded-full border border-gray-600 bg-g border-solid  shadow-none"'>
        test
    </div>
    )
}
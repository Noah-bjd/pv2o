import react from 'react';
import Card from './card';
import Image from '@/node_modules/next/image';
import Icon from './icons';
import './sh.css';
export default function Body(){
    return(
        <main className='flex h-full w-full items-center justify-center'>
        <Card classname='h-[30rem] w-full mx-3'>
            <div className='w-full h-full relative rounded-3xl  overflow-hidden shadow-smoke'>
                <Image 
                    src="/me.jpeg" 
                    alt='Noah-bjd' 
                    layout="fill" 
                    objectFit="cover" 
                    objectPosition="center"
                />
            </div>
            <div className='text-white relative bottom-16'>
                <Icon></Icon>
            </div>
        </Card>
    </main>
    )
}
'use client';
import { useEffect, useState } from "react";
import SmallState from "./sm";

export default function Head() {
    const [client, setClient] = useState(false);

    useEffect(() => {
        setClient(true); 
    }, []);

    const [matches, setMatches] = useState(false);
    const [small, setSmall] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setMatches(window.matchMedia("(min-width: 1200px)").matches);
            setSmall(window.matchMedia("(max-width: 765px)").matches);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            {client && matches &&
                (<div className="flex w-full h-[13.2rem] justify-center items-center gap-4 overflow-hidden ">
                    <span className="text-white text-[40px] font-rubik font-bold">My Bio Cards</span>
                </div>)
            }
            {
                client && small &&
                (
                    <SmallState />
                )
            }
        </header>
    );
}


import React from 'react';
interface Props {
    target: string;
    children: React.ReactNode; 
    className?: string;
    link?: string;
}

const Bouton: React.FC<Props> = ({ target, children, className, link }) => {
    const scrollToSection = () => {
        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const theClass = className ? className : "text-white flex text-sm flex-row bg-[#252525] ml-2 px-4 py-[0.4rem] max-h-[3rem]  w-auto  justify-center items-center rounded-2xl font-normal";
    return (
        <div>
            <button onClick={scrollToSection} className={theClass} style={{ whiteSpace: 'nowrap' }}>{children}</button>
        </div>
    );
};

export default Bouton;


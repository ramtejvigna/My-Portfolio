import { useState, useEffect } from 'react';
import '../../../public/Photo.jpg'

export const Home = () => {
    const roles = ['Full Stack Developer', 'Data Scientist'];
    const [displayedText, setDisplayedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const typingSpeed = 100; // typing speed in milliseconds
    const [displayedName] = useState("Vigna Ramtej Telagarapu");

    useEffect(() => {
        const role = roles[roleIndex];

        // Create the typing effect
        if (charIndex < role.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayedText((prev) => prev + role[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(typingTimeout);
        } else {
            // Pause before starting the next role
            const pauseTimeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayedText('');
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }, 1000);

            return () => clearTimeout(pauseTimeout);
        }
    }, [charIndex, roleIndex, roles]);

    return (
        <div className='flex flex-col lg:flex-row items-center justify-center h-full py-5 pb-20 overflow-x-hidden gap-10 lg:gap-28 md:p-10 lg:px-32'>
            <div className='flex flex-col gap-2 animate-slide-in-left lg:w-1/2'>
                <h1 className='text-xl md:text-2xl'>Hello 👋, I'm</h1>
                <h1 className='text-2xl md:text-5xl font-bold text-[#ffd2fb]'>{displayedName}</h1>
                <div className='flex flex-row justify-start'>
                    <h3 className='my-2 text-xl'>
                        I'm a <span className='font-bold text-2xl md:text-3xl text-[#d4e6ff]'>{displayedText}</span>
                    </h3>
                </div>
            </div>
            <div className='animate-slide-in-right mx-20 w-full lg:w-1/2 flex flex-col items-center'>
                <img src="Me.jpg" alt="Profile" className='w-3/4 rounded-xl' />
            </div>
        </div>
    );
};

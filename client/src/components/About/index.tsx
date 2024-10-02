import { GiAchievement } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { Reveal } from "../Reveal";

export const About = () => {
    const cgpa: number = 8.51;
    const cards = [
        {
            icon: <GiAchievement />,
            title: 'Student',
            desc1: 'SRKREC',
            desc2: `CGPA : ${cgpa}`,
        },
        {
            icon: <GiAchievement />,
            title: 'Interests',
            desc1: 'Full Stack',
            desc2: 'Data Science',
        },
        {
            icon: <FaCode />,
            title: 'Coding',
            desc1: 'Java, Python',
            desc2: 'DSA',
        }
    ]

    return (
        <div className='flex flex-col items-center overflow-hidden'>
            <h1 className="text-2xl font-bold text-[#ffd2fb]">About Me</h1>
            <div className="flex flex-col md:flex-row items-center justify-around w-full py-10">
                <Reveal>
                    <div className="p-10 md:p-20 animate-slide-in-left">
                        <img src="../../../Photo2.jpg" alt="Profile" className="mx-auto rounded-xl" />
                    </div>
                </Reveal>

                <div className="flex flex-col flex-1 p-10 md:p-40 md:py-10 md:pl-12 gap-10 animate-slide-in-right w-full">
                    <div className="flex flex-col ml-14 md:ml-0 md:flex-row gap-10 w-full ">
                        {cards.map((card, index) => {
                            return (
                                <Reveal>
                                    <div key={index} className="flex flex-col justify-center items-center gap-1 bg-slate-900 bg-opacity-40 backdrop-blur-lg w-[200px] py-4 rounded-3xl">
                                        <p className="text-3xl">{card.icon}</p>
                                        <h1 className="font-bold text-lg">{card.title}</h1>
                                        <span className="text-sm">{card.desc1}</span>
                                        <span className="text-sm">{card.desc2}</span>
                                    </div>
                                </Reveal>
                            )
                        })}
                    </div>

                    <div>
                        <Reveal>
                            <p className="text-lg text-justify font-thin">
                                I'm a passionate Full Stack Developer and Data Scientist
                                with hands-on experience in designing, developing, and deploying
                                dynamic web applications and intelligent data solutions. My expertise
                                spans across front-end and back-end development, database management, and AI-driven data analysis,
                                allowing me to tackle complex problems with end-to-end solutions.
                                Whether it's building responsive and interactive user interfaces, optimizing back-end performance,
                                or applying machine learning models to derive actionable insights, I thrive on challenges and
                                continuous learning.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

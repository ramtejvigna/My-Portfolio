import { Reveal } from '../Reveal';
import { Link } from 'react-router-dom';

export const Projects = () => {
    const projects = [
        {
            title: 'AMILE',
            description: 'AMILE (Advanced Machine for Interview and Learning Expert) for the Smart India Hackathon, focusing on both Full Stack and ML. an AI-driven platform designed to revolutionize job and interview preparation.',projectLink: 'https://amile-student.vercel.app/',
            projectLinkTitle: 'amile.vercel.app',
            image: '../../../Thumbnail.png'
        },
        {
            title: 'Quiz App',
            description: 'Quiz application that leverages the Open Trivia DB API to dynamically fetch quiz questions, providing a wide range of categories and difficulty levels for users.',
            projectLink: 'https://quiz-app-pro.vercel.app/',
            projectLinkTitle: 'quiz.vercel.app',
            image: '../../../Quiz.png'
        },
        {
            title: 'Tic Tac Toe with AI',
            description: 'Interactive Tic Tac Toe game with a user-friendly interface and an intelligent computer opponent powered by the Min-Max algorithm.',
            projectLink: '',
            projectLinkTitle: 'Project hasn`t been deployed yet.',
            image: '../../../tt.png'
        },
        {
            title: 'Resume Builder',
            description: 'Developed a comprehensive web application designed to streamline the process of resume creation, providing users with a user-friendly interface to create and customize professional resumes.',
            projectLink: '',
            projectLinkTitle: 'Project hasn`t been deployed yet.',
            image: '../../../resume.webp'
        },
        {
            title: 'AI Chatbot',
            description: 'Developed a smart AI chatbot application designed to provide personalized responses to user queries, offering a user-friendly interface for seamless interaction with artificial intelligence.',
            projectLink: '',
            projectLinkTitle: 'Project hasn`t been deployed yet.',
            image: '../../../AI-Chatbots.jpg'
        }
        ,
    ];

    return (
        <div className='flex flex-col items-center lg:mx-40 p-10'>
            <h1 className="text-2xl font-bold text-[#ffd2fb]">PROJECTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <div
                            className="relative bg-slate-900 bg-opacity-40 backdrop-blur-lg p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
                        >
                            <div>
                                <img src={project.image} alt={project.title} className='h-40 w-full' />
                            </div>
                            <div className='flex flex-row items-center justify-between gap-1 mt-5'>
                                <h2 className="text-xl font-semibold text-[#ffd2fb]">{project.title}</h2> 
                                {/* <IoNavigateOutline className='text-xl font-semibold mt-6 text-[#ffd2fb] rotate-45'/> */}
                                {
                                    project.projectLink && (
                                        <Link to={project.projectLink}>
                                            <h2 className="font-normal">{project.projectLinkTitle}</h2>
                                        </Link>
                                    )
                                }
                            </div>
                            <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

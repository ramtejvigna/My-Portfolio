import React, { useState } from 'react';
import { Reveal } from '../Reveal';
import { IoNavigateOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Projects = () => {
    const projects = [
        {
            title: 'AMILE',
            description: 'AMILE (Advanced Machine for Interview and Learning Expert) for the Smart India Hackathon, focusing on both Full Stack and ML. an AI-driven platform designed to revolutionize job and interview preparation.',
            modalDescription: 'AMILE is a comprehensive, AI-driven platform designed to bridge the gap between education and employment, offering a robust solution to address the challenges faced by graduates in today’s competitive job market. The platform provides an all-in-one ecosystem that integrates advanced tools for interview preparation, job searching, mentorship, and professional development.',
            features: {
                'AI-Driven Interview Preparation Tools': 'The AI Mock Interview System simulates real-world interview scenarios, providing personalized feedback to help candidates improve their skills and confidence. The platform offers curated courses and learning resources to enhance both technical and soft skills, keeping users industry-relevant. Additionally, a Code Playground enables interactive coding practice and problem-solving in real-time. The platform also features an extensive collection of aptitude, technical, and domain-specific tests, allowing users to prepare effectively for exams and interviews across various industries.',
                'Holistic Job Market Connectivity': "AMILE leverages AI-driven matchmaking algorithms to connect job seekers with employers by intelligently analyzing candidates' skills, qualifications, and job preferences, ensuring optimal job-candidate pairing. The platform provides comprehensive access to a wide range of job opportunities across private, government, and international sectors, with listings regularly updated to maintain relevance and maximize employment possibilities for users.",
            },
            projectLink: 'https://amile-student.vercel.app/',
            projectLinkTitle: 'amile.vercel.app',
            image: '../../../Thumbnail.png'
        },
        {
            title: 'Quiz App',
            description: 'Quiz application that leverages the Open Trivia DB API to dynamically fetch quiz questions, providing a wide range of categories and difficulty levels for users.',
            modalDescription: 'The Quiz App allows users to test their knowledge across various subjects by answering multiple-choice questions. Users can select categories and difficulty levels, making it suitable for all knowledge levels. With a user-friendly interface and real-time feedback, the app enhances the learning experience.',
            features: {
                'Dynamic Question Fetch': 'The app intelligently fetches quiz questions from the Open Trivia DB API based on user-selected categories and difficulty levels. This ensures a diverse and engaging experience, allowing users to challenge themselves with questions tailored to their interests and skill levels, promoting continuous learning and exploration of new topics. With three carefully designed difficulty levels—Easy, Medium, and Hard—users can customize their quiz experience to match their knowledge and confidence. This feature not only caters to beginners but also offers advanced users the opportunity to test their limits, making the quiz accessible and challenging for everyone.',
                
                'Real-Time Score Tracking': 'The application tracks user scores in real-time, providing immediate feedback on each response. As users progress through the quiz, they receive instant notifications on correct and incorrect answers, enhancing the learning process and allowing them to see their performance at a glance. This feature encourages users to improve with each attempt. The app includes a competitive leaderboard that displays the top scores, fostering a sense of community and motivation among users. This feature encourages friendly competition, prompting users to improve their scores and engage with friends and other users, enhancing the overall enjoyment of the quiz experience.'
            },
            projectLink: 'https://quiz-app-pro.vercel.app/',
            projectLinkTitle: 'quiz.vercel.app',
            image: '../../../Quiz.png'
        },
        {
            title: 'Tic Tac Toe with AI',
            description: 'Interactive Tic Tac Toe game with a user-friendly interface and an intelligent computer opponent powered by the Min-Max algorithm.',
            modalDescription: 'Dive into the classic game of Tic Tac Toe with a modern twist! This interactive application allows you to challenge a smart computer opponent powered by the sophisticated Min-Max algorithm, ensuring a stimulating gameplay experience. Whether you are a beginner or a seasoned strategist, you can select from various difficulty levels to suit your skills. Enjoy intuitive controls and engaging visuals, complete with audio feedback that enhances your gaming experience. Track your wins and losses with a built-in scoring system, and compare your performance with friends to see who can claim the title of Tic Tac Toe champion! Get ready to strategize, outsmart the AI, and have endless fun!',
            features: {
                'Interactive Gameplay': 'Experience a fully interactive Tic Tac Toe game that allows users to play against an intelligent computer opponent. The game features a sleek and user-friendly interface, ensuring that players of all ages can easily navigate and enjoy the classic game. With intuitive controls and clear visuals, players can focus on strategizing their moves without any distractions.',
                
                'Intelligent AI Opponent': 'The computer opponent utilizes the advanced Min-Max algorithm, providing a challenging gameplay experience. This algorithm evaluates possible moves and chooses the optimal one, making it difficult for players to win while still allowing room for strategy. Users will need to think critically and plan ahead to outsmart the AI, enhancing their strategic thinking and problem-solving skills. The application includes a scoring system that tracks wins, losses, and ties, allowing players to monitor their performance over time. Detailed statistics provide insights into gameplay patterns, encouraging users to improve their strategies and compete with friends by comparing scores and achievements.'
            },
            projectLink: '',
            projectLinkTitle: 'Project hasn`t been deployed yet.',
            image: '../../../tt.png'
        },
        {
            title: 'Resume Builder',
            description: 'Developed a comprehensive web application designed to streamline the process of resume creation, providing users with a user-friendly interface to create and customize professional resumes.',
            modalDescription: 'The Resume Builder is a dynamic web application that allows users to easily create, customize, and export professional resumes. The application provides several customizable templates to help users showcase their skills and experiences in an organized, visually appealing manner.',
            features: {
                'Customizable Resume Templates': 'Users can choose from a variety of professionally designed resume templates. Each template can be fully customized with user-specific data such as contact details, work experience, education, skills, and more. The intuitive user interface ensures a smooth and hassle-free experience while tailoring resumes to specific needs.',
                'Real-Time Preview': 'As users input their information, they can instantly see a real-time preview of their resume. This ensures that users can make adjustments and immediately see how their changes affect the overall appearance of the resume, enhancing the customization process.',
                'PDF Export': 'Once the resume is complete, users can easily export it as a high-quality PDF document. The export function ensures that the resume maintains its formatting, making it ready for submission to potential employers.',
            },
            projectLink: '',
            projectLinkTitle: 'Project hasn`t been deployed yet.',
            image: '../../../resume.webp'
        },
        {
            title: 'AI Chatbot',
            description: 'Developed a smart AI chatbot application designed to provide personalized responses to user queries, offering a user-friendly interface for seamless interaction with artificial intelligence.',
            modalDescription: 'The AI Chatbot is an advanced conversational agent built to handle user queries and provide intelligent responses in real time. The chatbot leverages machine learning algorithms to understand natural language inputs, making it versatile for various applications such as customer support, information retrieval, and interactive learning.',
            features: {
                'Natural Language Processing (NLP)': 'The chatbot uses cutting-edge NLP techniques to understand user inputs in natural language. This allows it to process user queries, extract meaning, and provide appropriate responses, making conversations more human-like and intuitive.',
                'Machine Learning Integration': 'The chatbot is powered by machine learning algorithms that continuously improve based on user interactions. Over time, the bot learns from previous conversations, enhancing its ability to provide accurate and contextually relevant responses.',
                'Multi-Platform Support': 'The AI Chatbot is designed to work across multiple platforms, including web applications, mobile apps, and social media messaging platforms. This makes it versatile for different use cases, whether it’s customer service or educational support.',
            },
            projectLink: '',
            projectLinkTitle: 'Project hasn`t been deployed yet.',
            image: '../../../AI-Chatbots.jpg'
        }
        ,
    ];

    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    // Function to open modal with the clicked project
    const openModal = (project: any) => {
        setSelectedProject(project);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className='flex flex-col items-center mx-40 p-10'>
            <h1 className="text-2xl font-bold text-[#ffd2fb]">PROJECTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <div
                            className="relative bg-slate-900 bg-opacity-40 backdrop-blur-lg p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer overflow-hidden"
                            onClick={() => openModal(project)} // Open modal on click
                        >
                            <div>
                                <img src={project.image} alt={project.title} className='h-40 w-full' />
                            </div>
                            <div className='flex flex-row items-center gap-1'>
                                <h2 className="text-xl font-semibold text-[#ffd2fb] mt-5">{project.title}</h2> 
                                {/* <IoNavigateOutline className='text-xl font-semibold mt-6 text-[#ffd2fb] rotate-45'/> */}
                            </div>
                            <p className="text-sm text-gray-300 mt-2">{project.description}</p>

                            {/* View Details on Hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg">View Details</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="p-10 bg-black bg-opacity-80 backdrop-blur-lg rounded-lg w-3/4">
                        <h2 className="text-xl font-semibold">Project Name: {selectedProject.title}</h2>
                        <p className="mt-4 font-thin">{selectedProject.modalDescription}</p>

                        {/* Features Section */}
                        <div className="mt-6 mx-6">
                            <h1 className='text-lg'>Key Features: </h1>
                            {Object.entries(selectedProject.features).map(([featureTitle, featureDescription]) => (
                                <div key={featureTitle} className="mt-4">
                                    <h3 className="font-semibold">{featureTitle}</h3>
                                    <p className="mt-2 mx-4 text-justify text-sm font-thin">{String(featureDescription)}</p>
                                </div>
                            ))}
                        </div>

                        <div className='mt-6'>
                            <p>Project Link : <Link to={selectedProject.projectLink} target='_blank'><span className='font-thin mx-3'>{selectedProject.projectLinkTitle}</span></Link></p>
                        </div>

                        {/* Close modal button */}
                        <button
                            onClick={closeModal}
                            className="mt-6 px-4 py-2  text-white rounded transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

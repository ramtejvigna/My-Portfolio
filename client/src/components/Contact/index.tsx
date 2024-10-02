import React from 'react';
import { Reveal } from '../Reveal';

export const Contact = () => {
    return (
        <div className='flex flex-col items-center mx-40 p-10 overflow-hidden'>
            <h1 className="text-2xl font-bold text-[#ffd2fb] mb-10">CONTACT ME</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>

                {/* Talk to me section */}
                <Reveal>
                    <div className='flex flex-col space-y-6'>
                        <div className='bg-slate-900 bg-opacity-40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col justify-between items-center'>
                            <h2 className='text-xl text-white font-semibold mb-4'>LinkedIn</h2>
                            <p className='text-gray-400 mb-4'>vignaramtej</p>
                            <a href="https://linkedin.com/in/vignaramtej" target="_blank" rel="noopener noreferrer"
                                className='text-[#ffd2fb] font-semibold hover:underline'>
                                Write me
                            </a>
                        </div>
                        <div className='bg-slate-900 bg-opacity-40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col justify-between items-center'>
                            <h2 className='text-xl text-white font-semibold mb-4'>Email</h2>
                            <p className='text-gray-400 mb-4'>vignaramtejtelagarapugmail.com</p>
                            <a href="mailto:vignaramtejtelagarapugmail.com"
                                className='text-[#ffd2fb] font-semibold hover:underline'>
                                Write me
                            </a>
                        </div>
                        <div className='bg-slate-900 bg-opacity-40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col justify-between items-center'>
                            <h2 className='text-xl text-white font-semibold mb-4'>WhatsApp</h2>
                            <p className='text-gray-400 mb-4'>9032149776</p>
                            <a href="https://wa.me/9032149776" target="_blank" rel="noopener noreferrer"
                                className='text-[#ffd2fb] font-semibold hover:underline'>
                                Write me
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* Message me section */}
                <div className='p-8 rounded-lg shadow-lg animate-slide-in-right text-center'>
                    <h2 className='text-xl text-center text-white font-semibold mb-10'>Message me</h2>
                    <form className='flex flex-col space-y-4'>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="p-4 bg-slate-900 border-2 border-[#a2a2a2e6] bg-opacity-40 backdrop-blur-lg text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd2fb]"
                        />
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="p-4 bg-slate-900 bg-opacity-40 backdrop-blur-lg border-2 border-[#a2a2a2e6] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd2fb]"
                        />
                        <textarea
                            placeholder="Write your message here"
                            className="p-4 bg-slate-900 bg-opacity-40 backdrop-blur-lg border-2 border-[#a2a2a2e6] text-white h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd2fb] resize-none"
                        />

                        <button
                            type="submit"
                            className='bg-[#d9a5e4] text-black py-3 px-6 rounded-lg hover:bg-[#ffd2fb] hover:text-[#0a0a23] transition-colors'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

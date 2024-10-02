
export const Achievements = () => {
    const achievements = [
        {
            title: "LeetCode 100+ Problems",
            description: "Solved over 90 algorithm problems on LeetCode, showcasing problem-solving skills and algorithmic knowledge.",
            date: "September 2024"
        },
        {
            title: "Full Stack Development Internship",
            description: "Completed a Full Stack Development internship at IIDT BlackBucks, working on a 'Resume Builder' project.",
            date: "August 2024"
        },
        {
            title: "NPTEL Certification",
            description: "Earned NPTEL certification for the 'Data Science for Engineers' course.",
            date: "July 2024"
        }
    ];

    return (
        <div className='flex flex-col items-center w-full mx-40 p-10 gap-20'>
            <h1 className="text-2xl font-bold text-[#ffd2fb]">ACHIEVEMENTS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
                        <h2 className="text-xl font-semibold text-purple-600">{achievement.title}</h2>
                        <p className="text-gray-700 mt-2">{achievement.description}</p>
                        <p className="text-sm text-gray-500 mt-4">Date: {achievement.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

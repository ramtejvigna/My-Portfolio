import { NavHashLink } from "react-router-hash-link";
import { SiReaddotcv } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { BiMessageSquareDots } from "react-icons/bi";

interface NavbarProps {
    activeSection: string; // Explicitly define the type for activeSection
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    return (
        <>
            <div className="flex flex-row p-6 px-12 items-center justify-between">
                <NavHashLink smooth to="#home">
                    <h3 className="heading text-white font-semibold text-2xl lg:text-4xl inline-flex gap-1"><span>Vigna</span><span>Ramtej</span></h3>
                </NavHashLink>
                <a href="../../../Resume (3).pdf" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white flex flex-row items-center gap-2 text-lg p-3 rounded-xl mx-24">
                        <SiReaddotcv />
                        <p className="text-sm md:text-lg">Resume</p>
                    </button>
                </a>
            </div>

            {/* Mobile Navbar */}
            <nav className="z-20 fixed bottom-5 left-10 right-4 w-3/4 md:hidden flex flex-row items-center justify-around text-lg text-white bg-white bg-opacity-10 backdrop-blur-lg p-2 px-3 rounded-full shadow-lg border border-white/30">
                <NavHashLink
                    smooth
                    to="#home"
                    className={`${activeSection === "home" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <IoHomeOutline />
                </NavHashLink>
                <NavHashLink
                    smooth
                    to="#about"
                    className={`${activeSection === "about" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <FaRegUser />
                </NavHashLink>
                <NavHashLink
                    smooth
                    to="#projects"
                    className={`${activeSection === "projects" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <LiaProjectDiagramSolid />
                </NavHashLink>
                <NavHashLink
                    smooth
                    to="#contact"
                    className={`${activeSection === "contact" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <BiMessageSquareDots />
                </NavHashLink>
            </nav>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex md:flex-col justify-evenly fixed top-1/4 right-12 text-lg text-white h-2/3 bg-white bg-opacity-10 backdrop-blur-lg p-2 px-3 rounded-full shadow-lg border border-white/30">
                <NavHashLink
                    smooth
                    to="#home"
                    className={`${activeSection === "home" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <IoHomeOutline />
                </NavHashLink>
                <NavHashLink
                    smooth
                    to="#about"
                    className={`${activeSection === "about" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <FaRegUser />
                </NavHashLink>
                <NavHashLink
                    smooth
                    to="#projects"
                    className={`${activeSection === "projects" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <LiaProjectDiagramSolid />
                </NavHashLink>
                <NavHashLink
                    smooth
                    to="#contact"
                    className={`${activeSection === "contact" ? "text-[#ffd2fb] bg-white bg-opacity-20 scale-110" : "text-white"} transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-110 p-2 rounded-full`}
                >
                    <BiMessageSquareDots />
                </NavHashLink>
            </nav>
        </>
    );
};

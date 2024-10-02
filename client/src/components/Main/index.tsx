import React, { useEffect, useRef } from 'react';
import { Home } from '../Home';
import { About } from '../About';
import { Projects } from '../Projects';
import { Contact } from '../Contact';

interface MainProps {
    setActiveSection: (section: string) => void; // Type for setActiveSection
}

export const Main: React.FC<MainProps> = ({ setActiveSection }) => {
    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const sections = [
            { id: 'home', ref: homeRef },
            { id: 'about', ref: aboutRef },
            { id: 'projects', ref: projectsRef },
            { id: 'contact', ref: contactRef },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5, 
            }
        );

        sections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section.ref.current) {
                    observer.unobserve(section.ref.current);
                }
            });
        };
    }, [setActiveSection]);

    return (
        <div className="text-white h-full">
            <section id="home" ref={homeRef} className="min-h-screen">
                <Home />
            </section>
            <section id="about" ref={aboutRef} className="min-h-screen">
                <About />
            </section>
            <section id="projects" ref={projectsRef} className="min-h-screen">
                <Projects />
            </section>
            <section id="contact" ref={contactRef} className="min-h-screen">
                <Contact />
            </section>
        </div>
    );
};

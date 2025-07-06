import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceTimeline.scss';

const experiencesData = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Incture Technology",
        companyUrl: "", // Add URL if available
        dates: "Nov 2024 - Present", // As provided by user, verify if it's a future date or typo
        location: "Bengaluru, India",
        points: [
            "Leading frontend team for SAP S2P business onboarding applications, ensuring high-quality standards.",
            "Refactored codebase to improve maintainability and scalability, aligning with industry best practices.",
            "Integrated Redux Toolkit, Material-UI, ESLint, Husky, and Webpack for optimized development workflow.",
            "Established reusable component libraries, reducing development time by 20%."
        ],
        technologies: ["React", "Redux Toolkit", "Material-UI", "ESLint", "Husky", "Webpack"]
    },
    {
        id: 2,
        title: "Lead Developer",
        company: "Tecnotree Convergence Private Limited",
        companyUrl: "", // Add URL if available
        dates: "Aug 2022 - Nov 2024",
        location: "Bengaluru, India",
        points: [
            "Led frontend development for a telecom commissions platform with intricate business logic.",
            "Collaborated with design teams to implement responsive layouts and multi-language support.",
            "Improved development efficiency by configuring Webpack and implementing light/dark theming.",
            "Reduced bugs by 20% through code refactoring."
        ],
        technologies: ["React", "Webpack", "JavaScript"] // Add more specific ones if applicable
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "Emproto Technology Private Limited",
        companyUrl: "", // Add URL if available
        dates: "June 2021 - July 2022",
        location: "Bengaluru, India",
        points: [
            "Worked on an e-commerce platform specializing in flower sales, built from scratch to support both admin and customer interfaces.",
            "Admin Platform: Created a dynamic admin interface allowing users to configure all aspects of the customer site, including header, navbar, image groups, and CTA colors. Led the team in fixing major bugs and enhancing functionality, ensuring a robust and user-friendly admin experience.",
            "Customer Platform: Architected and developed the customer-facing e-commerce application, focusing on dynamic content with minimal CSS. Implemented Progressive Web App (PWA) capabilities, ensuring responsiveness across laptops, and mobile devices with distinct designs."
        ],
        technologies: ["React", "PWA", "JavaScript"] // Add more
    },
    {
        id: 4,
        title: "Frontend Developer",
        company: "Solytics Partner",
        companyUrl: "", // Add URL if available
        dates: "Dec 2020 - June 2021",
        location: "Pune, India",
        points: [
            "Developed the Jupiter Book module to automate Python scripts, enhancing platform interactivity.",
            "Refactored product from static CSS to Material-UI design, reducing page load time by 18%."
        ],
        technologies: ["Python", "Material-UI", "JavaScript"] // Add more
    }
];

const ExperienceTimeline = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, // Stagger animation
                duration: 0.5,
            },
        }),
    };

    return (
        <section id="Experience" className="experience-section">
            <motion.h2
                initial={{opacity:0, y: -50}}
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{duration:0.5}}
            >
                My Experience
            </motion.h2>
            <div className="timeline-container">
                {experiencesData.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="timeline-item"
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of item is visible
                    >
                        <div className="timeline-content">
                            <h3>
                                {exp.title}
                                {exp.companyUrl ? (
                                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                                        at {exp.company}
                                    </a>
                                ) : (
                                    ` at ${exp.company}`
                                )}
                            </h3>
                            <p className="dates-location">{exp.dates} | {exp.location}</p>
                            <ul className="points">
                                {exp.points.map((point, pIndex) => (
                                    <li key={pIndex}>{point}</li>
                                ))}
                            </ul>
                            {exp.technologies && exp.technologies.length > 0 && (
                                <div className="technologies-used">
                                    <strong>Key Technologies:</strong>
                                    <div className="tags">
                                        {exp.technologies.map((tech, tIndex) => (
                                            <span key={tIndex} className="tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;

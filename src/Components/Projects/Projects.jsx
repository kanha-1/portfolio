import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ProjectsDocs = [
    {
        id: 1,
        title: "Social Blog",
        img: "/socialss.png",
        description: "A full-stack MERN application allowing users to create, share, and comment on blog posts. Features user authentication and a responsive design.",
        github: "https://github.com/kanha-1/social-blog-MERN",
        liveUrl: "https://social-blog-web.onrender.com",
        techUsed: "HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB, MaterialUI"
    },
    {
        id: 2,
        title: "Whatsapp Web Clone",
        img: "public/Phone.gif", // Placeholder: Replace with actual relevant image if possible, or a generic one
        description: "A front-end clone of Whatsapp Web focusing on UI and real-time chat mock-up. (Conceptual project, not fully functional backend).",
        github: "https://github.com/kanha-1", // Update with specific repo if available
        liveUrl: "",
        techUsed: "ReactJs, CSS, JavaScript" // Example
    },
    {
        id: 3,
        title: "Google Meet Clone",
        img: "public/MapOne.gif", // Placeholder: Replace with actual relevant image if possible, or a generic one
        description: "A web application mimicking core features of Google Meet, such as video conferencing mock-ups. (Conceptual project).",
        github: "https://github.com/kanha-1", // Update with specific repo if available
        liveUrl: "",
        techUsed: "ReactJs, WebRTC (conceptual), CSS" // Example
    },
    {
        id: 4,
        title: "Drawing App",
        img: "public/developer.png", // Placeholder: Replace with actual relevant image if possible, or a generic one
        description: "A simple browser-based drawing application allowing users to sketch with various tools and colors.",
        github: "https://github.com/kanha-1", // Update with specific repo if available
        liveUrl: "",
        techUsed: "HTML, CSS, JavaScript, Canvas API" // Example
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

    // More descriptive alt text
    const imageAltText = item.title ? `Screenshot or representation of ${item.title}` : "Project image";

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgCont" ref={ref}>
                        <img src={item.img} alt={imageAltText} />
                    </div>
                    <motion.div className="textCont" style={{ y: y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        {item.techUsed && <p><strong>Tech Used:</strong> {item.techUsed}</p>}
                        <div className="parent_btn">
                            {item.liveUrl ? (
                                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <button> <img src="/live.png" alt="" /> See Demo</button>
                                </a>
                            ) : (
                                <button disabled> <img src="/live.png" alt="" /> See Demo</button>
                            )}
                            <a href={item.github} target="_blank" rel="noopener noreferrer">
                                <button><img src="/github.png" alt="GitHub Icon" />GitHub</button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function Projects() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className="Projects_main" ref={ref}>
            <div className="progres">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {ProjectsDocs.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

import { useRef } from "react"
import "./projects.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const ProjectsDocs = [
    {
        id: 1,
        title: "Social Blog",
        img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia corrupti quo ab, quas nobis, facilis temporibus minus sint debitis sit illo accusamus! Provident inventore quo placeat minus dolores architecto modi?",
        github: "https://github.com/kanha-1"
    },
    {
        id: 2,
        title: "Whatsapp Web Clone",
        img: "https://images.pexels.com/photos/18522260/pexels-photo-18522260/free-photo-of-spider-on-web.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia corrupti quo ab, quas nobis, facilis temporibus minus sint debitis sit illo accusamus! Provident inventore quo placeat minus dolores architecto modi?",
        github: "https://github.com/kanha-1"
    },
    {
        id: 3,
        title: "Google Meet Clone",
        img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia corrupti quo ab, quas nobis, facilis temporibus minus sint debitis sit illo accusamus! Provident inventore quo placeat minus dolores architecto modi?",
        github: "https://github.com/kanha-1"
    },
    {
        id: 4,
        title: "Drawing App",
        img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia corrupti quo ab, quas nobis, facilis temporibus minus sint debitis sit illo accusamus! Provident inventore quo placeat minus dolores architecto modi?",
        github: "https://github.com/kanha-1"
    },
]
const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgCont"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textCont" style={{ y: y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default function Projects() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
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
    )
}

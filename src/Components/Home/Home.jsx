import React from 'react'
import { motion } from "framer-motion"
import "./hero.scss"

export default function Home() {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollBtn: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const textSliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            }
        },
    }
    return (
        <div className='Home_Main'>
            <motion.div className='slidingTextCont'
                initial="initial"
                animate="animate"
                variants={textSliderVariants}>
                Frontend Developer and Backend Developer With Javascript
            </motion.div>
            <div className="secondary_cont">
                <motion.div
                    variants={textVariants}
                    className="textCont"
                    initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>KAHNU CHARAN SAHOO</motion.h2>
                    <motion.h1 variants={textVariants}>Frontend Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="ctaBtns">
                        <a href="#Portfolio">
                            <motion.button variants={textVariants}>My Recent Works</motion.button>
                        </a>
                        <a href="#Contact">
                            <motion.button whileHover={{
                                scale: 1.3,
                                transition: { duration: .4 },
                            }}
                                whileTap={{ scale: 0.9 }} variants={textVariants} className='active_btn'>Contact Me</motion.button>
                        </a>
                    </motion.div>
                    <motion.img animate="scrollBtn"
                        variants={textVariants} src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="imageCont">
                {/* <img src="/linkedin.png" alt="" /> */}
                <img src="/developer.png" height="90%" width="100%" alt="" />
            </motion.div>
        </div>
    )
}

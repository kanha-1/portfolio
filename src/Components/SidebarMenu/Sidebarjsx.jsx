import { useState } from "react"
import SideLinks from "./SidebarLinks"
import ToggleButton from "./ToggleButton"
import { motion } from "framer-motion"
import "./sidebar.scss"
export default function SidebarMenu() {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div className="sidebar_main"
            animate={open ? "open" : "closed"}>
            <motion.div variants={variants} className="main_bg">
                <SideLinks />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

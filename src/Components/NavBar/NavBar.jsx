import SidebarMenu from "../SideBarMenu/SidebarMenu"
import "./navbar.scss"
import { motion } from "framer-motion"
export default function NavBar() {
    return (
        <div className='navbar_main'>
            {/* sidebar */}
            <SidebarMenu />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className='social_Links'>
                    <a href="https://github.com/kanha-1" target="_blank"> <img src="/github.png" alt="GitHub" /> </a>
                    <a href="https://www.linkedin.com/in/kanha-1/" target="_blank"> <img src="/linkedin.png" alt="LinkedIn" /> </a>
                    <a href="https://www.instagram.com/kanha_1/" target="_blank"> <img src="/instagram.png" alt="Instagram" /> </a>
                    <a href="https://www.facebook.com/kanha.001" target="_blank"> <img src="/facebook.png" alt="Facebook" /> </a>
                </motion.span>
            </div>
        </div>
    )
}

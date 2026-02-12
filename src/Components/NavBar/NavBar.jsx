<<<<<<< HEAD
import SidebarMenu from "../SidebarMenu/Sidebarjsx"; // Suggest renaming Sidebarjsx.jsx to Sidebar.jsx or SidebarMenu.jsx
import "./navbar.scss";
import { motion } from "framer-motion";

export default function NavBar() {
    return (
        <div className='navbar_main'>
            {/* sidebar */}
            <SidebarMenu />
            <div className="wrapper">
                {/* The empty motion.span has been removed. If you intended to have a logo or title here, you can add it. */}
                <motion.div // Changed to div for clarity if it's a container for future text/logo
                    initial={{ opacity: 0, x: -100, scale: 0.5 }} // Example: animate from left
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ flexGrow: 1 }} // Allows this element to take up space if needed
                >
                    {/* You can add your name/logo here, e.g., <span>Kahnu Charan Sahoo</span> */}
                </motion.div>
                <motion.div // Changed to div for consistency
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='social_Links'>
                    <a href="https://github.com/kanha-1" target="_blank" rel="noopener noreferrer"> <img src="/github.png" alt="GitHub" /> </a>
                    <a href="https://www.linkedin.com/in/kanha-1/" target="_blank" rel="noopener noreferrer"> <img src="/linkedin.png" alt="LinkedIn" /> </a>
                    <a href="https://www.instagram.com/kanha_1/" target="_blank" rel="noopener noreferrer"> <img src="/instagram.png" alt="Instagram" /> </a>
                    <a href="https://www.facebook.com/kanha.001" target="_blank" rel="noopener noreferrer"> <img src="/facebook.png" alt="Facebook" /> </a>
                </motion.div>
            </div>
        </div>
    );
}
=======
import SidebarMenu from "../SidebarMenu/Sidebarjsx"; // Suggest renaming Sidebarjsx.jsx to Sidebar.jsx or SidebarMenu.jsx
import "./navbar.scss";
import { motion } from "framer-motion";

export default function NavBar() {
    return (
        <div className='navbar_main'>
            {/* sidebar */}
            <SidebarMenu />
            <div className="wrapper">
                {/* The empty motion.span has been removed. If you intended to have a logo or title here, you can add it. */}
                <motion.div // Changed to div for clarity if it's a container for future text/logo
                    initial={{ opacity: 0, x: -100, scale: 0.5 }} // Example: animate from left
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ flexGrow: 1 }} // Allows this element to take up space if needed
                >
                    {/* You can add your name/logo here, e.g., <span>Kahnu Charan Sahoo</span> */}
                </motion.div>
                <motion.div // Changed to div for consistency
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='social_Links'>
                    <a href="https://github.com/kanha-1" target="_blank" rel="noopener noreferrer"> <img src="/github.png" alt="GitHub" /> </a>
                    <a href="https://www.linkedin.com/in/kanha-1/" target="_blank" rel="noopener noreferrer"> <img src="/linkedin.png" alt="LinkedIn" /> </a>
                    <a href="https://www.instagram.com/kanha_1/" target="_blank" rel="noopener noreferrer"> <img src="/instagram.png" alt="Instagram" /> </a>
                    <a href="https://www.facebook.com/kanha.001" target="_blank" rel="noopener noreferrer"> <img src="/facebook.png" alt="Facebook" /> </a>
                </motion.div>
            </div>
        </div>
    );
}
>>>>>>> 801c5c6118a1ad36e39a1b45c3d34515f88deecd

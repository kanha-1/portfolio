import React from 'react'
import { motion } from "framer-motion";

export default function SideLinks() {
  const listItems = [
    "Home", "Services", "Portfolio", "Contact",
  ]
  const Itemvariants = {
    open: {
      y: 0,
      opacity: 1
    },
    closed: {
      y: 50,
      opacity: 0
    },
  }
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1
      }
    },
  }
  return (
    <motion.div className='links' variants={variants}>
      {listItems.map((items) => {
        return (
          <motion.a href={`#${items}`}
            key={items}
            variants={Itemvariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >{items}</motion.a>
        )
      })}
    </motion.div>
  )
}

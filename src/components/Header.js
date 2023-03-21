import React from 'react'
import { motion } from 'framer-motion'

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: -10,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 220,
    },
  },
}

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
}
const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
}
const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          animate="visible"
          initial="hidden"
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header

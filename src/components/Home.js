import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loader from './Loader'

const homeVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: -10,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 300,
    },
  },
  exit: {
    transition: {
      x: '-100vw',
      delay: 0.2,
      ease: 'easeInOut',
    },
  },
}

const buttonContraints = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: [0, -20, 20, -20, 20, 0],
    transition: {
      delay: 2,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
  },
}
const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonContraints}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home

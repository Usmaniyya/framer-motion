import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const modalVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}
const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 120,
    },
  },
}
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="modal"
          variants={modalVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div
            className="backdrop"
            variants={modal}
            animate="visible"
            initial="hidden"
          >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Make Pizza</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal

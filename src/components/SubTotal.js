import React from 'react'

import { motion } from 'framer-motion'

  
const cartCal = {
    hidden: { y: '100vh', opacity: 0 },
    visible: {
      y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            stiffness:120,
            // staggerChildren:0.2
      }
    }
}

function SubTotal() {
    return (
        <motion.div className="cartCal"
        variants={cartCal}
        initial='hidden'
        animate='visible'
    >
        <h4>cart details</h4>
        <div className="tot-row">
            <h4>total amount</h4>
            <h3>Rs 398</h3>
        </div>
        <div className="dis-row">
            <h4>discount</h4>
            <h3>Rs 0</h3>
        </div>
        <div className="fin-amount">
            <h4>final amount</h4>
            <h3>Rs 398</h3>
        </div>
    </motion.div>
    )
}

export default SubTotal

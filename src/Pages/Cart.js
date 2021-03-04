import './Cart.css'

import { motion } from 'framer-motion'
import {Link}  from 'react-router-dom'


import homeLink from '../images/home.svg'
import CartItem from './CartItem'
import SubTotal from '../components/SubTotal'

const cartList = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
        transition: {
          type:'spring',
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const cartItems = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.5
      }
    }
}

  const cartBtn = {
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

function Cart() {
    return (
        <div className='cartList'>
            <nav className="cartNav">
                <div className="cartNav-container">
                    <Link className="home-link" to='/'>
                        <img src={homeLink} alt="Home Page"/>
                    </Link>
                    <h4>shopping cart</h4>
                </div>
            </nav>
            <motion.div className="cartItems"
                variants={cartItems}
                initial='hidden'
                animate='visible'
            >
                <CartItem/>
                <CartItem/>
            </motion.div>
                <SubTotal/>
            <motion.button
                variants={cartBtn}
                initial='hidden'
                animate='visible'
            >checkout</motion.button>
        </div>
    )
}

export default Cart

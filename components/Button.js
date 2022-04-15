import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Button = ({ title, classname, disable, loading }) => {
   
    return (
        <motion.button
            disabled={disable}
            whileHover={!disable && { scale: 1.1, opacity: 0.8 }}
            className={`border ${classname} text-xs md:text-base flex items-center rounded uppercase p-2 lg:px-8 py-2`}>
            {loading && <AiOutlineLoading3Quarters className='w-4 h-4 animate-spin text-white' />}
            <span className='mx-2'> {title} </span>
        </motion.button>
    )
}

export default Button
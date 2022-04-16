import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { rotateVariant } from '../pages'

const Card = ({ image, name, username, role, bio, profileLink }) => {
    return (
        <motion.div
            // variants={rotateVariant}
            initial="hidden"
            whileInView="visible"
            className='p-4 py-8 text-center rounded-2xl border border-gray-200 hover:shadow-lg'>
            <Image
                className='rounded-full'
                width={300}
                height={300}
                layout=''
                src={image}
                alt={name} />
            <h3 className='text-3xl capitalize my-2'>{name}</h3>
            <h3 className='text-2xl'>{role}</h3>
            <h5 className='text-lg my-2'>Twitter:
                <a href={profileLink}
                    target='_blank'
                    rel='noreferrer'
                    className=''> <span className='text-blue-400'> @{username}</span> </a></h5>
            <h5 className='italic text-gray-700 my-2'>{bio}</h5>
        </motion.div>
    )
}

export default Card
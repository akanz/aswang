import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import Button from './Button'
import { rotateVariant, opacityVariant } from '../pages'

const FanArt = () => {
    return (
        <motion.section

            className='bg-opacity-20 relative bg-white'>
            <div className={`${styles.Grad} bottom-0 left-0 rounded-tr-full`}>

            </div>
            <div className={`${styles.Grad} top-0 right-0 rounded-bl-full`}>

            </div>
            <motion.div

                initial="hidden"
                whileInView="visible"
                className='grid md:grid-cols-2 w-9/10 lg:w-4/5 mx-auto'>
                <motion.div
                    variants={rotateVariant}
                    initial="hidden"
                    whileInView="visible"
                    className='p-10'>
                    <Image width='100%'
                        height='100%'
                        layout='responsive'
                        src='/images/fanart.svg'
                        alt='collections' />
                </motion.div>

                <motion.div
                    variants={opacityVariant}
                    initial="hidden"
                    whileInView="visible"
                    className='flex items-center'>
                    <div>
                        <h2 className='text-3xl lg:text-5xl'>Upload Your Fan Art</h2>
                        <h4 className='text-lg italic text-gray-600 my-8'>
                            This game is for people who like adventure! In this game, you are esent morbi vel egestas velit, ac eu.
                            Diam facilisis at feugiat sed. Urnndmsstellus.This game is for people
                        </h4>
                        <div>
                            <Link href='/gallery' passHref>
                                <a>
                                    <Button title='View gallery' classname='bg-red-700 text-white' />
                                </a>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default FanArt
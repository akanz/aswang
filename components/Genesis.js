import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '../components/Button'
import { opacityVariant } from '../pages'

const Genesis = () => {
    return (
        <section className='py-24 lg:my-24'>
            <motion.div
                variants={opacityVariant}
                initial="hidden"
                whileInView="visible"
                className='lg:w-7/15 lg:h-96 grid md:grid-cols-2 content-center mx-auto rounded-lg shadow'>
                <div className='p-8 flex items-center'>
                    <div>
                        <h1 className='text-5xl my-4'>Aswang Collection</h1>
                        <h3 className='text-base my-8'>View her Genesis NFT Collection with floor price of 3.5ETH</h3>
                        <div>
                            <Link href='https://opensea.io/collection/aswang'>
                                <a>
                                    <Button title='view on opensea' classname='bg-red-700 text-white' />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='animate-pulse'>
                    <Image width={700}
                        height={700}
                        layout='responsive'
                        src='/images/genesis.svg'
                        alt='genesis art' />
                </div>
            </motion.div>
        </section>
    )
}

export default Genesis
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { opacityVariant } from '../pages'

const Intro = () => {
    return (
        <motion.section
            // variants={opacityVariant}
            initial="hidden"
            whileInView="visible"
            className='grid md:grid-cols-2 animate-pulse py-16'>
            <div className='w-9/10 md:w-4/5 mx-auto lg:mt-24'>
                <h1 className='text-5xl my-5 mt-16'>What is AswangTribe?</h1>
                <h4 className='text-lg text-gray-600 italic font-extralight'>Aswang Tribe is a collection of 3333 generative NFTs on ETH.
                    These 3333 Genesis Aswang will form the beating heart and foundation of a decentralized metaverse
                    brand that aims to be the first Filipino blue-chip NFT project, the leading Web3 Art Collective for creators and
                    builders and one of the most coveted markers of identity in the metaverse.
                    They aim to achieve these goals by building a tight-knit community composed of the most talented creatives in the
                    crypto / NFT space, giving them a place to call home, and providing them with the guidance and support needed to fully
                    realize their dream projects.</h4>
            </div>
            <div className='lg:h-90vh w-full'>
                <Image width='100%'
                    height='100%'
                    layout='responsive'
                    src='/images/aswangGen.svg'
                    alt='siyokoy' />
            </div>
        </motion.section>
    )
}

export default Intro
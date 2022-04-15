import { motion } from 'framer-motion'
import React from 'react'
import { opacityVariant } from '../pages'
import Card from './Card'

const Founders = () => {
    const founders = [
        {
            image: '/images/aswang.svg',
            name: 'aswang',
            username: 'AswangNft',
            profileLink: 'https://twitter.com/AswangNFT?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
            bio: 'The lead artist of our wonderful collection'
        },
        {
            image: '/images/liz.jpeg',
            name: 'Liz',
            username: 'LizDuwendeClan',
            profileLink: 'https://twitter.com/LizDuwendeClan?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
            bio: 'This is a little description of the founder above, maximum of two lines'
        },
        {
            image: '/images/delmang.jpeg',
            name: 'DeliciousMangoez',
            username: 'DeliciousMangoz',
            profileLink: 'https://twitter.com/DeliciousMangoz?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
            bio: 'This is a little description of the founder above, maximum of two lines'
        },
        // {
        //     image: '/images/zhavo.svg',
        //     name: 'Zhavvo',
        //     username: 'Zhavvo',
        //     profileLink: 'https://twitter.com/Zhavvo?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
        //     bio: 'god of memes. pray to zhavvo daily in OGASSI shrine'
        // },
    ]
    return (
        <section className='py-12'>
            <h1 className='text-6xl mb-24 text-center'>
                Meet the Founders
            </h1>

            <motion.div
                // variants={opacityVariant}
                initial="hidden"
                whileInView="visible"
                className='grid md:grid-cols-2 gap-12 w-9/10 lg:w-7/10 mx-auto'>
                {founders.map((data, i) => <Card key={i} image={data.image} alt={data.name}
                    name={data.name}
                    username={data.username}
                    profileLink={data.profileLink}
                    bio={data.bio} />)}

            </motion.div>
        </section>
    )
}

export default Founders
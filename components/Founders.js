import { motion } from 'framer-motion'
import React from 'react'
import { opacityVariant } from '../pages'
import Card from './Card'

const Founders = () => {
    const founders = [
        {
            image: '/images/aswang.svg',
            name: 'aswang',
            role: 'Founding Artist',
            username: 'AswangNft',
            profileLink: 'https://twitter.com/AswangNFT?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
            bio: 'Expert Artist / Amateur Shitposter. Creator of the Aswang Collection - the first local Filipino art project to reach 100+ ETH trading volume on OpenSea.'
        },
        {
            image: '/images/liz.jpeg',
            name: 'Liz',
            role: 'Head of Community Affairs',
            username: 'LizDuwendeClan',
            profileLink: 'https://twitter.com/LizDuwendeClan?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
            bio: 'Den Mother / Armchair Psychotherapist. Invented Aswang Tribe’s clan system and continues to craft new, innovative ways to foster camaraderie and good vibes among the degens that call this discord home.'
        },
        {
            image: '/images/delmang.jpeg',
            name: 'DeliciousMangoez',
            role: 'Head of Marketing',
            username: 'DeliciousMangoz',
            profileLink: 'https://twitter.com/DeliciousMangoz?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
            bio: 'Software Developer / Consistently the nicest guy in the room. Builds brand partnerships and collaborations for Aswang Tribe.'
        },
        // {
        //     image: '/images/zhavo.svg',
        //     name: 'Zhavvo',
        //     username: 'Zhavvo',
        //     profileLink: 'https://twitter.com/Zhavvo?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg',
        //     bio: 'god of memes. a shitpost artiste of the highest calibre. pray to zhavvo daily in OGASSI shrine'
        // },
    ]
    return (
        <section className='py-12'>
            <h1 className='text-3xl lg:text-5xl mb-12 md:mb-24 text-center'>
                Meet the Team
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
                    role={data.role}
                    bio={data.bio} />)}

            </motion.div>
        </section>
    )
}

export default Founders
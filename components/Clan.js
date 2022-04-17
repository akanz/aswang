import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { opacityVariant } from '../pages'
import { useInView } from 'react-intersection-observer';
import Nav from './Nav'
import Nav2 from './Nav2'


const clans = [
    {
        id: 1,
        text:
            "Like many of the the mythic creatures said to inhabit the sea, Siyokoy is described as a threat to all seafarers who venture into unknown waters.They’re aggressive and animalistic, but possess a rational intelligencethat makes them dangerous hunters.",
        name: 'siyokoy',
        img: '/images/siyokoy.svg'
    },
    {
        id: 2,
        text: 'This is a bipedal horse creature of Philippine folklore said to lurk in the mountains and forests and atop Kalumpang. The Tikbalang can also transform itself into human form or turn invisible to humans. ',
        name: 'tikbalang',
        img: '/images/tikbalang.svg'
    },
    {
        id: 3,
        text: 'They are commonly described as an old man or ‘nuno’ with the height of a small child dwelling beneath the earth. Duwendes are known mainly for their magical ability to make someone who hurt them to suffer with unusual diseases. ',
        name: 'duwende',
        img: '/images/duwende.svg'
    },
    {
        id: 4,
        text: 'This is an evil blood-sucking vampire, witch or man-eating monster. It is a half human and half bat. It is usually a scary female monster who can separate her torso and spread huge bat-like wings. She attacks people in their sleep and sucks their blood. ',
        name: 'manananggal',
        img: '/images/manananggal.svg'
    }
]

const fadeInLeft = {
    hidden: {
        x: '-200'
    },
    visible: {
        x: '0',
        transition: {
            type: 'spring',
            stiffness: '200'
        }
    }
}

const Clan = ({ Img }) => {
    const [count, setCount] = useState(1);
    const [nav, setNav] = useState(true)


    const listenScrollEvent = () => {
        window.scrollY > 758 ? setNav(false) : setNav(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count === 4) {
                setCount(1);
            }
            else {
                setCount(count + 1);
            }
        }, 6000)

        return () => clearInterval(intervalId);
    }, [count])

    return (
        <section>
            <div className={`${count === 1 ? 'bg-aswangBlue' :
                count === 2 ? 'bg-aswangGreen' :
                    count === 3 ? 'bg-aswangBrown' : 'bg-aswangOrange'} text-white`}>
                <AnimatePresence>
                    {nav ?
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: .3
                            }}
                            exit={{ opacity: 0 }}>
                            <Nav count={count} />
                        </motion.div> :
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: .3
                            }}
                            exit={{ opacity: 0 }}>
                            <Nav2 />
                        </motion.div>}
                </AnimatePresence>

                <motion.div className='mt-20 grid md:grid-cols-2'>
                    <AnimatePresence>
                        <motion.div
                            variants={opacityVariant}
                            initial="hidden"
                            animate='visible'
                            exit={{ opacity: 0 }}
                        // className={styles.Image}
                        >
                            {clans.map((clan) => clan.id === count &&
                                <motion.div
                                    key={clan.id}
                                    variants={opacityVariant}
                                    initial="hidden"
                                    animate='visible'
                                    exit={{ opacity: 0 }}
                                // className={styles.Image}
                                >

                                    <Image width='100%'
                                        height='100%'
                                        layout='responsive'
                                        priority
                                        src={clan.img}
                                        alt={clan.name} />
                                </motion.div>)}
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                            variants={opacityVariant}
                            initial="hidden"
                            animate='visible'
                            exit={{ opacity: 0 }}
                            className={`p-4 grid place-content-center`}>
                            {clans.map((clan) => clan.id === count &&
                                <motion.div
                                    variants={opacityVariant}
                                    initial="hidden"
                                    animate='visible'
                                    exit={{ opacity: 0 }}
                                    key={clan.id}
                                    className='md:w-4/5 clans lg:w-2/3 mx-auto p-4'>
                                    <h1 className='text-4xl uppercase lg:text-6xl mb-6 italic font-extrabold'>{clan.name}</h1>
                                    <h3 className='text-xl font-extralight italic'>
                                        {clan.text}
                                    </h3>
                                </motion.div>)}

                        </motion.div>
                    </AnimatePresence>
                </motion.div>

            </div>


        </section>
    )
}

export default Clan
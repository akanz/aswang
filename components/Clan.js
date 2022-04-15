import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


const clans = [
    {
        id: 1,
        text:
            "Like many of the the mythic creatures said to inhabit the sea, Siyokoy is described as a threat to all seafarers who venture into unknown waters.They’re aggressive and animalistic, but possess a rational intelligencethat makes them dangerous hunters.",
        name: 'siyokoy'
    },
    {
        id: 2,
        text: 'This is a bipedal horse creature of Philippine folklore said to lurk in the mountains and forests and atop Kalumpang. The Tikbalang can also transform itself into human form or turn invisible to humans. ',
        name: 'tikbalang'
    },
    {
        id: 3,
        text: 'They are commonly described as an old man or ‘nuno’ with the height of a small child dwelling beneath the earth. Duwendes are known mainly for their magical ability to make someone who hurt them to suffer with unusual diseases. ',
        name: 'duwende'
    },
    {
        id: 4,
        text: 'This is an evil blood-sucking vampire, witch or man-eating monster. It is a half human and half bat. It is usually a scary female monster who can separate her torso and spread huge bat-like wings. She attacks people in their sleep and sucks their blood. ',
        name: 'manananggal'
    }
]

const Clan = ({ Img }) => {
    const [count, setCount] = useState(1);


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count === 4) {
                setCount(0);
            }
            else {
                setCount(count + 1);
            }
        }, 6000)

        return () => clearInterval(intervalId);
    }, [count])

    return (

        <section className={`${styles.Clans} lg:h-90vh text-white grid md:grid-cols-2`}>
            <div
                className={styles.Image}
            >
                {/* <Image width='100%'
                    height='100%'
                    layout='responsive'
                    src={`/images/${Img === 0 ? 'siyokoy' : Img === 1 ? 'tikbalang' : Img === 2 ? 'duwende' : 'manananggal'}.svg`}
                    alt='siyokoy' /> */}
            </div>
            <div className={styles.Text}>
                {/* {clans.map((clan, key) => clan.id === count && <div key={key}
                    className='md:w-4/5 lg:w-2/3 mx-auto p-4'>
                    <h1 className='text-5xl lg:text-7xl mb-6 italic font-extrabold'>{clan.name}</h1>
                    <h3 className='text-xl font-light italic'>
                        {clan.text}
                    </h3>
                </div>)} */}

            </div>
        </section>
    )
}

export default Clan
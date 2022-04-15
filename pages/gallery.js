import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

const Gallery = () => {
    const [AllArts, setAllArts] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [dataLoading, setDataLoading] = useState(true)

    console.log(dataLoading)
    const getData = useCallback(
        async () => {
            try {
                const res = await (await axios.get(`https://agile-bastion-80267.herokuapp.com/arts?limit=8&page=${page}`)).data
                setAllArts([...AllArts, ...res.data])
                setLoading(false)
                setDataLoading(false)
            } catch (error) {
                setAllArts([])
                setDataLoading(false)
            }
        },
        [page],
    )

    const loadMore = () => {
        setLoading(true)
        setPage(prev => prev + 1)
    }

    useEffect(() => {
        getData();
    }, [getData])


    return (
        <div>
            <header className={`w-full shadow`}>
                <nav className='flex items-center justify-between p-4 text-white w-9/10 mx-auto'>
                    <div className=''>
                        <Link href='/'>
                            <a className='flex items-center'>
                                <Image height={50} width={60} src='/images/aswangLogo.svg' alt='aswang fansite logo' />
                                <span className='mx-1 text-lg text-black capitalize'>fansite</span>
                            </a>
                        </Link>
                    </div>
                    <div className='md:flex hidden transform lg:translate-x-16 justify-between'>
                        <div className='mr-2 md:mr-7'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://twitter.com/AswangTribe?s=20&t=dVuYKygH1BYpKvZmWu7xHA'>
                                <Image width={30} height={30} src='/images/twitterDark.svg' alt='twitter' />
                            </a>
                        </div>
                        <div>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://discord.gg/gBgTa5rQ'>
                                <Image width={30} height={30} src='/images/discordDark.svg' alt='discord' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <Link href='/upload' passHref>
                            <a>
                                <Button title='upload fan art' classname='bg-red-700 text-white border-transparent' />
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>

            {/* GALLERY */}
            <section className='mb-72'>
                <h1 className='text-4xl font-bold my-16 text-center'>
                    Aswang Fan Art Gallery
                </h1>
                {dataLoading && <div className='flex items-center justify-center'>
                    <Image src='/images/loading.svg'
                        width={200}
                        height={200}
                        alt='' /></div>}


                {AllArts.length > 0 && <div className='Art'>
                    {AllArts.map(data =>
                        <motion.div
                            // whileHover={{ scale: 1.1 }}
                            key={data._id} className='rounded-lg hover:drop-shadow-xl shadow hover:shadow-lg p-4'>
                            <div className='rounded-2xl'>
                                <Image layout="responsive" className='' width={400} height={400}
                                    src={data?.artSrc}
                                    alt='' />
                            </div>
                            <div>
                                <h3 className='text-xl py-2'>{data?.name}</h3>
                                <h5 className=''>Twitter: <span className='text-blue-400'> @{data?.handle} </span></h5>
                            </div>
                        </motion.div>)}
                </div>}
                <div className='w-9/10 mx-auto'>
                    <div onClick={loadMore} className='my-28 justify-center flex text-center'>
                        <Button loading={loading} title='view more' classname='bg-red-700 text-white' />
                    </div>
                    <div className='grid md:grid-cols-6 gap-6 bg-aswnageRed p-6 lg:p-12 rounded-xl'>
                        <div className='col-span-2'>
                            <Button title={<div className='flex items-center text-white capitalize'>
                                <Image width={25} height={25} src='/images/warning.svg' alt='' />
                                <span className='mx-2'>Disclaimer</span>
                            </div>} classname='bg-red-700 text-whitejustify-center' />
                        </div>
                        <div className='col-span-4'>
                            All Fan Art Listed on this page is subject to copyright.
                            Please do not use any pictures from this site for personal projects unless
                            you have permission from the Owners Listed on this page is subject to copyright.
                            Please do not use any pictures from this site for personal projects unless
                            you have permission from the Owner
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
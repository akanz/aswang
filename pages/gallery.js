import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import Nav2 from '../components/Nav2';
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
            <Nav2 />

            {/* GALLERY */}
            <section className='mb-72 mt-40'>
                <h1 className='text-4xl font-bold my-16 text-center'>
                    Aswang Fan Art Gallery
                </h1>
                {dataLoading && <><div className='flex items-center justify-center'>
                    <Image src='/images/loading.svg'
                        width={100}
                        height={100}
                        alt='' /></div>
                    <div className='text-base text-center'>Loading...</div>
                </>}


                {AllArts.length > 0 && <div className='Art'>
                    {AllArts.map(data =>
                        <a
                            target="_blank"
                            rel='noreferrer'
                            href={data.twitterUrl}
                            key={data._id} >
                            <motion.div
                                // whileHover={{ scale: 1.1 }}
                                className='rounded-lg hover:drop-shadow-xl border border-gray-200 hover:shadow-lg p-4'>
                                <div className='rounded-2xl'>
                                    <Image layout="responsive" className='' width={400} height={400}
                                        src={data?.artSrc}
                                        alt='' />
                                </div>
                                <div>
                                    {/* <h3 className='text-xl py-2'>{data?.name}</h3> */}
                                    <h5 className='my-4 text-lg'>Twitter: <span className='text-blue-400'> @{data?.handle} </span></h5>
                                </div>
                            </motion.div> </a>)}
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
                            Please do not use any pictures from this site for personal projects unless you have permission from the
                            Owner who is listed below the picture.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Overlay from '../components/Overlay'
import useUploadProfPic from '../hooks/useUploadProfPic'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'

const Upload = () => {
    const [showModal, setShowModal] = useState(false)
    const [handle, setHandle] = useState('')
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const {
        upLoad, img,
        ImgUpload,
        setImg } = useUploadProfPic();
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useRouter()


    const handleChange = (val) => {
        setHandle(val)
    }
    const nameChange = (val) => {
        setLink(val)
    }

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     },
        // };
        upLoad.append('handle', handle)
        upLoad.append('twitterUrl', link)
        upLoad.append('name', 'this should not be required')
        if (!disable) {
            try {
                const res = await (await axios.post(`https://agile-bastion-80267.herokuapp.com/upload`, upLoad)).data
                console.log(res)
                setLoading(false)
                setShowModal(true)

                setTimeout(() => {
                    history.push('/gallery')
                }, 3000);
            } catch (error) {
                console.log(error.response)
                setLoading(false)
            }
        }

    };


    useEffect(() => {
        if (handle.length > 0 && link.length > 0 && img) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }, [img, link, handle])

    // console.log(showModal)
    return (
        <div>
            <div className='w-9/10 md:w-8/10 mx-auto p-4'>
                <Link href='/' passHref>
                    <a>
                        <Button classname='border border-black' title={<div className='flex items-center'>
                            <Image width={25} height={25} src='/images/arrBack.svg' alt='' />
                            <span className='mx-2'>Back to home</span>
                        </div>} />
                    </a>
                </Link>
            </div>
            <div className='w-9/10 md:w-8/10 mx-auto p-4'>
                <h1 className='text-5xl text-center font-bold my-5'>Upload FanArt</h1>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className=''>
                        <div className='grid mb-3'>
                            <label className='my-1'>Twitter handle</label>
                            <input
                                onChange={(e) => handleChange(e.target.value)}
                                className='p-2 border-gray-300 rounded border' />
                        </div>
                        <div className='grid mb-3'>
                            <label className='my-1'>Twitter link to fan art post</label>
                            <input
                                onChange={(e) => nameChange(e.target.value)}
                                className='p-2 border-gray-300 rounded border' />
                        </div>
                        <div className='grid mb-3'>
                            <label className='my-1'>Upload photo</label>
                            <div className='border-dashed border p-4 rounded border-gray-400 grid place-content-center'>
                                {!img &&
                                    <div className='grid place-content-center'>
                                        <div className='flex justify-center'>
                                            <Image width={100} height={100} src='/images/upFile.svg' alt='' />
                                        </div>
                                        {/* <div className='my-2 text-sm text-gray-600'>Drag and drop a cover photo here</div>
                                        <p className='text-center'>OR</p> */}
                                        <label htmlFor='uploadFile' className='border rounded text-center border-blue-300 p-1 text-sm text-blue-300'>Browse</label>
                                        <input onChange={ImgUpload} accept="image/*,video/*" id='uploadFile' type='file' className='w-0.1 h-0.1' />
                                    </div>
                                }
                                {img && <div className=''>
                                    <Image width={100} height={100} src={URL.createObjectURL(img)} alt=''
                                        className='w-40 h-40 object-cover' />
                                    <div className='text-center text-sm font-semibold my-2 text-darkblue'>{img.name}</div>

                                    <IoCloseCircleOutline onClick={() => {
                                        setImg(null)
                                        // setInvalid(null)
                                    }} className='text-red-700 w-8 h-8 mx-auto' />  </div>}
                            </div>

                        </div>


                        <div className='flex justify-end my-8'>
                            <Button
                                loading={loading}
                                disable={disable}
                                title='upload' classname='bg-red-700 text-white' />
                        </div>
                    </div>
                </form>
            </div>
            {
                showModal &&
                <>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                    <Overlay />
                </>
            }

        </div>
    )
}

export default Upload
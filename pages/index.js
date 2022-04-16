import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Clan from '../components/Clan'
import FanArt from '../components/FanArt'
import Founders from '../components/Founders'
import Genesis from '../components/Genesis'
import Intro from '../components/Intro'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'


export const opacityVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.5
    }
  }
}

export const horizontalLeftVariant = {
  hidden: {
    x: -300,
    opacity: 0,
    when: 'beforeChildren',
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: .5,
      type: 'spring',
      stiffness: 120,
      when: 'beforeChildren',
      staggerChildren: 1
    }
  }
}

export const rotateVariant = {
  hidden: {
    rotateY: -180,
    opacity: 0
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      delay: .5,
      duration: 1
    }
  }
}

export default function Home() {
  const [Img, setImg] = useState(0)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (Img === 3) {
  //       setImg(0);
  //     }
  //     else {
  //       setImg(Img + 1);
  //     }
  //   }, 5000)

  //   return () => clearInterval(intervalId);
  // }, [Img])

  return (
    <div className=''>
      <Head>
        <title>Aswang Fansite. This was made for the love of aswang </title>

      </Head>

      <main className=''>
        {/* CLANS */}
        <Clan Img={Img} />

        {/*  WHAT IS ASWANG */}
        <Intro />

        {/* FOUNDERS */}
        <Founders />

        {/* FANART */}
        <FanArt />

        {/* Genesis */}
        <Genesis />


        {/* Sneak peeks */}
        <section className='bg-aswnageRed bg-opacity-40 py-12 lg:py-24 relative'>

          <div className='w-9/10 mx-auto grid md:grid-cols-2 pb-16 border-b border-aswangGrey'>
            <div className='text-lg md:text-3xl my-4 w-4/5'>
              View sneak peaks from the collection and offer prayers to Zhavvo
              in the Ogassi shrine
            </div>
            <div className='flex items-center'>
              <div className='mr-5'>
                <a href='https://twitter.com/AswangTribe?s=20&t=dVuYKygH1BYpKvZmWu7xHA'>
                  <Button title='follow on twitter' classname='bg-red-700 text-white border-transparent' />
                </a>
              </div>
              <div>
                <a href='https://discord.gg/gBgTa5rQ'>
                  <Button title='join discord' classname='border-red-700 bg-transparent text-red-700' />
                </a>
              </div>
            </div>

          </div>
          <div className='mt-12 w-9/10 mx-auto'>
            <div className='flex items-center'>
              <Image src='/images/copyright.svg' alt='copyright'
                width={25} height={25} />
              <span> 2022 </span>
            </div>
            All Rights Reserved, AswangTribe Fansite. brought to you by
            <a
              target='_blank'
              rel='noreferrer'
              className='mx-2 text-red-700 italic' href='https://twitter.com/chimmss_?s=20&t=kuMfV6wFCdQRJTr8UTc6Cg'>chimmss.NFT </a> !pray.
          </div>

        </section>

      </main>
    </div>
  )
}

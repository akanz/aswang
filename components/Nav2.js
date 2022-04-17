import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Nav2 = () => {
  return (
    <header className={`w-full bg-white fixed top-0 z-10 shadow-lg`}>
      <nav className='flex transition-all duration-700 items-center justify-between p-4 text-white md:w-9/10 mx-auto'>
        <div className=''>

          <Link href='/'>
            <a className='flex items-center'>
              <Image height={50} width={60} src='/images/aswangLogo.svg' alt='aswang fansite logo' />
              <span className='mx-1 text-lg text-red-700 font-bold capitalize'>fansite</span>
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
  )
}

export default Nav2
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import Button from './Button'

const Nav = () => {
    return (
        <header className={`w-full`}>
            <nav className='flex items-center justify-between p-4 text-white md:w-9/10 mx-auto'>
                <div>
                    <Link href='/'>
                        <a className='flex items-center'>
                            <Image height={50} width={60} src='/images/aswangLogo.svg' alt='aswang fansite logo' />
                            <span className='mx-1 text-lg capitalize'>fansite</span>
                        </a>
                    </Link>
                </div>
                <div className='md:flex hidden transform lg:translate-x-20 justify-between'>
                    <div className='mr-2 md:mr-7'>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://twitter.com/AswangTribe?s=20&t=dVuYKygH1BYpKvZmWu7xHA'>
                            <Image width={30} height={30} src='/images/twtter.svg' alt='twitter' />
                        </a>
                    </div>
                    <div>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://discord.gg/gBgTa5rQ'>
                            <Image width={30} height={30} src='/images/discord.svg' alt='discord' />
                        </a>
                    </div>
                </div>
                <div>
                    <Link href='/upload' passHref>
                        <a>
                            <Button title='upload fan art' />
                        </a>
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Nav
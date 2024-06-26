'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './Gnb.scss'

export default function GNB() {
  const [logoConf, setLogoConf] = useState<any>({
    src: '/images/textlogo.svg',
    width: 151,
  })

  useEffect(() => {
    const loadLogo = () => {
      if (window.innerWidth < 376) {
        setLogoConf({ src: '/images/logo.svg', width: 71 })
      } else {
        setLogoConf({ src: '/images/textlogo.svg', width: 151 })
      }
    }

    loadLogo()

    window.addEventListener('resize', loadLogo)
    return () => {
      window.removeEventListener('resize', loadLogo)
    }
  }, [])
  return (
    <>
      <nav id="gnb">
        <div id="gnbButtonWrapper">
          <Link href="/">
            <Image
              src={logoConf.src}
              alt="Do It!"
              width={logoConf.width}
              height={40}
            />
          </Link>
        </div>
      </nav>
    </>
  )
}

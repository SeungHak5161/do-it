'use client'
import { usePathname } from 'next/navigation'
import './Main.scss'

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const getBgColor = () => {
    const path = pathname.split('/')[1]
    switch (path) {
      case 'items':
        return '#fff'
      default:
        return ''
    }
  }
  return (
    <>
      <div id="mainWrapper">
        <main id="main" style={{ backgroundColor: getBgColor() }}>
          {children}
        </main>
      </div>
    </>
  )
}

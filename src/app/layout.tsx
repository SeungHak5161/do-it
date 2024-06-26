import GNB from '@/components/Gnb/Gnb'
import Main from '@/components/Main/Main'
import '@/styles/globals.css'
import { NanumSquare } from '@/utils/fonts'
import type { Metadata } from 'next'

// 메타데이터 + favicon 설정
export const metadata: Metadata = {
  title: 'Do It!',
  description: 'todo app for codeit KDT project',
  icons: {
    icon: '/images/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={NanumSquare.className}>
        <GNB />
        <Main>{children}</Main>
      </body>
    </html>
  )
}

import GNB from '@/components/Gnb/Gnb'
import Loading from '@/components/Loading/Loading'
import Main from '@/components/Main/Main'
import { LoadingProvider } from '@/contexts/LoadingContext/LoadingProvider'
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
    <LoadingProvider>
      <html lang="en">
        <body className={NanumSquare.className}>
          <GNB />
          <Main>{children}</Main>
          <Loading />
        </body>
      </html>
    </LoadingProvider>
  )
}

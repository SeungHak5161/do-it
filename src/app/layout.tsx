import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

// otf 파일을 로컬 폰트로 등록
const NanumSquare = localFont({
  src: [
    {
      path: './fonts/NanumSquareL.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/NanumSquareR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NanumSquareB.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

// 메타데이터 + favicon 설정
export const metadata: Metadata = {
  title: 'Do It!',
  description: 'todo app for codeit KDT project',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={NanumSquare.className}>{children}</body>
    </html>
  )
}

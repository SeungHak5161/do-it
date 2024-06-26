import localFont from 'next/font/local'

// otf 파일을 로컬 폰트로 등록
export const NanumSquare = localFont({
  src: [
    {
      path: '../../public/fonts/NanumSquareL.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NanumSquareR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NanumSquareB.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

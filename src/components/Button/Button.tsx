'use client'
import { useEffect, useRef } from 'react'
import './Button.scss'

interface ButtonProps {
  text: string
  color: string
  img: string
  onClick: () => void
}

export default function Button({ text, color, img, onClick }: ButtonProps) {
  const buttonRef = useRef<any>(null)
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = color
    }
  }, [])
  return (
    <>
      <div className="buttonWrapper" ref={buttonRef}>
        <button onClick={onClick}>
          <img src={img} alt={text} />
          <span>{text}</span>
        </button>
      </div>
    </>
  )
}

'use client'
import { LoadingContext } from '@/contexts/LoadingContext/LoadingProvider'
import { useContext } from 'react'
import './Loading.scss'

// export const Loading: React.FC<{ state: boolean }> = (state) => {
export const Loading = () => {
  const { isLoading } = useContext(LoadingContext)
  return (
    <>
      {isLoading && (
        <div id="loadingWrapper">
          <div id="loading"></div>
        </div>
      )}
    </>
  )
}

export default Loading

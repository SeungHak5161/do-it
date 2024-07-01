'use client'
import { createContext, useReducer } from 'react'

const loadingReducer = (
  state: { isLoading: boolean },
  action: { type: string; payload: boolean },
) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const LoadingContext = createContext({
  isLoading: false,
  setLoading: (isLoading: boolean) => {},
})

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(loadingReducer, { isLoading: false })

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading })
  }

  return (
    <LoadingContext.Provider value={{ ...state, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

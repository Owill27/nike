import React, { useState } from 'react'
import { shoeInfo } from './shoes-data'

interface State { activeShoeId: shoeInfo['id'], activeVariety: number }

const defaultState = {
  activeShoeId: 1,
  activeVariety: 0,
  setActiveShoe: ( id: shoeInfo['id']): void => void 0,
  setActiveVariety: ( index: number): void => void 0
}

export const StateContext = React.createContext(defaultState)

const StateProvider: React.FC = ({ children }) => {

  const appState: State = {
    activeShoeId: 1,
    activeVariety: 0
  }

  const [ state, setState ] = useState(appState)
  const setActiveShoe = ( id: shoeInfo['id'] ): void => setState({...state, activeShoeId: id, activeVariety: 0 })
  const setActiveVariety = ( index: number ): void => setState({...state, activeVariety: index })

  return (
    <StateContext.Provider value={{...state, setActiveShoe, setActiveVariety }}>
      { children }
    </StateContext.Provider>
  )
}

export default StateProvider
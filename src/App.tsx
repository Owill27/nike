import React from 'react'
import Background from './components/Background'
import Header from './components/Header'
import BottomBar from './components/BottomBar'
import MainView from './components/MainView'
import { shoesData } from './shoes-data'
import './App.scss'

function App() {
  return (
    <div className="App white-theme">
      <Background />
      <div className='Body'>
        <Header />
        <MainView shoe={shoesData[0]}/>
        <BottomBar />
      </div>
    </div>
  )
}

export default App

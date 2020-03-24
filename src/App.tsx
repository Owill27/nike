import React from 'react'
import Background from './components/Background'
import Header from './components/Header'
import BottomBar from './components/BottomBar'
import MainView from './components/MainView'
import './App.scss'

function App() {
  return (
    <div className="App white-theme">
      <Background />
      <div className='Body'>
        <Header />
        <MainView />
        <BottomBar />
      </div>
    </div>
  )
}

export default App

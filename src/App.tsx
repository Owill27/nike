import React from 'react'
import Background from './components/Background'
import './App.scss'
import Header from './components/Header'
import BottomBar from './components/BottomBar'

function App() {
  return (
    <div className="App white-theme">
      <Background />
      <div className='Body'>
        <Header />
        <BottomBar />
      </div>
    </div>
  )
}

export default App

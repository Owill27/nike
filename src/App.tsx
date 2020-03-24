import React from 'react'
import Background from './components/Background'
import './App.scss'
import Header from './components/Header'

function App() {
  return (
    <div className="App white-theme">
      <Background />
      <div className='Body'>
        <Header />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Camas } from './components/Pages/Camas/Camas'
import { Header } from './components/Layouts/Header/Header'

function App() {

  return (
    <>
      <Header/>

      <Camas/>
    </>
  )
}

export default App

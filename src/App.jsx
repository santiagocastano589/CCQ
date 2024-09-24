import { useState } from 'react'
import './App.css'
import { Camas } from './components/Pages/Camas/Camas'
import { Header } from './components/Layouts/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <h1>Tablero de Pacientes</h1>
      <Camas/>
    </>
  )
}

export default App

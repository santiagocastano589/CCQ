import { useState } from 'react'
import './App.css'
import { Camas } from './components/Pages/Camas/Camas'
import { Filters } from './components/Filters/Filters'

function App() {

  return (
    <>
      <h1>Clinica central</h1>
      <div className='containerFilter'>
        <Filters/>
      </div>
      <Camas/>
    </>
  )
}

export default App

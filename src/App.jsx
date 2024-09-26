import './App.css'
import { Camas } from './components/Pages/Camas/Camas'
import { Header } from './components/Layouts/Header/Header'
import { Footer } from './components/Layouts/Footer/Footer'
import { SubHeader } from './components/SubHeader/SubHeader'

function App() {

  return (
    <>
      <Header/>
      <SubHeader/>
      <Camas/>
      <Footer/>
    </>
  )
}

export default App

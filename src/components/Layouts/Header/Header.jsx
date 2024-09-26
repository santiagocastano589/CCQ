import React from 'react'
import LogoClinica from "../../../assets/LogoClinica.png";
export const Header = () => {
  return (
    <>
        <header>
            <img src={LogoClinica} alt="LogoClinica" className='imgClinica'/>
            <h1>Clínica Central del Quíndio</h1>
        </header>
    </>
  )
}

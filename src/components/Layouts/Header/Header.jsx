import React from 'react'
import LogoClinica from "../../../assets/LogoClinica.png";
export const Header = () => {
  return (
    <>
        <header>
            <img src={LogoClinica} alt="LogoClinica" className='imgClinica'/>
            <h1>Clinica Central del Quindio</h1>
        </header>
    </>
  )
}

import React from 'react'
import LogoClinica from "../../../assets/LogoClinica.png";
export const Footer = () => {
  return (
    <>
        <footer>
            <img src={LogoClinica} alt="LogoClinica" />
            <div id='copy'>
                <p>Copyright 2024 &copy; Todos los derechos reservados. Desarrollado por <span>Santiago Castaño</span></p>
            </div>
        </footer>
    </>
  )
}

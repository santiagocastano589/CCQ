import React from 'react'

export const Filters = () => {
  return (
    <>
        <div>
            <select name="" id="">
                <option value="">Urgencias</option>
                <option value="">Inyectologia</option>
                <option value="">UCI</option>
                <option value="">Pedriatria</option>
                <option value="">Laboratorio</option>
            </select>
        </div>
        <div>
            <input className='search' type="search" placeholder='Buscar paciente'/>
        </div>
        <div>
            <button>Buscar</button>
        </div>
    </>
  )
}

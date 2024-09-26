import React, { useEffect, useState } from 'react'


export const Camas = () => {

const [filtered, setFiltered] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const [dataCamas, setCamasData] = useState([]);


useEffect(() =>{

    const fetchCamas = async() => {
        try {
            const response = await fetch('http://localhost:3000/');
            const camas = await response.json();            
            setCamasData(camas.recordset || [])
            
            console.log(camas);
            
          } catch (error) {
            console.log('Error al traer los datos:', error);
          };
        }
        fetchCamas();
    }, []);




  useEffect(() =>{
    if (Array.isArray(dataCamas)) {
        
    
    const filterCamas = dataCamas.filter(dato =>
        dato.Pabellon?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.Cama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.Documento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.Folio?.toString().includes(searchTerm) ||
        dato.Paciente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.Origen_Atencion?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.Tipo_Concepto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dato.Cups?.toLowerCase().includes(searchTerm.toLowerCase())||
        dato.Nombre_Procedimiento?.toLowerCase().includes(searchTerm.toLowerCase())||
        dato.Cantidad?.toString().includes(searchTerm) ||
        dato.Fch_Orden?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFiltered(filterCamas);
 
}else{
    setFiltered([]);
}

}, [searchTerm, dataCamas]);


const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <>
    <div className='containerFilter'>
        <div>
            <select name="Pabellon" id="Pabellon" onChange={handleSearchChange}>
                <option value="">TODOS LOS PABELLONES</option>
                <option value="URGENCIAS">URGENCIAS</option>
                <option value="UCIN ADULTOS">UCIN ADULTOS</option>
                <option value="OBSERVACION ADULTOS">OBSERVACION ADULTOS</option>
                <option value="HOSPITALIZACION 2 PISO">HOSPITALIZACION 2 PISO</option>
                <option value="HOSPITALIZACION 3 PISO">HOSPITALIZACION 3 PISO</option>
                <option value="HOSPITALIZACION 4 PISO">HOSPITALIZACION 4 PISO</option>
                <option value="HOSPITALIZACION 5 PISO">HOSPITALIZACION 5 PISO</option>
                <option value="HOSPITALIZACION 6 PISO">HOSPITALIZACION 6 PISO</option>
                <option value="EXPANSIÓN URGENCIAS">EXPANSIÓN URGENCIAS</option>
            </select>
        </div>
        <div>
            <input 
            className='search' 
            type="text" 
            placeholder='Buscar paciente' 
            onChange={handleSearchChange}/>
        </div>
        <div>
            <input type="date" name="fecha" id="fecha" onChange={handleSearchChange}/>
        </div>
        {/* <div>
            <input type="time" name="" id="" onChange={handleSearchChange}/>
        </div> */}

    </div>
    <div className='containerTable'>
        <table id='customers'>
            <thead>
                <tr>
                    <th>Pabellon</th>
                    <th>Cama</th>
                    <th>Ingreso</th>
                    <th>Tipo Documento</th>
                    <th>Documento</th>
                    <th>Folio</th>
                    <th>Paciente</th>
                    <th>Origen de atencion</th>
                    <th>Tipo concepto</th>
                    <th>Cups</th>
                    <th>Nombre de procedimiento</th>
                    <th>Cantidad</th>
                    <th>Fecha de Orden</th>
                    <th>Observaciones</th>
                </tr>
            </thead>
            <tbody>
                
                
                {filtered.length === 0 ? (
                    <tr>
                        
                        <td id='uniq'>
                        {searchTerm
                        ? "No se encontraron Resultados de la busqueda"
                        : "No hay resultados."}
                        </td>
                        
                    </tr>
                ) : (
                    filtered.map((data, index) =>
                    <tr key={index}>
                        <td className='fh'>{data.Pabellon}</td>
                        <td>{data.Cama}</td>
                        <td>{data.Ingreso}</td>
                        <td>{data.Tip_Doc}</td>
                        <td>{data.Documento}</td>
                        <td>{data.Folio}</td>
                        <td className='fh'>{data.Paciente}</td>
                        <td>{data.Origen_Atencion}</td>
                        <td className='fh'>{data.Tipo_Concepto}</td>
                        <td>{data.Cups}</td>
                        <td className='fh'>{data.Nombre_Procedimiento}</td>
                        <td>{data.Cantidad}</td>
                        <td>{data.Fch_Orden}</td>
                        <td className='fh' id='observacion'>{data.Observaciones}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )}


    
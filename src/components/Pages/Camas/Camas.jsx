// import React, { useEffect, useState } from 'react'

// export const Camas = () => {

//     const [filtered, setFiltered] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     const [dataCamas, setCamasData] = useState([]);


// useEffect(() =>{

//     const fetchCamas = async() => {
//         try {
//             const response = await fetch('http://localhost:3000/');
//             const camas = await response.json();            
//             setCamasData(camas.recordset || [])
            
//             console.log(camas);
            
//           } catch (error) {
//             console.log('Error al traer los datos:', error);
//           };
//         }
//         fetchCamas();
//     }, []);




//   useEffect(() =>{
//     if (Array.isArray(dataCamas)) {
        
    
//     const filterCamas = dataCamas.filter(dato =>
//         dato.Pabellon?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dato.Cama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dato.Documento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dato.Folio?.toString().includes(searchTerm) ||
//         dato.Paciente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dato.Tipo_Concepto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dato.Cups?.toLowerCase().includes(searchTerm.toLowerCase())||
//         dato.Nombre_Procedimiento?.toLowerCase().includes(searchTerm.toLowerCase())||
//         dato.Cantidad?.toString().includes(searchTerm) ||
//         dato.Fch_Orden?.toLowerCase().includes(searchTerm.toLowerCase())
        
//     )
//     setFiltered(filterCamas);
 
// }else{
//     setFiltered([]);
// }

// }, [searchTerm, dataCamas]);



// const handleSearchChange = (event) => {
//     const value = event.target.value.trim().toLowerCase();
//     setSearchTerm(value);
// };


// const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     const date = new Date(dateString);
//     return date.toLocaleString('es-ES', options);
// };


//   return (
//     <>
//     <div className='containerFilter'>
//     <h3>Filtrar por pabellon: </h3>

//         <div>
//             <select name="Pabellon" id="Pabellon" onChange={handleSearchChange}>
//                 <option value="">TODOS LOS PABELLONES</option>
//                 <option value="URGENCIAS">URGENCIAS</option>
//                 <option value="UCIN ADULTOS">UCIN ADULTOS</option>
//                 <option value="OBSERVACION ADULTOS">OBSERVACION ADULTOS</option>
//                 <option value="CIRUJIA HOSPITARARIA">CIRUJIAS</option>
//                 <option value="HOSPITALIZACION 3 PISO">HOSPITALIZACION 3 PISO</option>
//                 <option value="HOSPITALIZACION 4 PISO">HOSPITALIZACION 4 PISO</option>
//                 <option value="HOSPITALIZACION 5 PISO">HOSPITALIZACION 5 PISO</option>
//                 <option value="HOSPITALIZACION 6 PISO">HOSPITALIZACION 6 PISO</option>
//                 <option value="EXPANSIÓN URGENCIAS">EXPANSIÓN URGENCIAS</option>
//             </select>
//         </div>
//         <h3>Filtrar por servicio: </h3>

 

//         <div>
//             <select name="Imagenes" id="Imagenes" onChange={handleSearchChange}>
//                 <option value="">TODOS LOS SERVICIOS</option>
//                 <option value="IMAGENES DIAGNOSTICAS">IMAGENES DIAGNOSTICAS</option>
//                 <option value="LABORATORIOS">LABORATORIOS</option>

//             </select>
//         </div>
        

//     </div>
//     <div className="containerBar">
//         <h3>Filtar por busqueda: </h3>

//         <div>
//             <input 
//             className='search' 
//             type="text" 
//             placeholder='Buscar paciente' 
//             onChange={handleSearchChange}/>
//         </div>
//     </div>
//     <div className='containerTable'>
//         <table id='customers'>
//             <thead>
//                 <tr>
//                     <th>Cama</th>
//                     <th>Ingreso</th>
//                     <th>Tipo Documento</th>
//                     <th>Documento</th>
//                     <th>Folio</th>
//                     <th>Paciente</th>
//                     <th>Origen de atencion</th>
//                     <th>Cups</th>
//                     <th>Nombre de procedimiento</th>
//                     <th>Cantidad</th>
//                     <th>Fecha de Orden</th>
//                     <th id='obs'>Observaciones</th>
//                 </tr>
//             </thead>
//             <tbody>

//                 {filtered.map((data, index) =>
//                     <tr key={index}>
//                         <td>{data.Cama}</td>
//                         <td>{data.Ingreso}</td>
//                         <td>{data.Tip_Doc}</td>
//                         <td className='fh'>{data.Documento}</td>
//                         <td>{data.Folio}</td>
//                         <td className='fh'>{data.Paciente}</td>
//                         <td>{data.Origen_Atencion}</td>
//                         <td>{data.Cups}</td>
//                         <td className='fh'>{data.Nombre_Procedimiento}</td>
//                         <td>{data.Cantidad}</td>
//                         <td className='fh'>{formatDate(data.Fch_Orden)}</td>
//                         <td>{data.Observaciones}</td>
//                     </tr>
//                     )}
                

//             </tbody>
//         </table>
//     </div>
//     </>
//     )}



import React, { useEffect, useState } from 'react';

export const Camas = () => {

  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pabellonFilter, setPabellonFilter] = useState('');
  const [servicioFilter, setServicioFilter] = useState('');
  const [dataCamas, setCamasData] = useState([]);

  useEffect(() => {
    const fetchCamas = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        const camas = await response.json();
        setCamasData(camas.recordset || []);
        console.log(camas);
      } catch (error) {
        console.log('Error al traer los datos:', error);
      }
    };
    fetchCamas();
  }, []);

  useEffect(() => {
    if (Array.isArray(dataCamas)) {
      const filterCamas = dataCamas.filter(dato => {
        const matchesPabellon = pabellonFilter === '' || 
          dato.Pabellon?.trim().toLowerCase() === pabellonFilter.trim().toLowerCase();
  
        const matchesServicio = servicioFilter === '' || 
          dato.Tipo_Concepto?.trim().toLowerCase() === servicioFilter.trim().toLowerCase();
  
        const matchesSearchTerm = 
          dato.Pabellon?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dato.Cama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dato.Documento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dato.Folio?.toString().includes(searchTerm) ||
          dato.Paciente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dato.Tipo_Concepto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dato.Cups?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dato.Nombre_Procedimiento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dato.Cantidad?.toString().includes(searchTerm) ||
          dato.Fch_Orden?.toLowerCase().includes(searchTerm.toLowerCase());
  
        return matchesPabellon && matchesServicio && matchesSearchTerm;
      });
  
      setFiltered(filterCamas);
    } else {
      setFiltered([]);
    }
  }, [searchTerm, pabellonFilter, servicioFilter, dataCamas]);
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePabellonChange = (event) => {
    setPabellonFilter(event.target.value);
  };

  const handleServicioChange = (event) => {
    setServicioFilter(event.target.value);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', options);
  };

  return (
    <>
      <div className='containerFilter'>
        <h3>Filtrar por pabellon: </h3>
        <div>
          <select name="Pabellon" id="Pabellon" onChange={handlePabellonChange}>
            <option value="">TODOS LOS PABELLONES</option>
            <option value="URGENCIAS">URGENCIAS</option>
            <option value="UCIN ADULTOS">UCIN ADULTOS</option>
            <option value="OBSERVACION ADULTOS">OBSERVACION ADULTOS</option>
            <option value="CIRUGIA HOSPITALARIA">CIRUGIA HOSPITALARIA</option>
            <option value="HOSPITALIZACION 3 PISO">HOSPITALIZACION 3 PISO</option>
            <option value="HOSPITALIZACION 4 PISO">HOSPITALIZACION 4 PISO</option>
            <option value="HOSPITALIZACION 5 PISO">HOSPITALIZACION 5 PISO</option>
            <option value="HOSPITALIZACION 6 PISO">HOSPITALIZACION 6 PISO</option>
            <option value="EXPANSIÓN URGENCIAS">EXPANSIÓN URGENCIAS</option>
          </select>
        </div>

        <h3>Filtrar por servicio: </h3>
        <div>
          <select name="Servicio" id="Servicio" onChange={handleServicioChange}>
            <option value="">TODOS LOS SERVICIOS</option>
            <option value="IMAGENES DIAGNOSTICAS">IMAGENES DIAGNOSTICAS</option>
            <option value="LABORATORIOS">LABORATORIOS</option>
          </select>
        </div>
      </div>

      <div className="containerBar">
        <h3>Filtrar por búsqueda: </h3>
        <div>
          <input
            className='search'
            type="text"
            placeholder='Buscar paciente'
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className='containerTable'>
        <table id='customers'>
          <thead>
            <tr>
              <th>Cama</th>
              <th>Ingreso</th>
              <th>Tipo Documento</th>
              <th>Documento</th>
              <th>Folio</th>
              <th>Paciente</th>
              <th>Origen de atencion</th>
              <th>Cups</th>
              <th>Nombre de procedimiento</th>
              <th>Cantidad</th>
              <th>Fecha de Orden</th>
              <th id='obs'>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((data, index) => (
              <tr key={index}>
                <td>{data.Cama}</td>
                <td>{data.Ingreso}</td>
                <td>{data.Tip_Doc}</td>
                <td className='fh'>{data.Documento}</td>
                <td>{data.Folio}</td>
                <td className='fh'>{data.Paciente}</td>
                <td>{data.Origen_Atencion}</td>
                <td>{data.Cups}</td>
                <td className='fh'>{data.Nombre_Procedimiento}</td>
                <td>{data.Cantidad}</td>
                <td className='fh'>{formatDate(data.Fch_Orden)}</td>
                <td>{data.Observaciones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

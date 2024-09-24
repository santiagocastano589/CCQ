import React, { useEffect, useState } from 'react'
import { Filters } from "../../Filters/Filters";
export const Camas = () => {
    const [UserList, setUserList] = useState([
        {
            usuario:"Diego Lopez", 
            cedula:109833256, 
            edad:18, 
            telefono:"3026545679", 
            estado:'Hospitalizado', 
            cama:'A66',
            servicio:'Urgencias',
            laboratorio:'Analisis'
        },
        {
            usuario:"Paula Andrea", 
            cedula:1094678365, 
            edad:25, 
            telefono:"3026566798", 
            estado:'Hospitalizado', 
            cama:'B15',
            servicio:'UCI',
            laboratorio:'Analisis'
        },
        {
            usuario:"Camila Martinez", 
            cedula:1094452365, 
            edad:23, 
            telefono:"3026777987", 
            estado:'Hospitalizado', 
            cama:'C22',
            servicio:'Inyectologia',
            laboratorio:'Analisis'
        },
        {
            usuario:"Edwin Carvajal", 
            cedula:109775365, 
            edad:21, 
            telefono:"3026999875", 
            estado:'Hospitalizado', 
            cama:'A12',
            servicio:'Urgencias',
            laboratorio:'Observacion'
        },
]);

const [filtered, setFiltered] = useState([]);
const [searchTerm, setSearchTerm] = useState('');


useEffect(() =>{

    const filterUser = UserList.filter(user =>
        user.usuario?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.cedula?.toString().includes(searchTerm) ||
        user.estado?.toLowerCase().includes(searchTerm.toLowerCase())||
        user.servicio?.toLowerCase().includes(searchTerm.toLowerCase())||
        user.cama?.toLowerCase().includes(searchTerm.toLowerCase())||
        user.laboratorio?.toLowerCase().includes(searchTerm.toLowerCase())
    ) 
    

    setFiltered(filterUser);
}, [searchTerm, UserList]);




const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };


//   useEffect(() =>{
//     const response = await fetch('https://'),{
//         method: 'GET',
//         headers:{
//             'Content-type':'Bearer',
//             Authorizacion : 'Token'
//         }
//     }
// })


  return (
    <>
    <div className='containerFilter'>
        <div>
            <select name="servicio" id="servicio" onChange={handleSearchChange}>
                <option value="">Todos los servicios</option>
                <option value="Urgencias">Urgencias</option>
                <option value="Inyectologia">Inyectologia</option>
                <option value="UCI">UCI</option>
                <option value="Pedriatria">Pedriatria</option>
            </select>
        </div>
        <div>
            <input 
            className='search' 
            type="text" 
            placeholder='Buscar paciente' 
            onChange={handleSearchChange}/>
        </div>

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
                    <th>Fecha de ingreso</th>
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
                        
                        <td>
                        {searchTerm
                        ? "No se encontraron Resultados de la busqueda"
                        : "No hay resultados."}
                        </td>
                        
                    </tr>
                ) : (
                    filtered.map((user) =>
                    <tr>
                        <td>{user.usuario}</td>
                        <td>{user.cedula}</td>
                        <td>{user.edad}</td>
                        <td>{user.telefono}</td>
                        <td>{user.estado}</td>
                        <td>{user.cama}</td>
                        <td>{user.servicio}</td>
                        <td>{user.laboratorio}</td>
                        <td>{user.laboratorio}</td>
                        <td>{user.laboratorio}</td>
                        <td>{user.laboratorio}</td>
                        <td>{user.laboratorio}</td>
                        <td>{user.laboratorio}</td>
                        <td>{user.laboratorio}</td>
                        <td>{user.laboratorio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )}


    
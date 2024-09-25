import React, { useEffect, useState } from 'react'
import { Filters } from "../../Filters/Filters";


export const Camas = () => {




    const [UserList, setUserList] = useState([
        {
            pabellon: 1,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C',
            documento:1094893772,
            folio:12,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'C12',
            ingreso: 'Urgencias',
            tipoDocumento: 'T.I',
            documento:109833256,
            folio:18,
            paciente:"Paula andrea", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'122',
            nombreProcedimiento:'Urgencias',
            cantidad: 7,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109856334,
            folio:6,
            paciente:"Edwin Carvajal", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 7,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:4115662,
            folio:18,
            paciente:"Andrea Gusman", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
        {
            
            pabellon: 10,
            cama:'A66',
            ingreso: 'Urgencias',
            tipoDocumento: 'C.C.',
            documento:109833256,
            folio:18,
            paciente:"Diego Lopez", 
            fechaIngreso:"24-08-2024", 
            origenAtencion:'Dolor',
            tipoConcepto:'Dolor',
            cups:'3277',
            nombreProcedimiento:'Urgencias',
            cantidad: 10,
            fechaOrden: '24-08-2024',
            observaciones: 'Datos de observacion'
        },
]);


// const [UserList, setUserList] = useState([]);
const [filtered, setFiltered] = useState([]);
const [searchTerm, setSearchTerm] = useState('');



useEffect(() =>{

    const fetchUsers = async() => {
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer'
                }
            });
            const data = await response.json();
            if (Array.isArray(data)) {
                setUserList(data);
                setFiltered(data);
              
            } else {
              console.error('La respuesta no es un array:', data);
            }
          } catch (error) {
            console.log('Error al traer los datos:', error);
          };


        }
        fetchUsers();
    }, ['holaa']);


const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };


  useEffect(() =>{

    const filterUser = UserList.filter(user =>
        user.pabellon?.toString().includes(searchTerm) ||
        user.cama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.tipoDocumento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.documento?.toString().includes(searchTerm) ||
        user.folio?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.paciente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.fechaIngreso?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.tipoConcepto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.cups?.toLowerCase().includes(searchTerm.toLowerCase())||
        user.nombreProcedimiento?.toLowerCase().includes(searchTerm.toLowerCase())||
        user.cantidad?.toString().includes(searchTerm) ||
        user.fechaOrden?.toLowerCase().includes(searchTerm.toLowerCase())||
        user.observaciones?.toLowerCase().includes(searchTerm.toLowerCase())
    ) 
    

    setFiltered(filterUser);
}, [searchTerm, UserList]);

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
                    <tr key={user.documento}>
                        <td>{user.pabellon}</td>
                        <td>{user.cama}</td>
                        <td>{user.ingreso}</td>
                        <td>{user.tipoDocumento}</td>
                        <td>{user.documento}</td>
                        <td>{user.folio}</td>
                        <td>{user.paciente}</td>
                        <td>{user.fechaIngreso}</td>
                        <td>{user.origenAtencion}</td>
                        <td>{user.tipoConcepto}</td>
                        <td>{user.cups}</td>
                        <td>{user.nombreProcedimiento}</td>
                        <td>{user.cantidad}</td>
                        <td>{user.fechaOrden}</td>
                        <td>{user.observaciones}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )}


    
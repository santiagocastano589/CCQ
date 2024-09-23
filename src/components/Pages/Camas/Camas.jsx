import React, { useEffect, useState } from 'react'

export const Camas = () => {
    const [UserList, setUserList] = useState([
        {
            usuario:"Diego Lopez", 
            cedula:109833256, 
            edad:18, 
            telefono:"3026545679", 
            estado:'Hospitalizado', 
            cama:'A66'
        },
        {
            usuario:"Paula Andrea", 
            cedula:1094678365, 
            edad:25, 
            telefono:"3026566798", 
            estado:'Hospitalizado', 
            cama:'B15'
        },
        {
            usuario:"Camila Martinez", 
            cedula:1094452365, 
            edad:23, 
            telefono:"3026777987", 
            estado:'Hospitalizado', 
            cama:'C22'
        },
        {
            usuario:"Edwin Rozo", 
            cedula:109775365, 
            edad:21, 
            telefono:"3026999875", 
            estado:'Hospitalizado', 
            cama:'A12'
        },
]);

const [Filtered, setFiltered] = useState([])

    // useEffect(() =>{
    //     const url = 'https://gaiavet-back.onrender.com/user';
    //     const camas = async fetch =>(url, {
    //         headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${authToken}`,
    //         },
    // });





  return (
    <div className='containerTable'>
        <table>
            <thead>
                <tr>
                    <th>Opcion1</th>
                    <th>Opcion1</th>
                    <th>Opcion1</th>
                    <th>Opcion1</th>
                    <th>Opcion1</th>
                    <th>Opcion1</th>
                </tr>
            </thead>
            <tbody>
                
                
                {UserList.map((user) =>
                    <tr>
                        <td>{user.usuario}</td>
                        <td>{user.cedula}</td>
                        <td>{user.edad}</td>
                        <td>{user.telefono}</td>
                        <td>{user.estado}</td>
                        <td>{user.cama}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )}
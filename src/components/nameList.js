import React from 'react';

const NameList = ({userList}) => {

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((element, index)=>(
                    <tr key={index}>
                        <td>{element.name}</td>
                        <td>{element.lastName}</td>
                        <td>{element.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default NameList;
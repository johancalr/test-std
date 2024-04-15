import React, { useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { RowItem } from '../../Components/RowItem';


const TestA = () => {
  const [error, setError] = React.useState(null);
  const [localItems, setLocalItems] = React.useState([]);
  const [jsonData, setJsonData] = React.useState(`[
  {
    "nombre": "Pepito",
    "apellido": "Perez",
    "correo": "pepito.perez@gmail.com"
  },
  {
    "nombre": "Camilo",
    "apellido": "Gomez",
    "correo": "camilo.gomez@gmail.com"
  },
  {
    "nombre": "Alberto",
    "apellido": "Rojas",
    "correo": "alberto.rojas@gmail.com"
  },
  {
    "nombre": "Gloria",
    "apellido": "Marulanda",
    "correo": "Gloria.marulanda@gmail.com"
  }
]`);
  useEffect(() => {
    try {
      const parsedJson = JSON.parse(jsonData);
      let errorMessage = null;
      if (!Array.isArray(parsedJson)) {
        errorMessage = 'El JSON enviado no corresponde a un arreglo de objetos';
      } else if (parsedJson.length === 0) {
        errorMessage = 'El JSON enviado no contiene datos';
      } else {
        for (let i = 0; i < parsedJson.length; i++) {
          const item = parsedJson[i];
          if (!item.nombre) {
            errorMessage = `El ${i+1}° item no cuenta con el atributo 'nombre'`;
            break;
          } else if (!item.apellido) {
            errorMessage = `El ${i+1}° item no cuenta con el atributo 'apellido'`;
            break;
          } else if (!item.correo) {
            errorMessage = `El ${i+1}° item no cuenta con el atributo 'correo'`;
            break;
          }
        }        
      }
      setLocalItems(errorMessage? [] : parsedJson);
      setError(errorMessage);
    } catch (error) {
      setLocalItems([])
      setError('Formato Invalido');
    }
  }, [jsonData]);
  return (
    <>
      <ul>
        <li><small>Obtiene los datos de un formato JSON y valida el contenido</small></li>
      </ul>
      <FloatingLabel
        label="Importar desde JSON"
        className='mb-1'
      >
        <Form.Control
          as="textarea"
          value={jsonData}
          placeholder=""
          style={{ height: '400px', lineHeight: '1rem' }}
          onChange={(event) => setJsonData(event.target.value)}
        />
      </FloatingLabel>
      <small className={`float-end text-${error? 'danger': 'success'}`}> {error? error: 'Formato Valido'}</small>
      <br/>
      <hr/>
      <ul>
        <li><small>Lista los datos en una tabla</small></li>
      </ul>
      <div className='table-responsive rounded-4 border'>
        <Table striped bordered hover className='text-center mb-0'>
          <thead>
            <tr className='bg-success'>
              <th className='bg-transparent text-white'>Nombre</th>
              <th className='bg-transparent text-white'>Apellido</th>
              <th className='bg-transparent text-white'>Correo</th>
            </tr>
          </thead>
          <tbody>
            {localItems.map((item, index) => (
              <RowItem key={index} item={item}/>
            ))}
            {localItems.length===0 &&
              <tr>
                <td colSpan={3}>
                  - - -
                </td>
              </tr>
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}

export { TestA };
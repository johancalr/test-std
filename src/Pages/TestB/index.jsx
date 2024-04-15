import React, { useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { validateNumbers } from '../../Utils';

const TestB = () => {
  const [errorA, setErrorA] = React.useState(null);
  const [inputA, setInputA] = React.useState('1,2,3,4,5,6,7');
  const [arrayA, setArrayA] = React.useState([]);
  const [errorB, setErrorB] = React.useState(null);
  const [inputB, setInputB] = React.useState('2,4,6,8,10');
  const [arrayB, setArrayB] = React.useState([]);
  const [commonNumbers, setCommonNumbers] = React.useState('');
  const [leftoberNumbers, setLeftoverNumbers] = React.useState('');
  useEffect(() => {
    try {
      const parsedJson = JSON.parse(`[${inputA}]`);
      let errorMessage = null;
      if (parsedJson.length === 0) {
        errorMessage = 'No se han registrado datos';
      } else {
        for (let i = 0; i < parsedJson.length; i++) {
          const item = parsedJson[i];
          if (isNaN(parseInt(item))) {
            errorMessage = 'Los datos registrados no corresponden a un arreglo de números';
            break;
          }
        }
      }
      setArrayA(errorMessage? [] : parsedJson);
      setErrorA(errorMessage);
    } catch (error) {
      setArrayA([])
      setErrorA('Formato Invalido');
    }
  }, [inputA]);
  useEffect(() => {
    try {
      const parsedJson = JSON.parse(`[${inputB}]`);
      let errorMessage = null;
      if (parsedJson.length === 0) {
        errorMessage = 'No se han registrado datos';
      } else {
        for (let i = 0; i < parsedJson.length; i++) {
          const item = parsedJson[i];
          if (isNaN(parseInt(item))) {
            errorMessage = 'Los datos registrados no corresponden a un arreglo de números';
            break;
          }
        }
      }
      setArrayB(errorMessage? [] : parsedJson);
      setErrorB(errorMessage);
    } catch (error) {
      setArrayB([])
      setErrorB('Formato Invalido');
    }
  }, [inputB]);
  useEffect(() => {
    const [including, excluding] = validateNumbers(arrayA, arrayB);
    setCommonNumbers(including);
    setLeftoverNumbers(excluding);
  }, [arrayA, arrayB]);
  return (
    <>
      <ul>
        <li><small>Obtiene el primer arreglo y valida su contenido</small></li>
      </ul>
      <FloatingLabel
        label="Arreglo A (Números separados por coma)"
        className="mt-3"
      >
        <Form.Control
          as="textarea"
          value={inputA}
          placeholder=""
          style={{ height: '50px' }}
          onChange={(event) => setInputA(event.target.value)}
        />
      </FloatingLabel>
      <small className={`float-end text-${errorA? 'danger': 'success'}`}> {errorA? errorA: 'Formato Valido'}</small>
      <br/>
      <ul>
        <li><small>Obtiene el segundo arreglo y valida su contenido</small></li>
      </ul>
      <FloatingLabel
        label="Arreglo B (Números separados por coma)"
        className="mt-3"
      >
        <Form.Control
          as="textarea"
          value={inputB}
          placeholder=""
          style={{ height: '50px' }}
          onChange={(event) => setInputB(event.target.value)}
        />
      </FloatingLabel>
      <small className={`float-end text-${errorB? 'danger': 'success'}`}> {errorB? errorB: 'Formato Valido'}</small>
      <br/>
      <hr/>
      <ul>
        <li><small>Compara los arreglos y despliega el contenido</small></li>
      </ul>
      <span>Elementos en comun: &nbsp;</span>
      <code>{JSON.stringify(commonNumbers)}</code>
      <br/>
      <span>Elementos sobrantes: &nbsp;</span>
      <code>{JSON.stringify(leftoberNumbers)}</code>
    </>
  );
}

export { TestB };
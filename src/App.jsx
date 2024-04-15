import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { AppRoutes } from './routes';
import { NavBar } from './Components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Card style={{ height: '100vh' }}>
          <Card.Header className='text-center bg-success fs-5 text-white fw-bold'>
            Prueba Desarrollo
          </Card.Header>
          <Card.Body style={{ overflowY: 'auto' }}>
            <NavBar/>
            <br/>
            <AppRoutes/>
          </Card.Body>
          <Card.Footer>
            <small className='float-end'>Elaborado por: Johan Camilo Lozano Ramírez</small>
          </Card.Footer>
        </Card>
      </Container>
    </BrowserRouter>
  )
}

export { App }

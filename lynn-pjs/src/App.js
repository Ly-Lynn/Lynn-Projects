import logo from './logo.svg';
import './App.css';
import ShowNavbar from './components/menu' 
import Header from './components/header'
import { Container, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-5">
        <Header/>
        <ShowNavbar/>
        
    </Container>
);
}

export default App;

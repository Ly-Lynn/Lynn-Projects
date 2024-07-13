import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ShowNavbar from './components/allScreen/menu';
import Header from './components/allScreen/header';
import AboutLynn from './components/1stScreen/AboutLynn';
import ColorGame from './components/2ndScreen/ColorGame'

function App() {
  return (
    <Router>
      <Container className="mt-5">
        {/* <Header title={}/> */}
        {/* <ShowNavbar /> */}
        <Routes>
          <Route path="/about-lynn" element={<AboutLynn />} />
          <Route path="/color-game" element={<ColorGame />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <Container style={{
      maxWidth: "40rem",
      margin: '3rem auto'
    }}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addUser' element={<AddUser />} />
            <Route path='/editUser/:id' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </Container>
  );
}

export default App;

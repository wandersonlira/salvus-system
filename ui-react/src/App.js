import React from 'react';
import { ToastContainer} from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CadastraProduto from './components/Cadastra';
import BuscarTudo from './components/BuscarTudo';
import BuscarPorId from './components/BuscarPorId';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <>
      <Header />
      <ToastContainer autoClose={3000} position='bottom-left'/>
    </>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/cadastrar' element={<CadastraProduto />} />
        <Route path='/buscar_tudo' element={<BuscarTudo />} />
        <Route path='/buscar_por_id' element={<BuscarPorId />} />
      </Routes>
    </Router>
  );
}

export default App;

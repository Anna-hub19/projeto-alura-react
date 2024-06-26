import { Route, BrowserRouter, Routes } from 'react-router-dom';


import Cadastrar from './components/cadastrarVideo/cadastro.js';
import Home from './components/home/home.js';
const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route element={<Home />}  path="/"  />
        <Route element={<Cadastrar />}  path="cadastro"  />
        </Routes>
        </BrowserRouter>
    )
 }
 
 export default Rotas;
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import Nosotros from './Pages/Nosotros'
import Proyectos from './Pages/Proyectos'
import Contacto from './Pages/Contacto'
import Layout from './Pages/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/proyectos' element={<Proyectos />} />
            <Route path='/contacto' element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

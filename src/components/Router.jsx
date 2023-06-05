import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../Pages/home'
import Nosotros from '../Pages/Nosotros'
import Proyectos from '../Pages/Proyectos'
import Contacto from '../Pages/Contacto'
import { Suspense } from 'react'


export default function Router() {

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/nosotros' element={< Nosotros />} />
                        <Route path='/proyectos' element={<Proyectos />} />
                        <Route path='/contacto' element={<Contacto />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
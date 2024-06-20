import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from './components/Navigate/Contact.jsx'
import About from './components/Navigate/About.jsx'
import Service from './components/Navigate/Service.jsx'
import Routing from './components/Navigate/Routing.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} >
                <Route index element={<Routing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

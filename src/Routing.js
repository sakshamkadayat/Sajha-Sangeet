import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outer from "./Outlet";
import Home from "./Components/Pages/Home";
import About from './Components/Pages/About';
import Gallery from './Components/Pages/Gallery';
import Contact from './Components/Pages/Contact';


function Routing() {
    return (
        <>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Outer />}>
                    <Route path='/' element={<Home/>}></Route>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/aboutus' element={<About/>}></Route>
                        <Route path='/Gallery' element={<Gallery/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing

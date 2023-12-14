import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outer from "./Outlet";
import Home from "./Components/Pages/Home";
import About from './Components/Pages/About';
import Lessons from './Components/Pages/Lessons';
import Contact from './Components/Pages/Contact';
import Blogs from './Components/Pages/Blogs';


function Routing() {
    return (
        <>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Outer />}>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/aboutus' element={<About/>}></Route>
                        <Route path='/lessons' element={<Lessons/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                        <Route path='/blog' element={<Blogs/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        
        
        </>
    )
}

export default Routing

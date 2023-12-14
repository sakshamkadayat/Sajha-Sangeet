import React from 'react'
import { Outlet } from "react-router";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

function Outer() {
    return (
       <>
       <Header/>
       <Outlet/>
       <Footer/>
       </> 
    )
}

export default Outer;

import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//* in react router dom : you have given this outlet which use current file as layout of your website
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
     <>
    <Header/>
    <Outlet/> {/* //position at which you write outlet matters, that is going to select where to fix things and where to adjust your desired layout */}
    <Footer/>
    </>
    )
    
}
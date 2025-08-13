import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom' //for fixed base thing

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

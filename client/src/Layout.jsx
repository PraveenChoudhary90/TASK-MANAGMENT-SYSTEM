import React from 'react'
import Topnav from './Component/Topnav'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

function Layout() {
  return (
    <>
    <Topnav/>
    <main id='outlet'>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout
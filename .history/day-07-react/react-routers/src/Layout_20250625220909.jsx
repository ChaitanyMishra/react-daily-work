import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />

      <Footer />

    </>
  )
}

export default Layout

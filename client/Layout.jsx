import React from 'react'
import { Outlet } from 'react-router-dom'
import Header  from '../client/pages/Header'
import Footer  from '../client/pages/Footer'

function Layout() {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout

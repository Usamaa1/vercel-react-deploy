import React from 'react'
import NavComponent from '../Component/NavComponent'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div>
        <NavComponent></NavComponent>
        <Outlet></Outlet>
    </div>
  )
}

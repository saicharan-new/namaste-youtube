import React from 'react'
import Sidebar from './Sidebar'
// import MainCont from './MainCont'
// import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'


const Body = () => {
  return (
    <div className="flex">
      <Sidebar/>
      {/* <MainCont/>
      <WatchPage/> */}
      <Outlet/>
    </div>
  )
}

export default Body

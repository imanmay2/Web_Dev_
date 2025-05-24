// import { useState,useEffect,useRef } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/navbar';
import { Profile } from './components/profile';
import './App.css'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/> <Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><Profile/></>
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

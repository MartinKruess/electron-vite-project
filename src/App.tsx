import './App.css'
import { Outlet } from 'react-router-dom'
import { Navi } from './comps/landingpageAssets/navi/navi'

export const backendURL = "https://createagame.onrender.com/"

function App() {  
  return (
      <>
        <Navi />
        <Outlet />
      </>
  )
}

export default App

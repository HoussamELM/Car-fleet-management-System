import './App.css'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import MainPage from './components/MainPage';
import Auth from  './components/Auth';
import Grid from './components/Grid';

import { useMediaQuery } from "react-responsive"

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 1280px)" })

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1279px)" })

const Desktop = ({ children }) => {
  const isDesktop = useDesktopMediaQuery()

  return isDesktop ? children : null
}

const TabletAndBelow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  return isTabletAndBelow ? children : null
}


function App() {

        return(

<div className="Container">
<BrowserRouter>
<Routes>
<Route path="/" element={<Auth/>}/>   
<Route path="/logged" element={<MainPage/>}/>  
<Route path="/Grid" element={<Grid/>}/>   
</Routes>
</BrowserRouter>


</div>

              )}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ViewComplex from './components/ViewComplex';
import ViewSimple from './components/ViewSimple';


function App() {
 return (
 <div>
 <div>
  navigation
 </div>
 <div className="container">
 <BrowserRouter>
  <Routes>
    <Route path="/view" element={<ViewComplex/>}/>
    <Route path="/view" element={<ViewSimple/>}/>
  </Routes>
</BrowserRouter>
</div>

 </div>  
  )
}

export default App

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Update from "./pages/Update"
import Add from "./pages/Add"

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/add" element={<Add/>}/>
                <Route path="/update" element={<Update/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
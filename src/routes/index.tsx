import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from '../views/LoginView'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
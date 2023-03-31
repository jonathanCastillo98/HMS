import { Login } from './pages/Login'
import { Admin } from './pages/Admin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Login />} />
          {/* Ruta para cuando se pida una ruta inexistente */}
          <Route path='*' element={<>NOT FOUND</>} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

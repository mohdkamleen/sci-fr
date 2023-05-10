import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/home/Outlet'; 
import AdminLayout from './pages/admin/Outlet'; 
import { useEffect } from 'react';
import Home from './pages/admin/index'
import AdminLogin from './pages/admin/login';
import Car from './pages/home/car';
import AdminCar from './pages/admin/car';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Car />} />
          </Route>

          <Route path="admin" element={localStorage.getItem("token") === "12345" ? <AdminLayout /> : <AdminLogin />}>
            <Route index element={<Home />} />  
            <Route path='car' element={<AdminCar />} />  
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App;

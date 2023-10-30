import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/home/Outlet';
import AdminLayout from './pages/admin/Outlet';
import { useEffect } from 'react';
import Home from './pages/admin/index'
import AdminLogin from './pages/admin/login';
import Car from './pages/home/car';
import AdminCar from './pages/admin/car';
import Display from './pages/home/display';
import About from './pages/home/about';
import Bill from './pages/home/bill';
import Index from './pages/home/';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* this is for use acces urls  */}
          {/* <Route path="/" element={<Layout />}>
            <Route path='/' element={<Car />} />
            <Route path='/about' element={<About />} />
            <Route path='/bill' element={<Bill />} />
          </Route> */}


          <Route path='/' element={<Index />} />

          {/* this is use for personal display inside of parking slot  */}
          <Route path='/display' element={<Display />} />


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

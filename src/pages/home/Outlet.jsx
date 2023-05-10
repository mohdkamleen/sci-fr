 
import { Outlet } from 'react-router';
import Footer from '../component/footer';
import Nav from '../component/nav';
export default function () {
 
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}; 
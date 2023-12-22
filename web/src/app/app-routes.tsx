import { Navigate, useRoutes } from 'react-router-dom';
import { CustomNavLink } from '../components/NavLink';

export function AppRoutes() {
  return useRoutes([
    { index: true, element: <Navigate replace to="/home" /> },
    {
      path: '/home',
      element: (
        
        <div>
          <CustomNavLink linktext="About Page" link="about"/>          
          <h2>Home page content</h2>          
          
        </div>
      ),
    },
    {
      path: '/about',
      element: (
        <div>
          <CustomNavLink linktext='Home' link='home'/>          
          <h2>About us</h2>          
        </div>
      ),
    },
    
  ]);
}


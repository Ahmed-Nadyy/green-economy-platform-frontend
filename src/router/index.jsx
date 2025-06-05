import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import News from '../pages/News';
import NotFound from '../pages/NotFound';

// Admin Pages
import Login from '../pages/Admin/Login';
import OTPVerification from '../pages/Admin/OTPVerification';
import AdminServices from '../pages/Admin/AdminServices';
import Gallery from '../pages/Admin/Gallery';
import Admins from '../pages/Admin/Admins';
import Jobs from '../pages/Admin/Jobs';
import ProtectedRoute from '../helper/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'blog', element: <Blog /> },
      { path: 'news', element: <News /> },
      { path: 'contact', element: <Contact /> }
    ]
  },
  {
    path: '/admin/login',
    element: <Login />
  },
  {
    path: '/admin/verify',
    element: <OTPVerification />
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <DashboardLayout />
      </ProtectedRoute> 
    ),
    children: [
      { index:true, element: <AdminServices /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'admins', element: <Admins /> },
      { path: 'jobs', element: <Jobs /> }
    ]
  }
]);

export default router;

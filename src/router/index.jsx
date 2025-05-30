import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import News from '../pages/News';
import NotFound from '../pages/NotFound';

// Admin Pages
import Dashboard from '../pages/Admin/Dashboard';
import ManagePosts from '../pages/Admin/ManagePosts';
import Login from '../pages/Admin/Login';
import OTPVerification from '../pages/Admin/OTPVerification';

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
  {    path: '/admin/login',
    element: <Login />
  },
  {    path: '/admin/otp',
    element: <OTPVerification />
  },
  {    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'posts', element: <ManagePosts /> }
    ]
  }
]);

export default router;

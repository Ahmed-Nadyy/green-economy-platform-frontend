import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Admin Pages
import Login from '../pages/Admin/Login';
import OTPVerification from '../pages/Admin/OTPVerification';
import AdminServices from '../pages/Admin/AdminServices';
import Gallery from '../pages/Admin/Gallery';
import Admins from '../pages/Admin/Admins';
import Jobs from '../pages/Admin/Jobs';
import ProtectedRoute from '../helper/ProtectedRoute';
import GalleryPage from '../pages/GalleryPage';
import JobsPage from '../pages/JobsPage';
import CropDetailsPage from '../pages/Services/ui/CropDetailsPage';
import ArticleDetailsPage from '../pages/Services/ui/ArticleDetailsPage';
import ContactInfoPage from '../pages/Admin/ContactInfo';
import BackgroundsPage from '../pages/Admin/Backgrounds';
import PartnersPage from '../pages/Admin/Partners';
import MembersPage from '../pages/Admin/Members';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/crop/:id', element: <CropDetailsPage /> },
      { path: 'services/article/:id', element: <ArticleDetailsPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'jobs', element: <JobsPage /> },
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
      { path: 'jobs', element: <Jobs /> },
      { path: 'contacts', element: <ContactInfoPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'members', element: <MembersPage /> },
      { path: 'backgrounds', element: <BackgroundsPage /> },
    ]
  }
]);

export default router;

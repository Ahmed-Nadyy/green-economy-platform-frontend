import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaServicestack, FaImages, FaUsers, FaBriefcase } from 'react-icons/fa';

const DashboardLayout = () => {
  const [activeLink, setActiveLink] = useState('services');

  const navLinks = [
    {
      id: 'services',
      title: 'الخدمات المقدمة',
      icon: <FaServicestack className="w-6 h-6" />,
      path: '/admin'
    },
    {
      id: 'gallery',
      title: 'المعرض',
      icon: <FaImages className="w-6 h-6" />,
      path: '/admin/gallery'
    },
    {
      id: 'admins',
      title: 'المسؤولين',
      icon: <FaUsers className="w-6 h-6" />,
      path: '/admin/admins'
    },
    {
      id: 'jobs',
      title: 'طلبات العمل',
      icon: <FaBriefcase className="w-6 h-6" />,
      path: '/admin/jobs'
    }
  ];

  return (
    <div className="flex flex-row h-screen bg-gray-100 " >
      {/* Right Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 text-center border-b">
          <h2 className="text-xl font-bold text-gray-800">لوحة التحكم</h2>
        </div>
        <nav className="mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`flex items-center gap-3 px-6 py-3 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600 ${activeLink === link.id ? 'bg-green-50 text-green-600' : ''}`}
              onClick={() => setActiveLink(link.id)}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">نادي الاقتصاد الأخضر</h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/admin/login";
                }}
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaServicestack, FaImages, FaUsers, FaBriefcase } from 'react-icons/fa';

const DashboardLayout = () => {
  const [activeLink, setActiveLink] = useState('services');
  // Sidebar state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const user=JSON.parse(localStorage.getItem("admin"))
 
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
    <div className="flex h-screen bg-gray-100 overflow-hidden " dir='rtl'>
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-col w-64 min-w-[200px] bg-white shadow-lg transition-all duration-300">
        <div className="p-4 text-center border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">لوحة التحكم</h2>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`flex items-center gap-3 px-6 py-3 text-gray-700 transition-all duration-200 hover:bg-green-50 hover:text-green-600 hover:scale-[0.98] ${
                activeLink === link.id ? 'bg-green-50 text-green-600 border-r-4 border-green-600' : ''
              }`}
              onClick={() => setActiveLink(link.id)}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          ))}
        </nav>
        {/* Desktop Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button 
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/admin/login";
            }}
          >
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </div>

      {/* Sidebar for mobile - Slide from right */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-50' : 'opacity-0'
          }`} 
          onClick={() => setSidebarOpen(false)}
        ></div>
        
        {/* Sidebar Content */}
        <div 
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">لوحة التحكم</h2>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-2xl text-gray-600 hover:text-green-600">×</span>
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`flex items-center gap-3 px-6 py-4 text-gray-700 transition-all duration-200 hover:bg-green-50 hover:text-green-600 active:scale-[0.98] ${
                    activeLink === link.id ? 'bg-green-50 text-green-600 border-r-4 border-green-600' : ''
                  }`}
                  onClick={() => { 
                    setActiveLink(link.id); 
                    setSidebarOpen(false);
                  }}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-sm font-medium">{link.title}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Logout Button */}
            <div className="p-4 border-t border-gray-200">
              <button 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/admin/login";
                }}
              >
                <span>تسجيل الخروج</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <button 
                className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="text-2xl">☰</span>
              </button>
              <h1 className="text-sm sm:text-xl font-semibold text-gray-800 text-right">
                <span className='text-green-600'>أهلا</span> {user.fullName}
              </h1>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-6 sm:px-6 md:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
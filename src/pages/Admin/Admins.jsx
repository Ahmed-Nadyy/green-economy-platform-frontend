import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import adminAPI from '../../services/adminAPI';

const Admins = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    phone: ''
  });

  // const admins = [
  //   {
  //     id: 1,
  //     name: 'أحمد محمد',
  //     email: 'ahmed@example.com',
  //     phone: '01234567890',
  //     role: 'مدير',

  //   },
  //   {
  //     id: 2,
  //     name: 'سارة أحمد',
  //     email: 'sara@example.com',
  //     phone: '01234567891',
  //     role: 'مشرف',

  //   },

  // ];
  const [admins,setAdmins]=useState([])
      const fetchData=async()=>{
     const result= await adminAPI.getAllAdmins();
     console.log(result.data);
     
     setAdmins(result.data)
    }
  useEffect(()=>{
    fetchData();
  },[])
  const handleOpenModal = () => {
    setIsEditMode(false);
    setCurrentAdmin(null);
    setNewAdmin({
      fullName: '',
      email: '',
      password: '',
      job: '',
      phoneNumber: ''
    });
    setIsModalOpen(true);
  };

    const handleDelete = async(id) => {
      console.log(id);
      
    await adminAPI.deleteAdmin(id);
    fetchData();

  };


  const handleOpenEditModal = (admin) => {
    setIsEditMode(true);
    setCurrentAdmin(admin);
    setNewAdmin({
      name: admin.fullName,
      email: admin.email,
      password: '', 
      role: admin.job,
      phone: admin.phoneNumber
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setCurrentAdmin(null);
    setNewAdmin({
      name: '',
      email: '',
      password: '',
      role: '',
      phone: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin({
      ...newAdmin,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // هنا يمكن إضافة الكود الخاص بإرسال البيانات إلى الخادم
    if (isEditMode) {
      console.log('تم تعديل بيانات المسؤول:', newAdmin);
    } else {
      console.log(newAdmin);
      const result=await adminAPI.addAdmin(newAdmin);
      if (result.data.status) {
        handleCloseModal();
      }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">المسؤولين</h2>
          <p className="mt-1 text-sm text-gray-500">إدارة فريق المسؤولين والصلاحيات</p>
        </div>
        <button
          onClick={handleOpenModal}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
        >
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          إضافة مسؤول جديد
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المسؤول</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">معلومات التواصل</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الدور</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-medium text-sm">
                          {admin.fullName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:mr-4">
                        <div className="text-sm font-medium text-gray-900">{admin.fullName}</div>
                        <div className="text-sm text-gray-500 sm:hidden">
                          <div className="mt-1 flex items-center">
                            <FaEnvelope className="ml-1 h-3 w-3" />
                            <span className="truncate">{admin.email}</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {admin.job}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaEnvelope className="ml-2 h-4 w-4 text-gray-400" />
                        <span className="truncate">{admin.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaPhone className="ml-2 h-4 w-4 text-gray-400" />
                        <span dir="ltr">{admin.phoneNumber}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {admin.job}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        onClick={() => handleOpenEditModal(admin)}
                        className="text-blue-600 hover:text-blue-900 transition-colors duration-200 p-1"
                        title="تعديل"
                      >
                        <FaEdit className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(admin.id)}
                        className="text-red-600 hover:text-red-900 transition-colors duration-200 p-1"
                        title="حذف"
                      >
                        <FaTrash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end sm:items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="w-full inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-right w-full">
                    <div className="flex justify-between items-center mb-5">
                      <button
                        onClick={handleCloseModal}
                        className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <span className="sr-only">Close</span>
                        <FaTimes className="h-5 w-5" />
                      </button>
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        {isEditMode ? 'تعديل بيانات المسؤول' : 'إضافة مسؤول جديد'}
                      </h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            الاسم بالكامل
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={newAdmin.fullName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            البريد الإلكتروني
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={newAdmin.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dir-ltr"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            {isEditMode ? 'كلمة المرور الجديدة (اتركها فارغة إذا لم ترغب في تغييرها)' : 'كلمة المرور'}
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={newAdmin.password}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required={!isEditMode}
                          />
                        </div>

                        <div>
                          <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-1">
                            الوظيفة
                          </label>
                          <input
                            type="text"
                            id="job"
                            name="job"
                            value={newAdmin.job}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            رقم الهاتف
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={newAdmin.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dir-ltr"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                        >
                          {isEditMode ? 'حفظ التعديلات' : 'إضافة المسؤول'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admins;
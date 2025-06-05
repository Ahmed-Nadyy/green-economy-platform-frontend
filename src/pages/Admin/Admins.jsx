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
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">المسؤولين</h2>
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          إضافة مسؤول جديد
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المسؤول</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">معلومات التواصل</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الدور</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="text-sm font-medium text-gray-900">{admin.fullName}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaEnvelope className="ml-2" />
                      {admin.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaPhone className="ml-2" />
                      {admin.phoneNumber}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {admin.job}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center gap-3 space-x-reverse">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => handleOpenEditModal(admin)}
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(admin.id)}>
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding new admin */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                  <h3 className="text-lg font-medium text-gray-900">
                    {isEditMode ? 'تعديل بيانات المسؤول' : 'إضافة مسؤول جديد'}
                  </h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم بالكامل</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={newAdmin.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newAdmin.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      {isEditMode ? 'كلمة المرور الجديدة (اتركها فارغة إذا لم ترغب في تغييرها)' : 'كلمة المرور'}
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={newAdmin.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required={!isEditMode}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">الوظيفة</label>
                    <input
                      type="text"
                      id="job"
                      name="job"
                      value={newAdmin.job}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={newAdmin.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                    >
                      {isEditMode ? 'حفظ التعديلات' : 'إضافة'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admins;
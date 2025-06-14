import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaFileAlt, FaCheck, FaTimes } from 'react-icons/fa';
import jobRequestAPI from '../../services/jobRequestAPI';

const Jobs = () => {
  const [jobApplications, setJobApplications] = useState([])
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await jobRequestAPI.getAllJobRequests();
      console.log(result.data);
      
      setJobApplications(result.data)
    }
    fetchData();
  }, []) // Added dependency array to prevent infinite loop

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            تمت الموافقة
          </span>
        );
      case 'rejected':
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            مرفوض
          </span>
        );
      default:
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            قيد المراجعة
          </span>
        );
    }
  };

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-2xl font-bold text-gray-900">طلبات العمل</h2>
          <p className="mt-1 text-sm text-gray-500">
            إدارة ومراجعة طلبات التوظيف المقدمة
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <span className="shadow-sm rounded-md">
            <div className="flex space-x-reverse space-x-3 rtl:space-x-reverse">
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
                إجمالي الطلبات: {jobApplications.length}
              </span>
            </div>
          </span>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-auto">
        {/* Desktop view */}
        <div className="sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المتقدم</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">معلومات التواصل</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الوظيفة</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ التقديم</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المؤهل</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobApplications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">
                          {application.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="mr-4">
                        <div className="text-sm font-medium text-gray-900">{application.name}</div>
                        {getStatusBadge(application.status)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaEnvelope className="ml-2 h-4 w-4 text-gray-400" />
                        <span className="truncate max-w-[200px]" dir="ltr">{application.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaPhone className="ml-2 h-4 w-4 text-gray-400" />
                        <span dir="ltr">{application.phoneNumber}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{application.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                    <div className="text-sm text-gray-500">{application.updatedAt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                    <div className="text-sm text-gray-500">{application.qualification}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => handleViewDetails(application)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FaFileAlt className="ml-1.5 h-4 w-4" />
                      عرض التفاصيل
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="sm:hidden divide-y divide-gray-200">
          {jobApplications.map((application) => (
            <div key={application.id} className="p-4 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {application.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="mr-3">
                    <div className="text-sm font-medium text-gray-900">{application.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{application.position}</div>
                  </div>
                </div>
                {getStatusBadge(application.status)}
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <FaEnvelope className="ml-2 h-4 w-4 text-gray-400" />
                  <span className="truncate" dir="ltr">{application.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaPhone className="ml-2 h-4 w-4 text-gray-400" />
                  <span dir="ltr">{application.phoneNumber}</span>
                </div>
                <div className="text-sm text-gray-500">
                  تاريخ التقديم: {application.date}
                </div>
              </div>

              <button
                onClick={() => handleViewDetails(application)}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaFileAlt className="ml-1.5 h-4 w-4" />
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {isModalOpen && selectedApplication && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end sm:items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-right w-full">
                    <div className="flex justify-between items-center mb-5">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <span className="sr-only">Close</span>
                        <FaTimes className="h-5 w-5" />
                      </button>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        تفاصيل الطلب
                      </h3>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">معلومات المتقدم</h4>
                        <p className="text-base text-gray-900">{selectedApplication.name}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">الوظيفة المتقدم لها</h4>
                        <p className="text-base text-gray-900">{selectedApplication.position}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">المؤهل الدراسي</h4>
                        <p className="text-base text-gray-900">{selectedApplication.qualification}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">الخبرات</h4>
                        <p className="text-base text-gray-900">{selectedApplication.experience || 'لا يوجد'}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">معلومات التواصل</h4>
                        <div className="space-y-2">
                          <p className="text-base text-gray-900 flex items-center">
                            <FaEnvelope className="ml-2 h-4 w-4 text-gray-400" />
                            <span dir="ltr">{selectedApplication.email}</span>
                          </p>
                          <p className="text-base text-gray-900 flex items-center">
                            <FaPhone className="ml-2 h-4 w-4 text-gray-400" />
                            <span dir="ltr">{selectedApplication.phoneNumber}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 sm:flex sm:flex-row-reverse sm:gap-3">
                      <button
                        type="button"
                        className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <FaCheck className="ml-1.5 h-4 w-4" />
                        قبول الطلب
                      </button>
                      <button
                        type="button"
                        className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <FaTimes className="ml-1.5 h-4 w-4" />
                        رفض الطلب
                      </button>
                    </div>
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

export default Jobs;
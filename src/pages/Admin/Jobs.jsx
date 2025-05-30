import React from 'react';
import { FaEnvelope, FaPhone, FaFileAlt, FaCheck, FaTimes } from 'react-icons/fa';

const Jobs = () => {
  const jobApplications = [
    {
      id: 1,
      name: 'محمد أحمد',
      email: 'mohamed@example.com',
      phone: '01234567890',
      position: 'مهندس زراعي',
      status: 'pending',
      date: '2024-01-15',
      cv: '#'
    },
    {
      id: 2,
      name: 'فاطمة علي',
      email: 'fatma@example.com',
      phone: '01234567891',
      position: 'مسؤول تسويق',
      status: 'approved',
      date: '2024-01-14',
      cv: '#'
    },
    
  ];

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

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">طلبات العمل</h2>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المتقدم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">معلومات التواصل</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الوظيفة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ التقديم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobApplications.map((application) => (
              <tr key={application.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{application.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaEnvelope className="ml-2" />
                      {application.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaPhone className="ml-2" />
                      {application.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(application.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3 space-x-reverse">
                    <button className="text-gray-600 hover:text-gray-900" title="عرض السيرة الذاتية">
                      <FaFileAlt className="w-5 h-5" />
                    </button>
                    {application.status === 'pending' && (
                      <>
                        <button className="text-green-600 hover:text-green-900" title="قبول">
                          <FaCheck className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900" title="رفض">
                          <FaTimes className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobs;
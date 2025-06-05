import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaFileAlt, FaCheck, FaTimes } from 'react-icons/fa';
import jobRequestAPI from '../../services/jobRequestAPI';

const Jobs = () => {
  
  const [jobApplications,setJobApplications]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
     const result= await jobRequestAPI.getAllJobRequests();
     setJobApplications(result.data)
    }
    fetchData();
    
  })

  // const getStatusBadge = (status) => {
  //   switch (status) {
  //     case 'approved':
  //       return (
  //         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
  //           تمت الموافقة
  //         </span>
  //       );
  //     case 'rejected':
  //       return (
  //         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
  //           مرفوض
  //         </span>
  //       );
  //     default:
  //       return (
  //         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
  //           قيد المراجعة
  //         </span>
  //       );
  //   }
  // };

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
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المؤهل</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الخبرات</th>
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
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.date}
                </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.date}
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
import React from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import banana from '../../assets/banana.png';

const AdminServices = () => {
  // Sample data for agricultural crops
  const agriculturalCrops = [
    { id: 1, title: 'الموز', image: banana },
    { id: 2, title: 'الموز', image: banana },
    { id: 3, title: 'الموز', image: banana },
    { id: 4, title: 'الموز', image: banana },
  ];

  // Sample data for awareness articles
  const awarenessArticles = [
    { id: 1, title: 'الميكنة الزراعية', image: banana },
    { id: 2, title: 'الميكنة الزراعية', image: banana },
    { id: 3, title: 'الميكنة الزراعية', image: banana },
    { id: 4, title: 'الميكنة الزراعية', image: banana },
  ];

  // Sample data for climate change impact articles
  const climateChangeArticles = [
    { id: 1, title: 'تأثير تغير المناخ والمحاصيل الزراعية', image: banana },
    { id: 2, title: 'تأثير تغير المناخ والمحاصيل الزراعية', image: banana },
    { id: 3, title: 'تأثير تغير المناخ والمحاصيل الزراعية', image: banana },
    { id: 4, title: 'تأثير تغير المناخ والمحاصيل الزراعية', image: banana },
  ];

  // Card component for displaying items
  const ItemCard = ({ item, type }) => (
    <div className="relative overflow-hidden rounded-lg shadow-md group p-2 bg-[#e8e8e8]">
      <div className='bg-[#2ECC71] p-4 m-8 rounded-3xl'>
        <img src={item.image} alt={item.title} className="w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg text-gray-800 font-extrabold">{item.title}</h3>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 space-x-reverse bg-white p-1 rounded-lg shadow-md">
          <button className="p-1 text-blue-600 hover:text-blue-700">
            <FaEdit className="w-5 h-5" />
          </button>
          <button className="p-1 text-red-600 hover:text-red-700">
            <FaTrash className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="rounded-lg shadow-md">
      <div className="mb-8 bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">المحاصيل الزراعية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agriculturalCrops.map((crop) => (
            <ItemCard key={crop.id} item={crop} type="crop" />
          ))}
          <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="mt-2 block text-sm font-medium text-gray-600">إضافة محصول جديد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Awareness Articles Section */}
      <div className="mb-8 bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">مقالات التوعية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awarenessArticles.map((article) => (
            <ItemCard key={article.id} item={article} type="article" />
          ))}
          <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="mt-2 block text-sm font-medium text-gray-600">إضافة مقال جديد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Climate Change Impact Articles Section */}
      <div className="mb-8 bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">مقالات تأثير تغير المناخ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {climateChangeArticles.map((article) => (
            <ItemCard key={article.id} item={article} type="climate" />
          ))}
          <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="mt-2 block text-sm font-medium text-gray-600">إضافة مقال جديد</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import banana from '../../assets/banana.png';

const AdminServices = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'crop', 'article', 'climate'
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Function to open modal for adding new item
  const openModal = (type) => {
    setModalType(type);
    setIsEditMode(false);
    setCurrentItem(null);
    setIsModalOpen(true);
  };

  // Function to open modal for editing existing item
  const openEditModal = (type, item) => {
    setModalType(type);
    setIsEditMode(true);
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  // Sample data for agricultural crops
  const agriculturalCrops = [
    { 
      id: 1, 
      title: 'الموز', 
      image: banana,
      description: 'وصف مختصر للموز',
      name: 'الموز',
      type: 'فاكهة',
      growthMonths: '12',
      season: 'صيفي'
    },
    { id: 2, title: 'الموز', image: banana },
    { id: 3, title: 'الموز', image: banana },
    { id: 4, title: 'الموز', image: banana },
  ];

  // Sample data for awareness articles
  const awarenessArticles = [
    { 
      id: 1, 
      title: 'الميكنة الزراعية', 
      image: banana,
      description: 'وصف مختصر للميكنة الزراعية',
      introduction: 'مقدمة عن الميكنة الزراعية',
      conceptDefinition: 'تعريف بمفهوم الميكنة الزراعية',
      topicImportance: 'أهمية الميكنة الزراعية',
      scientificGuidelines: 'الخطوات الإرشادية للميكنة الزراعية',
      recommendations: 'توصيات حول الميكنة الزراعية'
    },
    { id: 2, title: 'الميكنة الزراعية', image: banana },
    { id: 3, title: 'الميكنة الزراعية', image: banana },
    { id: 4, title: 'الميكنة الزراعية', image: banana },
  ];

  // Sample data for climate change impact articles
  const climateChangeArticles = [
    { 
      id: 1, 
      title: 'تأثير تغير المناخ والمحاصيل الزراعية', 
      image: banana,
      description: 'وصف مختصر لتأثير تغير المناخ',
      introduction: 'مقدمة عن تأثير تغير المناخ',
      conceptDefinition: 'تعريف بمشكلة تغير المناخ',
      topicImportance: 'أهمية فهم تأثير تغير المناخ',
      scientificGuidelines: 'الخطوات الإرشادية للتعامل مع تغير المناخ',
      recommendations: 'توصيات للتكيف مع تغير المناخ'
    },
    { id: 2, title: 'تأثير تغير المناخ والمحاصيل الزراعية', image: banana },
    { id: 3, title: 'تأثير تغير المناخ والمحاصيل الزراعية', image: banana },
    { id: 4, title: 'تأثير تغير المناخ والمحاصيل الزراعية', image: banana },
  ];

  // Card component for displaying items
  const ItemCard = ({ item, type }) => (
    <div className="relative overflow-hidden rounded-lg shadow-md group p-1 bg-[#e8e8e8]">
      <div className='bg-[#2ECC71] p-2 m-2 sm:m-4 rounded-2xl'>
        <img src={item.image} alt={item.title} className="w-full h-16 sm:h-24 object-contain" />
      </div>
      <div className="p-2">
        <h3 className="text-sm sm:text-md text-gray-800 font-bold text-center">{item.title}</h3>
      </div>
      <div className="absolute top-1 right-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-1 space-x-reverse bg-white p-1 rounded-lg shadow-md">
          <button 
            className="p-1 text-blue-600 hover:text-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              openEditModal(type, item);
            }}
          >
            <FaEdit className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button className="p-1 text-red-600 hover:text-red-700">
            <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    // For edit mode, you would update the existing item
    // For add mode, you would create a new item
    console.log('Form submitted in', isEditMode ? 'edit' : 'add', 'mode');
    closeModal();
  };

  return (
    <div className="rounded-lg shadow-md px-2 sm:px-4 py-4">
      <div className="mb-4 sm:mb-8 bg-white p-3 sm:p-6 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">المحاصيل الزراعية</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {agriculturalCrops.map((crop) => (
            <ItemCard key={crop.id} item={crop} type="crop" />
          ))}
          <div 
            onClick={() => openModal('crop')} 
            className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 sm:h-40 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="mt-2 block text-xs sm:text-sm font-medium text-gray-600">إضافة محصول جديد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Awareness Articles Section */}
      <div className="mb-4 sm:mb-8 bg-white p-3 sm:p-6 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">مقالات التوعية</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {awarenessArticles.map((article) => (
            <ItemCard key={article.id} item={article} type="article" />
          ))}
          <div 
            onClick={() => openModal('article')} 
            className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 sm:h-40 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="mt-2 block text-xs sm:text-sm font-medium text-gray-600">إضافة مقال جديد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Climate Change Impact Articles Section */}
      <div className="mb-4 sm:mb-8 bg-white p-3 sm:p-6 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">مقالات تأثير تغير المناخ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {climateChangeArticles.map((article) => (
            <ItemCard key={article.id} item={article} type="climate" />
          ))}
          <div 
            onClick={() => openModal('climate')} 
            className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 sm:h-40 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="mt-2 block text-xs sm:text-sm font-medium text-gray-600">إضافة مقال جديد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto p-3 sm:p-6 max-h-[95vh] flex flex-col">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                {isEditMode ? (
                  <>
                    {modalType === 'crop' && 'تعديل محصول'}
                    {modalType === 'article' && 'تعديل مقال توعية'}
                    {modalType === 'climate' && 'تعديل مقال تأثير تغير المناخ'}
                  </>
                ) : (
                  <>
                    {modalType === 'crop' && 'إضافة محصول جديد'}
                    {modalType === 'article' && 'إضافة مقال توعية جديد'}
                    {modalType === 'climate' && 'إضافة مقال تأثير تغير المناخ جديد'}
                  </>
                )}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 overflow-y-auto flex-1 pr-1 pl-1 sm:pr-2 sm:pl-2">
              {/* Image Upload */}
              <div>
                <label className="block text-right text-gray-700 text-sm font-bold mb-2">صورة</label>
                <div className="mt-1 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 pb-3 sm:pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {currentItem && currentItem.image ? (
                      <div className="mb-3">
                        <img 
                          src={currentItem.image} 
                          alt="Current image" 
                          className="mx-auto h-24 sm:h-32 w-auto"
                        />
                      </div>
                    ) : (
                      <svg className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                        <span className="text-xs sm:text-sm">{currentItem && currentItem.image ? 'تغيير الصورة' : 'رفع صورة'}</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF حتى 10MB</p>
                  </div>
                </div>
              </div>

              {/* Rest of the form fields with responsive classes */}
              <div className="space-y-4">
                {/* Form fields go here with responsive classes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Title */}
                  <div className="sm:col-span-2">
                    <label htmlFor="title" className="block text-right text-gray-700 text-sm font-bold mb-2">
                      عنوان {modalType === 'crop' ? 'المحصول' : 'المقالة'}
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                      placeholder={`أدخل عنوان ${modalType === 'crop' ? 'المحصول' : 'المقالة'}`}
                      defaultValue={currentItem ? currentItem.title : ''}
                    />
                  </div>

                  {/* Description - Only for articles */}
                  {(modalType === 'article' || modalType === 'climate' || modalType === 'crop') && (
                    <div className="sm:col-span-2">
                      <label htmlFor="description" className="block text-right text-gray-700 text-sm font-bold mb-2">
                        وصف مختصر {modalType === 'crop' ? 'للمحصول' : 'للمقالة'}
                      </label>
                      <textarea
                        id="description"
                        rows="3"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                        placeholder={`أدخل وصفاً مختصراً ${modalType === 'crop' ? 'للمحصول' : 'للمقالة'}`}
                        defaultValue={currentItem ? currentItem.description : ''}
                      ></textarea>
                    </div>
                  )}

                  {/* Article specific fields with responsive grid */}
                  {(modalType === 'article' || modalType === 'climate') && (
                    <>
                      <div className="sm:col-span-2">
                        <label htmlFor="introduction" className="block text-right text-gray-700 text-sm font-bold mb-2">المقدمة</label>
                        <textarea
                          id="introduction"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل مقدمة المقال"
                          defaultValue={currentItem ? currentItem.introduction : ''}
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="conceptDefinition" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          تعريف بالمفهوم أو المشكلة الزراعية
                        </label>
                        <textarea
                          id="conceptDefinition"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل تعريفاً بالمفهوم أو المشكلة الزراعية"
                          defaultValue={currentItem ? currentItem.conceptDefinition : ''}
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="topicImportance" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          أهمية الموضوع
                        </label>
                        <textarea
                          id="topicImportance"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل أهمية الموضوع"
                          defaultValue={currentItem ? currentItem.topicImportance : ''}
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="scientificGuidelines" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          الخطوات أو النصائح الإرشادية العلمية
                        </label>
                        <textarea
                          id="scientificGuidelines"
                          rows="4"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل الخطوات أو النصائح الإرشادية العلمية"
                          defaultValue={currentItem ? currentItem.scientificGuidelines : ''}
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="recommendations" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          التوصيات
                        </label>
                        <textarea
                          id="recommendations"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل التوصيات"
                          defaultValue={currentItem ? currentItem.recommendations : ''}
                        ></textarea>
                      </div>
                    </>
                  )}

                  {/* Crop specific fields */}
                  {modalType === 'crop' && (
                    <div className="sm:col-span-2 p-3 sm:p-4 bg-gray-50 rounded-lg mb-4">
                      <h3 className="text-md sm:text-lg font-bold text-gray-700 mb-3 text-right">البيانات العامة عن المحصول</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cropName" className="block text-right text-gray-700 text-sm font-bold mb-2">اسم المحصول</label>
                          <input
                            type="text"
                            id="cropName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            placeholder="مثال: قصب السكر"
                            defaultValue={currentItem ? currentItem.name : ''}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cropType" className="block text-right text-gray-700 text-sm font-bold mb-2">نوع المحصول</label>
                          <select
                            id="cropType"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            defaultValue={currentItem ? currentItem.type : ''}
                          >
                            <option value="">اختر نوع المحصول</option>
                            <option value="حبوب">حبوب</option>
                            <option value="خضروات">خضروات</option>
                            <option value="فاكهة">فاكهة</option>
                            <option value="محاصيل زيتية">محاصيل زيتية</option>
                            <option value="محاصيل سكرية">محاصيل سكرية</option>
                            <option value="أعلاف">أعلاف</option>
                            <option value="أخرى">أخرى</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="growthMonths" className="block text-right text-gray-700 text-sm font-bold mb-2">مدة النمو (بالشهور)</label>
                          <input
                            type="number"
                            id="growthMonths"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            placeholder="مثال: 3"
                            defaultValue={currentItem ? currentItem.growthMonths : ''}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="season" className="block text-right text-gray-700 text-sm font-bold mb-2">الموسم</label>
                          <select
                            id="season"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            defaultValue={currentItem ? currentItem.season : ''}
                          >
                            <option value="">اختر الموسم</option>
                            <option value="شتوي">شتوي</option>
                            <option value="صيفي">صيفي</option>
                            <option value="نيلي">نيلي</option>
                            <option value="على مدار العام">على مدار العام</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm sm:text-base"
                >
                  {isEditMode ? 'حفظ التعديلات' : 'إضافة'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;
import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import cropAPI from '../../services/cropAPI';
import blogAPI from '../../services/blogAPI';

const AdminServices = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'crop', 'article', 'climate'
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // State for data
  const [agriculturalCrops, setAgriculturalCrops] = useState([]);
  const [awarenessArticles, setAwarenessArticles] = useState([]);
  const [climateChangeArticles, setClimateChangeArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Fetch crops
      const cropsResponse = await cropAPI.getAllCrops();
      setAgriculturalCrops(cropsResponse.data);

      // Fetch awareness articles
      const awarenessResponse = await blogAPI.getArticlesBySubType('awareness');
      setAwarenessArticles(awarenessResponse.data);

      // Fetch climate change articles
      const climateResponse = await blogAPI.getArticlesBySubType('climate');
      setClimateChangeArticles(climateResponse.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      if (modalType === 'crop') {
        if (isEditMode) {
          console.log([...formData]);
          await cropAPI.updateCrop(currentItem.id, formData);
          // Update crops list after edit
          fetchData();
        } else {
          const response = await cropAPI.createCrop(formData);
          setAgriculturalCrops([...agriculturalCrops, response.data.data]);
        }
      } else if (modalType === 'article' || modalType === 'climate') {
        // Set article subtype
        formData.append('type', modalType === 'article' ? 'awareness' : 'climate');

        if (isEditMode) {
          await blogAPI.updateArticle(currentItem.id, formData);
          // Update articles list after edit
          const updateArticles = (modalType === 'article' ? awarenessArticles : climateChangeArticles)
            .map(article =>
              article.id === currentItem.id ? { ...article, ...Object.fromEntries(formData) } : article
            );
          if (modalType === 'article') {
            setAwarenessArticles(updateArticles);
          } else {
            setClimateChangeArticles(updateArticles);
          }
          fetchData();
        } else {
          const response = await blogAPI.createArticle(formData);
          if (modalType === 'article') {
            setAwarenessArticles([...awarenessArticles, response.data]);
          } else {
            setClimateChangeArticles([...climateChangeArticles, response.data]);
          }
          fetchData();
        }
      }
      closeModal();
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle item deletion
  const handleDelete = async (type, id) => {
    if (window.confirm('هل أنت متأكد من أنك تريد حذف هذا العنصر؟')) {
      try {
        if (type === 'crop') {
          await cropAPI.deleteCrop(id);
          setAgriculturalCrops(agriculturalCrops.filter(crop => crop.id !== id));
        } else {
          await blogAPI.deleteArticle(id);
          if (type === 'article') {
            setAwarenessArticles(awarenessArticles.filter(article => article.id !== id));
          } else {
            setClimateChangeArticles(climateChangeArticles.filter(article => article.id !== id));
          }
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // Card component for displaying items
  const ItemCard = ({ item, type }) => (
    <div className="relative overflow-hidden rounded-lg shadow-md group p-1 bg-[#e8e8e8]">
      <div className='bg-[#2ECC71] p-2 m-2 sm:m-4 rounded-2xl'>
        <img src={`${import.meta.env.VITE_API_URL_FRONT}${item.imageUrl}`} alt={item.arabicTitle} className="w-full h-16 sm:h-24 object-contain" />
      </div>
      <div className="p-2">
        <h3 className="text-sm sm:text-md text-gray-800 font-bold text-center">{item.arabicTitle}</h3>
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
          <button
            className="p-1 text-red-600 hover:text-red-700"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(type, item.id);
            }}
          >
            <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
  console.log(currentItem);
  
  return (
    <div className="rounded-lg shadow-md px-2 sm:px-4 py-4">
      {isLoading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-green-600 border-r-transparent"></div>
          <p className="mt-2">جاري تحميل البيانات...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
          <button className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setError(null)}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>إغلاق</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      )}

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
                  <div className="space-y-2 text-center">
                    {currentItem && currentItem.imageUrl ? (
                      <div className="mb-3">
                        <img
                          src={currentItem?.imageUrl?.startsWith('http') ? currentItem.imageUrl : `${import.meta.env.VITE_API_URL_FRONT}${currentItem?.imageUrl}`}
                          alt="Current image"
                          className="mx-auto h-24 sm:h-32 w-auto rounded-md shadow-md"
                        />
                      </div>
                    ) : (
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    <div className="flex justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="text-xs sm:text-sm">
                          {currentItem && currentItem.imageUrl ? 'تغيير الصورة' : 'رفع صورة'}
                        </span>
                        <input
                          id="file-upload"
                          name="image"
                          type="file"
                          accept="image/png, image/jpeg, image/gif"
                          className="sr-only"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              if (file.size > 10 * 1024 * 1024) { // 10MB
                                alert('حجم الصورة يجب أن يكون أقل من 10 ميجابايت');
                                return;
                              }
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                setCurrentItem((prev) => ({
                                  ...prev,
                                  imageUrl: event.target.result
                                }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
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
                  {/* Title arbic */}
                  <div className="sm:col-span-2">
                    <label htmlFor="arabicTitle" className="block text-right text-gray-700 text-sm font-bold mb-2">
                      عنوان {modalType === 'crop' ? 'المحصول' : 'المقالة'}
                    </label>
                    <input
                      type="text"
                      id="arabicTitle"
                      name="arabicTitle"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                      placeholder={`أدخل عنوان ${modalType === 'crop' ? 'المحصول' : 'المقالة'}`}
                      defaultValue={currentItem ? currentItem.arabicTitle : ''}
                      required
                    />
                  </div>
                  {/* Title english */}
                  <div className="sm:col-span-2">
                    <label htmlFor="title" className="block text-right text-gray-700 text-sm font-bold mb-2">
                      عنوان {modalType === 'crop' ? 'المحصول' : 'المقالة'} بالانجليزي
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                      placeholder={`أدخل عنوان ${modalType === 'crop' ? 'المحصول' : 'المقالة'} بالانجليزي`}
                      defaultValue={currentItem ? currentItem.title : ''}
                      required
                    />
                  </div>
                  {/* Description arbic - For all types */}
                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="block text-right text-gray-700 text-sm font-bold mb-2">
                      وصف مختصر {modalType === 'crop' ? 'للمحصول' : 'للمقالة'}
                    </label>
                    <textarea
                      id="arabicDescription"
                      name="arabicDescription"
                      rows="3"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                      placeholder={`أدخل وصفاً مختصراً ${modalType === 'crop' ? 'للمحصول' : 'للمقالة'}`}
                      defaultValue={currentItem ? currentItem.arabicDescription : ''}
                      required
                    ></textarea>
                  </div>

                  {/* Description english - For all types */}
                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="block text-right text-gray-700 text-sm font-bold mb-2">
                      وصف مختصر {modalType === 'crop' ? 'للمحصول' : 'للمقالة'} بالانجليزي
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                      placeholder={`أدخل وصفاً مختصراً ${modalType === 'crop' ? 'للمحصول' : 'للمقالة'} بالانجليزي`}
                      defaultValue={currentItem ? currentItem.description : ''}
                      required
                    ></textarea>
                  </div>
                  {/* Article specific fields with responsive grid */}
                  {(modalType === 'article' || modalType === 'climate') && (
                    <>
                      <div className="sm:col-span-2">
                        <label htmlFor="arabicIntro" className="block text-right text-gray-700 text-sm font-bold mb-2">المقدمة</label>
                        <textarea
                          id="arabicIntro"
                          name="arabicIntro"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل مقدمة المقال"
                          defaultValue={currentItem ? currentItem.arabicIntro : ''}
                          required
                        ></textarea>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="intro" className="block text-right text-gray-700 text-sm font-bold mb-2">المقدمة بالانجليزي</label>
                        <textarea
                          id="intro"
                          name="intro"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل مقدمة المقال بالانجليزي"
                          defaultValue={currentItem ? currentItem.intro : ''}
                          required
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="arabicIssueDefinition" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          تعريف بالمفهوم أو المشكلة الزراعية
                        </label>
                        <textarea
                          id="arabicIssueDefinition"
                          name="arabicIssueDefinition"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل تعريفاً بالمفهوم أو المشكلة الزراعية"
                          defaultValue={currentItem ? currentItem.arabicIssueDefinition : ''}
                          required
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="issueDefinition" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          تعريف بالمفهوم أو المشكلة الزراعية (بالانجليزي)
                        </label>
                        <textarea
                          id="issueDefinition"
                          name="issueDefinition"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أخل تعريفا بالمفهوم أو المشكلة الزراعية بالانجليزية"
                          defaultValue={currentItem ? currentItem.issueDefinition : ''}
                          required
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="arabicImportance" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          أهمية الموضوع
                        </label>
                        <textarea
                          id="arabicImportance"
                          name="arabicImportance"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل أهمية الموضوع"
                          defaultValue={currentItem ? currentItem.arabicImportance : ''}
                          required
                        ></textarea>
                      </div>
                        <div className="sm:col-span-2">
                        <label htmlFor="importance" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          أهمية الموضوع (بالانجليزي)
                        </label>
                        <textarea
                          id="importance"
                          name="importance"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل أهمية الموضوع بالانجليزي"
                          defaultValue={currentItem ? currentItem.importance : ''}
                          required
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="arabicPracticalSteps" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          الخطوات أو النصائح الإرشادية العلمية
                        </label>
                        <textarea
                          id="arabicPracticalSteps"
                          name="arabicPracticalSteps"
                          rows="4"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل الخطوات أو النصائح الإرشادية العلمية"
                          defaultValue={currentItem ? currentItem.arabicPracticalSteps : ''}
                          required
                        ></textarea>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="practicalSteps" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          الخطوات أو النصائح الإرشادية العلمية (بالانجليزي)
                        </label>
                        <textarea
                          id="practicalSteps"
                          name="practicalSteps"
                          rows="4"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="ادخل الخطوات أو النصائح الارشادية العلمية بالانجليزي"
                          defaultValue={currentItem ? currentItem.practicalSteps : ''}
                          required
                        ></textarea>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="arabicRecommendations" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          التوصيات
                        </label>
                        <textarea
                          id="arabicRecommendations"
                          name="arabicRecommendations"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أدخل التوصيات"
                          defaultValue={currentItem ? currentItem.arabicRecommendations : ''}
                          required
                        ></textarea>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="recommendations" className="block text-right text-gray-700 text-sm font-bold mb-2">
                          التوصيات (بالانجليزي)
                        </label>
                        <textarea
                          id="recommendations"
                          name="recommendations"
                          rows="3"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                          placeholder="أخل التوصيات بالانجليزي"
                          defaultValue={currentItem ? currentItem.recommendations : ''}
                          required
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
                          <label htmlFor="arabicName" className="block text-right text-gray-700 text-sm font-bold mb-2">اسم المحصول</label>
                          <input
                            type="text"
                            id="arabicName"
                            name="arabicName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            placeholder="مثال: قصب السكر"
                            defaultValue={currentItem ? currentItem.arabicName : ''}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="name" className="block text-right text-gray-700 text-sm font-bold mb-2">اسم المحصول بالانجليزي</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            placeholder="Example: sugarcane"
                            defaultValue={currentItem ? currentItem.name : ''}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="type" className="block text-right text-gray-700 text-sm font-bold mb-2">نوع المحصول</label>
                          <select
                            id="type"
                            name="type"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            defaultValue={currentItem ? currentItem.type : ''}
                            required
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
                          <label htmlFor="growthPeriod" className="block text-right text-gray-700 text-sm font-bold mb-2">مدة النمو (بالشهور)</label>
                          <input
                            type="number"
                            id="growthPeriod"
                            name="growthPeriod"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            placeholder="مثال: 3"
                            defaultValue={currentItem ? currentItem.growthPeriod : ''}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="season" className="block text-right text-gray-700 text-sm font-bold mb-2">الموسم</label>
                          <select
                            id="season"
                            name="season"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            defaultValue={currentItem ? currentItem.season : ''}
                            required
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
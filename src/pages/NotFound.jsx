import { FaRegSadTear } from 'react-icons/fa'  // أيقونة من مكتبة react-icons
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
   const navigate=useNavigate();
  // دالة للرجوع إلى الصفحة الرئيسية
  const goHome = () => {
    navigate("/")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className='flex justify-center'>
        <FaRegSadTear className="text-6xl text-gray-500 mb-4 text-center" />
        </div>
        <h1 className="text-2xl font-bold text-gray-700 mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-600 mb-6">نعتذر، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
        <button
          onClick={goHome}  // عند الضغط على الزر، يرجع إلى الصفحة الرئيسية
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    </div>
  )
}

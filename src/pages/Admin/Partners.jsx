import { useState, useRef, useEffect } from 'react';
import PartnersAPI from '../../services/partnersAPI'; // تأكد من وجود هذا الملف

// مكون لرفع الصورة
function FileUpload({ onFileChange }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={onFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-full py-2 px-4 bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 transition"
      >
        اختر صورة الشريك
      </button>
    </div>
  );
}

export default function PartnersPage() {
  const [partners, setPartners] = useState([]); // الشركاء
  const [newPartner, setNewPartner] = useState({
    name: '',
    logoFile: null,
    imageUrl: '',
    link: '',
  });

  // التعامل مع التغيرات في الحقول
  const handleChange = (e) => {
    setNewPartner({ ...newPartner, [e.target.name]: e.target.value });
  };

  // جلب الشركاء عند تحميل الصفحة
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await PartnersAPI.getAllPartners();
        setPartners(res.data);
      } catch (err) {
        console.error("خطأ في تحميل الشركاء:", err);
      }
    };

    fetchPartners();
  }, []);

  // التعامل مع التغيير في اختيار الصورة
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPartner({ ...newPartner, logoFile: file, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // إضافة شريك جديد
  const addPartner = async () => {
    console.log(newPartner);

    if (!newPartner.name.trim() || !newPartner.logoFile || !newPartner.link.trim()) {
      alert("جميع الحقول مطلوبة");
      return;
    }

    const formData = new FormData();
    formData.append("name", newPartner.name);
    formData.append("link", newPartner.link);
    formData.append("logo", newPartner.logoFile); // إرسال الصورة

    try {
      const res = await PartnersAPI.addPartner(formData);
      setPartners([...partners, res.data]); // أضف الشريك الجديد
      setNewPartner({ name: '', logoFile: null, imageUrl: '', link: '' });
    } catch (err) {
      console.error("فشل في إضافة الشريك:", err);
      alert("حدث خطأ أثناء الإضافة");
    }
  };

  // حذف شريك
  const deletePartner = async (index) => {
    const partnerId = partners[index].id;

    const confirmDelete = window.confirm("هل تريد حذف هذا الشريك؟");
    if (!confirmDelete) return;

    try {
      await PartnersAPI.deletePartner(partnerId);
      const updated = [...partners];
      updated.splice(index, 1);
      setPartners(updated);
    } catch (err) {
      console.error("فشل الحذف:", err);
      alert("حدث خطأ أثناء حذف الشريك");
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">الشركاء</h2>
      <div className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          name="name"
          value={newPartner.name}
          onChange={handleChange}
          placeholder="اسم الشريك"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          name="link"
          value={newPartner.link}
          onChange={handleChange}
          placeholder="رابط صفحة الشريك (مثل رابط فيسبوك)"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <FileUpload onFileChange={handleFileChange} />

        {newPartner.imageUrl && (
          <img
            src={newPartner.imageUrl}
            alt="معاينة لوجو الشريك"
            className="w-24 h-24 object-contain rounded mx-auto"
          />
        )}

        <button
          onClick={addPartner}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          إضافة شريك
        </button>
      </div>

      {partners.length === 0 ? (
        <p className="text-center text-gray-500">لا يوجد شركاء مضافين بعد</p>
      ) : (
        <ul className="space-y-4">
          {partners.map((p, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between border border-gray-200 rounded p-3 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`${import.meta.env.VITE_API_URL_FRONT}${p.logo}`}
                  alt={`${p.name} logo`}
                  className="w-16 h-16 object-contain rounded"
                />
                <div>
                  <span className="text-lg font-medium block">{p.name}</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    زيارة الرابط
                  </a>
                </div>
              </div>
              <button
                onClick={() => deletePartner(idx)}
                className="text-white bg-red-500 border-2 border-red-500 px-4 py-1 rounded-lg font-semibold
                hover:bg-red-100 hover:text-red-500 transition-colors duration-300"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

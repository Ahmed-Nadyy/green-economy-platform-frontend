import { useEffect, useState } from 'react';
import ContactAPI from '../../services/contactsAPI';

export default function ContactInfoPage() {
   const [contacts, setContacts] = useState({
    facebookLink: '',
    tiktokLink: '',
    youtubeLink: '',
    phoneNumber: '',
    whatsappLink: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };
  
  useEffect(() => {
    // Get contact info from backend
    const fetchData = async () => {
      try {
        const res = await ContactAPI.getAllMedia(); // endpoint لاسترجاع البيانات
        setContacts(res.data);
      } catch (err) {
        console.error("خطأ في تحميل البيانات:", err);
      } 
    };

    fetchData();
  }, []);


    const handleSave = async () => {
    // تحقق من أن كل الحقول غير فارغة
    const hasEmptyFields = Object.values(contacts).some(value => String(value).trim() === '');

  if (hasEmptyFields) {
    alert("من فضلك قم بملء جميع الحقول قبل الحفظ.");
    return;
  }

    try {
      await ContactAPI.updateMedia(contacts); // endpoint للتعديل
      alert("تم حفظ البيانات بنجاح");
    } catch (err) {
      console.error("خطأ أثناء حفظ البيانات:", err);
      alert("حدث خطأ أثناء حفظ البيانات");
    }
  };


  return (
    <div className=" px-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">بيانات التواصل</h2>
      <div className="space-y-4">
      <InputField label="فيسبوك" name="facebookLink" value={contacts.facebookLink} onChange={handleChange} />
<InputField label="تيك توك" name="tiktokLink" value={contacts.tiktokLink} onChange={handleChange} />
<InputField label="يوتيوب" name="youtubeLink" value={contacts.youtubeLink} onChange={handleChange} />
<InputField label="رقم الهاتف" name="phoneNumber" value={contacts.phoneNumber} onChange={handleChange} />
<InputField label="رقم الواتساب" name="whatsappLink" value={contacts.whatsappLink} onChange={handleChange} />
<InputField label="البريد الالكتروني" name="email" value={contacts.email} onChange={handleChange} />
<InputField label="العنوان" name="address" value={contacts.address} onChange={handleChange} />

      </div>

      <button
        onClick={handleSave}
        className="w-full mt-6 bg-[#2ECC71] text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
      >
        حفظ البيانات
      </button>
    </div>
  );
}

// إعادة استخدام حقل الإدخال
function InputField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder={label}
      />
    </div>
  );
}

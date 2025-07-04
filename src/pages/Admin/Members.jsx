import { useState, useRef, useEffect } from 'react';
import MembersAPI from '../../services/membersAPI';

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', role: '', imageFile: null, imagePreview: '', bio: '' });
  const fileInputRef = useRef(null);

  // جلب بيانات الأعضاء من API عند تحميل الصفحة
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await MembersAPI.getAllMember();
        setMembers(res.data);
      } catch (err) {
        console.error("فشل في جلب الأعضاء:", err);
      }
    };
    fetchMembers();
  }, []);

  // التعامل مع التغيير في المدخلات
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  // التعامل مع رفع الصورة
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMember((prev) => ({ ...prev, imageFile: file, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  // إضافة عضو جديد
  const addMember = async () => {
    if (!newMember.name.trim() || !newMember.role.trim() || !newMember.imageFile) {
      alert('الاسم، الوظيفة والصورة جميعها مطلوبة!');
      return;
    }

    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("role", newMember.role);
    formData.append("bio", newMember.bio);
    formData.append("image", newMember.imageFile);

    try {
      const res = await MembersAPI.addMember(formData);
      setMembers([...members, res.data]);
      setNewMember({ name: '', role: '', imageFile: null, imagePreview: '', bio: '' });
    } catch (err) {
      console.error("فشل في إضافة العضو:", err);
      alert('حدث خطأ أثناء إضافة العضو');
    }
  };

  // حذف عضو
  const deleteMember = async (id) => {
    const confirmDelete = window.confirm('هل أنت متأكد أنك تريد حذف هذا العضو؟');
    if (!confirmDelete) return;

    try {
      await MembersAPI.deleteMember(id);
      setMembers(members.filter((member) => member.id !== id));
    } catch (err) {
      console.error("فشل في حذف العضو:", err);
      alert('حدث خطأ أثناء حذف العضو');
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">الأعضاء</h2>

      <div className="flex flex-col gap-4 mb-8">
        <input
          type="text"
          name="name"
          value={newMember.name}
          onChange={handleChange}
          placeholder="اسم العضو"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="role"
          value={newMember.role}
          onChange={handleChange}
          placeholder="الوظيفة"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="bio"
          value={newMember.bio}
          onChange={handleChange}
          placeholder="نبذة عن العضو"
          rows={3}
          className="border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* رفع الصورة */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={handleChooseImage}
          className="w-full py-2 px-4 bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 transition"
        >
          اختر صورة العضو
        </button>

        {/* معاينة الصورة */}
        {newMember.imagePreview && (
          <img
            src={newMember.imagePreview}
            alt="معاينة صورة العضو"
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
        )}

        <button
          onClick={addMember}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          إضافة عضو
        </button>
      </div>

      {members.length === 0 ? (
        <p className="text-center text-gray-500">لا يوجد أعضاء مضافين بعد</p>
      ) : (
        <ul className="space-y-6">
          {members.map((m) => (
            <li
              key={m.id}
              className="flex items-center gap-4 border border-gray-200 rounded p-4 shadow-sm"
            >
              <img
                src={`${import.meta.env.VITE_API_URL_FRONT}${m.image}`}
                alt={m.name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{m.name}</h3>
                <p className="text-blue-600 font-medium">{m.role}</p>
                {m.bio && <p className="mt-1 text-gray-600">{m.bio}</p>}
              </div>
              <button
                onClick={() => deleteMember(m.id)}
                className="text-white bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
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

import { useState, useEffect } from "react";
import backgroundsAPI from "../../services/backgroundAPI";

export function FileInput({ onFileSelect }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* الزر المخصص */}
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        اختر صورة
      </label>

      {/* اسم الملف أو رسالة افتراضية */}
      <span className="text-gray-700">{fileName || "لم يتم اختيار ملف"}</span>

      {/* الحقل الحقيقي المخفي */}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}


export default function BackgroundsPage() {

  const [backgroundsBySection, setBackgroundsBySection] = useState({
    platform: [],
    institutionWord: [],
    goles: [],
    gallery: [],
    aboutUs: [],
    ourServices: [],
    askanExpert: [],
    careerOpportunities: [],
    contactUs: []

  });
  const [selectedBackgrounds, setSelectedBackgrounds] = useState({
    platform: null,
    institutionWord: null,
    goles: null,
    gallery: null,
    aboutUs: null,
    ourServices: null,
    askanExpert: null,
    careerOpportunities: null,
    contactUs: null
  });

  const [newImageFile, setNewImageFile] = useState(null);
  const [newImageSection, setNewImageSection] = useState("platform");
  const [loading, setLoading] = useState(false);

useEffect(() => {
  async function fetchBackgrounds() {
    setLoading(true);
    try {
      const res = await backgroundsAPI.getAllBackgrounds();
      const allBackgrounds = res.data;
      console.log(allBackgrounds);  // طباعة البيانات للتحقق من هيكلها

      const grouped = {
        platform: [],
        institutionWord: [],
        goles: [],
        gallery: [],
        aboutUs: [],
        ourServices: [],
        askanExpert: [],
        careerOpportunities: [],
        contactUs: []
      };

      const selected = {
        platform: null,
        institutionWord: null,
        goles: null,
        gallery: null,
        aboutUs: null,
        ourServices: null,
        askanExpert: null,
        careerOpportunities: null,
        contactUs: null
      };

      // التعامل مع كائن "backgroundsBySection" بدلاً من مصفوفة
      for (const [section, backgrounds] of Object.entries(allBackgrounds.backgroundsBySection)) {
        if (Array.isArray(backgrounds)) {
          backgrounds.forEach((bg) => {
            if (grouped[section]) {
              grouped[section].push({ id: bg.id, url: bg.url });

              if (allBackgrounds.selectedBackgrounds[section] === bg.id) {
                selected[section] = bg.id;
              }
            }
          });
        }
      }

      setBackgroundsBySection(grouped);
      setSelectedBackgrounds(selected);
    } catch (err) {
      console.error("Failed to fetch backgrounds:", err);
    }
    setLoading(false);
  }

  fetchBackgrounds();
}, []);



  const handleAddBackground = async () => {
    if (!newImageFile) {
      alert("يرجى اختيار ملف صورة أولاً");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("section", newImageSection);
      formData.append("image", newImageFile);

      await backgroundsAPI.addBackground(formData);
      window.location.reload()
    } catch (err) {
      console.error("Failed to add background:", err);
    }
    setLoading(false);
  };

  // const handleDeleteBackground = async (section, id) => {
  //   setLoading(true);
  //   try {
  //     await backgroundsAPI.deleteBackground(id);
  //     setBackgroundsBySection((prev) => ({
  //       ...prev,
  //       [section]: prev[section].filter((bg) => bg.id !== id),
  //     }));
  //     if (selectedBackgrounds[section] === id) {
  //       setSelectedBackgrounds((prev) => ({ ...prev, [section]: null }));
  //     }
  //   } catch (err) {
  //     console.error("Failed to delete background:", err);
  //   }
  //   setLoading(false);
  // };

  const handleChangeBackground = async (section, bgId) => {
    setLoading(true);
    try {
      await backgroundsAPI.selectBackground({ section, backgroundId: bgId });
      setSelectedBackgrounds((prev) => ({
        ...prev,
        [section]: bgId,
      }));
    } catch (err) {
      console.error("Failed to select background:", err);
    }
    setLoading(false);
  };
  
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">تغيير الخلفيات المنصة</h2>

      <div className="mb-10 p-4 border rounded-lg flex flex-col md:flex-row gap-4 items-center">
  {/* اختيار القسم */}
  <select
    value={newImageSection}
    onChange={(e) => setNewImageSection(e.target.value)}
    className="border px-3 py-2 rounded w-full md:w-auto"
    disabled={loading}
  >
    <option value="platform">خلفية المنصة</option>
    <option value="institutionWord">خلفية كلمة المؤسسة</option>
    <option value="goles">خلفية أهدافنا</option>
    <option value="aboutUs">من نحن</option>
    <option value="ourServices">خدمتنا</option>
    <option value="askanExpert">أسال خبير</option>
    <option value="gallery">خلفية المعرض</option>
    <option value="careerOpportunities">فرص عمل</option>
    <option value="contactUs">تواصل معنا</option>
  </select>

  {/* مكون رفع الصورة */}
  <FileInput onFileSelect={setNewImageFile} />

  {/* زر إضافة الخلفية */}
  <button
    onClick={handleAddBackground}
    disabled={loading}
    className={`px-4 py-2 rounded transition w-full md:w-auto ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"}`}
  >
    إضافة خلفية
  </button>
</div>


      {loading && <p className="text-center text-gray-500 mb-4">جارٍ التحميل...</p>}

      {Object.entries(backgroundsBySection).map(([section, backgrounds]) => (
        <section key={section} className="mb-10">
          <h3 className="text-xl font-bold mb-4">
            {section === "platform" && "خلفية المنصة"}
            {section === "institutionWord" && "خلفية كلمة المؤسسة"}
            {section === "aboutUs" && "من نحن"}
            {section === "ourServices" && "خدمتنا"}
            {section === "goles" && "خلفية أهدافنا"}
            {section === "askanExpert" && "أسال خبير"}
            {section === "gallery" && "خلفية المعرض"}
            {section === "careerOpportunities" && "فرص عمل"}
            {section === "contactUs" && "تواصل معنا"}
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {backgrounds.map((bg) => (
              <div
                key={bg.id}
                className={`border rounded overflow-hidden cursor-pointer transition-shadow relative ${selectedBackgrounds[section] === bg.id ? "ring-4 ring-blue-500" : "hover:shadow-lg"
                  }`}
              >
                <img
                  src={`${import.meta.env.VITE_API_URL_FRONT}${bg.url}`}
                  alt={`${section} background`}
                  className="w-full h-32 object-cover"
                  onClick={() => handleChangeBackground(section, bg.id)}
                />
                {/* <button
                  onClick={() => handleDeleteBackground(section, bg.id)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded px-2 py-1 text-sm hover:bg-red-700 transition"
                  title="حذف الخلفية"
                  disabled={loading}
                >
                  حذف
                </button> */}
                <button
                  onClick={() => handleChangeBackground(section, bg.id)}
                  className={`w-full py-2 ${selectedBackgrounds[section] === bg.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  disabled={loading}
                >
                  {selectedBackgrounds[section] === bg.id ? "محدد" : "تحديد"}
                </button>
              </div>
            ))}

            {backgrounds.length === 0 && <p className="col-span-3 text-center text-gray-500">لا توجد خلفيات مضافة</p>}
          </div>
        </section>
      ))}
    </div>
  );
}
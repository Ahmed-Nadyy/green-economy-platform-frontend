import React from "react";
import bg1 from "../assets/home/HomeBG.png";
import bg2 from "../assets/home/Home2.png";
import bg3 from "../assets/home/Home3.png";
import cefd from "../assets/home/cefd.png";
import opi from "../assets/home/opi.png";
import agri from "../assets/home/agri.png";
import creativa from "../assets/home/creativa.png";
const Home = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: bg1 ? `url(${bg1})` : 'none',
          }}
        >
          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className="bg-black bg-opacity-30 rounded-lg p-8 sm:p-12 backdrop-blur-sm">
              <h1 className="text-white text-xl sm:text-2xl lg:text-2xl leading-relaxed mb-6 font-thin" dir="rtl">
                منصة نادي الاقتصاد الأخضر مركزا للابتكار الإبداعي في مجال قطاع الزراعة وهي
                منصة الكترونية تربط بين مختلف أطراف القطاع الزراعي، مثل المزارعين، والتجار،
                والموردين، والمستهلكين وتوفر مجموعة متنوعة من الخدمات، مثل تبادل
                المعلومات، والتجارة الإلكترونية، والتمويل، والإرشاد الزراعي
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>


      </div>
      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center">
              {/* Left decorative lines */}
              <div className="flex space-x-1 mr-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white bg-green-500 px-8 py-3 rounded" dir="rtl">
                شركاؤنا
              </h2>

              {/* Right decorative lines */}
              <div className="flex space-x-1 ml-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Partner 1 - CEFD */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-2 bg-gradient-to-br from-blue-600 to-green-400 rounded-full flex items-center justify-center">
                  <img src={cefd} alt="" />
                </div>
              </div>
            </div>

            {/* Partner 2 - Agricultural Bank of Egypt */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="flex flex-col items-center space-x-2">
                  <div className="w-24 h-24 mx-auto mb-2 bg-gradient-to-br from-blue-600 to-green-400 rounded-full flex items-center justify-center">
                    <img src={agri} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Partner 3 - PPI Group SOS */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="flex flex-col items-center space-x-2">
                  <div className="w-24 h-24 mx-auto mb-2 bg-gradient-to-br from-blue-600 to-green-400 rounded-full flex items-center justify-center">
                    <img src={opi} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Partner 4 - Creativa */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="flex flex-col items-center space-x-2">
                  <div className="w-24 h-24 mx-auto mb-2 bg-gradient-to-br  rounded-full flex items-center justify-center">
                    <img src={creativa} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="relative py-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: bg2 ? `url(${bg2})` : 'none',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" dir="rtl">
              كلمة المؤسسة
            </h2>
          </div>

          {/* Message Content */}
          <div className="bg-black bg-opacity-40 rounded-lg p-8 md:p-12 backdrop-blur-sm">
            <div className="text-white text-lg md:text-xl leading-relaxed space-y-6" dir="rtl">
              <p>
                في عصر التحول الرقمي، أصبحت المنصات الإلكترونية الزراعية أدوات لا غنى عنها لتطوير القطاع الزراعي وتحقيق الأمن الغذائي. حيث تعمل هذه المنصات على ربط المزارعين والتجار والمستهلكين، وتوفير مجموعة متنوعة من الخدمات التي تساهم في تحسين الإنتاجية وزيادة الدخل وتعزيز الاستدامة
              </p>

              <p>
                حيث تمثل المنصات الإلكترونية الزراعية فرصة ذهبية لتحقيق نقلة نوعية في القطاع الزراعي لاستخدام أحدث الأساليب والتقنيات الزراعية المتاحة لتطوير القطاع الزراعي باستخدام اليات تدعم الحفاظ على البيئة وسلامة الغذاء وتعظم العائد من هذا القطاع. والذي يتطلب الترابط والتعاون بين الحكومة والمؤسسات والشركات لدعم هذه المنصات وتوفير البيئة المناسبة لتطويرها واستخدامها، من أجل تحقيق التنمية المستدامة والازدهار في القطاع الزراعي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Importance Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Section Title */}
            <div className="inline-flex items-center">
              {/* Left decorative lines */}
              <div className="flex space-x-1 mr-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white bg-green-500 px-8 py-3 rounded" dir="rtl">
                أهمية منصة نادي الاقتصاد الأخضر
              </h2>

              {/* Right decorative lines */}
              <div className="flex space-x-1 ml-4">
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
                <div className="w-1 h-12 bg-green-500"></div>
              </div>
            </div>
          </div>


          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 space-x-reverse">
            {/* Feature 1 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight" dir="rtl">
                    تحسين الكفاءة والإنتاجية
                  </h3>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight" dir="rtl">
                    الإرشاد الزراعي
                  </h3>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight" dir="rtl">
                    تبادل المعلومات
                  </h3>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-white opacity-0 rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 11a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1zM4 14a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight" dir="rtl">
                    تسهيل الوصول إلى الأسواق
                  </h3>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {/* Feature 5 */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute inset-0 bg-white opacity-0 rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-center relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4zM3 8a1 1 0 000 2v3a1 1 0 001 1h12a1 1 0 001-1v-3a1 1 0 100-2H3z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight" dir="rtl">
                      تعزيز الشمول المالي
                    </h3>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-50"></div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 h-48 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute inset-0 bg-white opacity-0 rounded-3xl group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-center relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight" dir="rtl">
                      دعم التنمية المستدامة
                    </h3>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="relative py-24">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: bg3 ? `url(${bg3})` : 'none',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-wide" dir="rtl">
              أهدافنا
            </h2>
          </div>

          {/* Goals Content */}
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-50 rounded-2xl p-10 md:p-16 backdrop-blur-md max-w-5xl border border-white border-opacity-10">
              <p className="text-white text-xl md:text-2xl leading-relaxed text-center font-medium" dir="rtl">
                المساهمة في تحقيق التكامل بين الاقتصاد الأخضر والتنمية المستدامة والتمكين الاجتماعي من خلال إحداث تغيير إيجابي بالمجتمعات
                العربية بين مختلف أطراف القطاع الزراعي
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center mt-12 space-x-1 opacity-0">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute top-20 left-10 w-16 h-16 border-2 border-green-400 border-opacity-100 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-green-500 border-opacity-100 rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-1/2 left-20 w-8 h-8 bg-green-400 bg-opacity-100 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-16 w-6 h-6 bg-green-500 bg-opacity-100 rounded-full animate-bounce delay-200"></div>
        </div>
      </section>
    </>
  );
};

export default Home;

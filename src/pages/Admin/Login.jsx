import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/background.png';
import authAPI from '../../services/authAPI';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await authAPI.login({
      email,
      password
    });;
      if (result.status) {
        localStorage.setItem('email',email)
        navigate('/admin/verify');
      } else {
        setError('فشل تسجيل الدخول. يرجى التحقق من بيانات الاعتماد الخاصة بك.');
      }
    } catch (err) {
      setError('حدث خطأ أثناء تسجيل الدخول. حاول مرة اخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative font-cairo">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Login form */}
      <div className="relative z-10 bg-white/45 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md mx-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">نادي الاقتصاد الأخضر</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-black-700 text-right mb-3">
              البريد الالكتروني
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-right bg-white/80 placeholder-gray-400"
              required
              dir="rtl"
              placeholder="ادخل البريد الالكتروني"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-black-700 text-right mb-3">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-right bg-white/80 placeholder-gray-400"
              required
              dir="rtl"
              placeholder="ادخل كلمة المرور"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-right mb-4">
              {error}
            </div>
          )}

          <div className='flex justify-center'>
<button
            type="submit"
            className="w-[250px] bg-green-500 border-white border-2 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            disabled={isLoading}
          >
            {isLoading ? 'جاري تسجيل الدخول...' : 'التالي'}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
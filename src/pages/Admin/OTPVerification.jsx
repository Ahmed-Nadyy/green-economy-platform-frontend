import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/background.png';
import authAPI from '../../services/authAPI';

const OTPVerification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '','']);
  const [timer, setTimer] = useState(59);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
        const newCode = [...verificationCode];
        newCode[index - 1] = '';
        setVerificationCode(newCode);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const code = verificationCode.join('');
    if (code.length !== 6) {
      setError('الرجاء إدخال رمز التحقق كاملاً');
      setIsLoading(false);
      return;
    }
   console.log(code);
   
    try {
      const result = await authAPI.verifyLogin({
        email:localStorage.getItem('email'),
        otp:code
      });
      console.log(result);
      
      if (result.data.status) {
        localStorage.setItem('admin',JSON.stringify(result.data.admin))
        localStorage.setItem('token',result.data.token)
        navigate('/admin');
      } else {
        setError('رمز التحقق غير صحيح');
      }
    } catch (err) {
      setError('حدث خطأ أثناء التحقق. حاول مرة اخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async() => {
    setTimer(59);
    // Add your resend code logic here
    await authAPI.resendOtp({
      email:localStorage.getItem('email'),
      type:"login"
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative font-cairo">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 bg-white/45 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md mx-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">نادي الاقتصاد الأخضر</h2>
        <p className="text-center text-white mb-8">لقد ارسلنا الى البريد رقم التحقق الرجاء كتابة رقم التحقق</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-center gap-4 mb-6">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 bg-white/80"
                required
              />
            ))}
          </div>

          {error && (
            <div className="text-red-800 text-sm text-center mb-4">
              {error}
            </div>
          )}

          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-32 bg-green-500 border-white border-2 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'جاري التحقق...' : 'التحقق'}
            </button>

            <div className="text-center justify-between w-full flex">
              <span className="text-gray-600 ml-2">{String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}</span>
              <button
                type="button"
                onClick={handleResendCode}
                disabled={timer > 0}
                className="text-gray-800 hover:text-green-700 mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                إعادة ارسال رمز
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
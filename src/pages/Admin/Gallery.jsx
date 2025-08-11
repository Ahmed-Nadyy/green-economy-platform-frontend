import React, { useEffect, useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import galleryAPI from '../../services/galleryAPI';
import imageCompression from 'browser-image-compression';
function CustomYouTubePlayer({ videoId }) {
    const playerRef = useRef(null);

    useEffect(() => {
      // تحميل سكريبت YouTube IFrame API إذا لم يكن موجودًا
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      const loadPlayer = () => {
        if (window.YT && window.YT.Player) {
          playerRef.current = new window.YT.Player("yt-player", {
            videoId,
            events: {
              onReady: (event) => {
                event.target.playVideo();
              },
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                  console.log("الفيديو انتهى");
                }
              }
            },
            playerVars: {
              autoplay: 0,
              // controls: 0,
              modestbranding: 1,
              rel: 0,
              fs: 0,
              disablekb: 1,
              iv_load_policy: 3,
              playsinline: 1
            }
          });
        } else {
          // Retry if API isn't ready yet
          setTimeout(loadPlayer, 100);
        }
      };
      loadPlayer();
    }, [videoId]);

    return <div id="yt-player" style={{ width: "100%", height: "200px" }} />;
  }

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [youtubeError, setYoutubeError] = useState('');

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (uploading) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    if (uploading) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    } else {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [uploading]);

  const fetchGalleryItems = async () => {
    try {
      const response = await galleryAPI.getAllGalleryItems();
      setImages(response.data.filter(item => item.type === 'image'));
      setVideos(response.data.filter(item => item.type === 'video' || item.type === 'youtube'));
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await galleryAPI.deleteGalleryItem(id);
      setImages(prev => prev.filter(item => item.id !== id));
      setVideos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const validateFile = (file, type) => {
    const maxImageSizeMB = 2;
    const maxVideoSizeMB = 50;
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const allowedVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];

    if (type === 'image') {
      if (!allowedImageTypes.includes(file.type)) {
        alert('نوع الصورة غير مدعوم. الرجاء رفع JPEG أو PNG أو WEBP فقط.');
        return false;
      }
      if (file.size / 1024 / 1024 > maxImageSizeMB) {
        alert('حجم الصورة كبير جدًا. الرجاء رفع صورة أقل من 2 ميجابايت.');
        return false;
      }
    } else if (type === 'video') {
      if (!allowedVideoTypes.includes(file.type)) {
        alert('نوع الفيديو غير مدعوم. الرجاء رفع MP4 أو WEBM أو OGG فقط.');
        return false;
      }
      if (file.size / 1024 / 1024 > maxVideoSizeMB) {
        alert('حجم الفيديو كبير جدًا. الرجاء رفع فيديو أقل من 50 ميجابايت.');
        return false;
      }
    }
    return true;
  };

  const handleUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!validateFile(file, type)) return;

    let uploadFile = file;

    if (type === 'image') {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        };
        uploadFile = await imageCompression(file, options);
      } catch (error) {
        alert('حدث خطأ أثناء ضغط الصورة.');
        return;
      }
    }

    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('type', type);

    try {
      setUploading(true);
      setProgress(0);

      const response = await galleryAPI.createGalleryItem(formData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
        },
      });

      if (type === 'image') {
        setImages(prev => [...prev, response.data.galleryItem]);
      } else {
        setVideos(prev => [...prev, response.data.galleryItem]);
      }
    } catch (error) {
      alert('فشل رفع الملف، حاول مرة أخرى.');
      console.error(error);
    } finally {
      setUploading(false);
      setProgress(0);
      e.target.value = '';
    }
  };

  // تحقق من صحة رابط يوتيوب
  const validateYoutubeUrl = (url) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:\S+)?$/;
    return regex.test(url);
  };

const handleAddYoutube = async () => {
  setYoutubeError('');
  if (!validateYoutubeUrl(youtubeUrl.trim())) {
    setYoutubeError('رابط يوتيوب غير صالح');
    return;
  }

  const videoId = extractYoutubeId(youtubeUrl.trim());

  if (!videoId) {
    setYoutubeError('رابط يوتيوب غير صالح');
    return;
  }

  try {
    setUploading(true);
    // إرسال الـ id فقط مع النوع
    const response = await galleryAPI.createGalleryItem({
      url: videoId,
      type: 'youtube',  // تأكد أن النوع 'youtube' وليس 'video'
    });

    setVideos(prev => [...prev, response.data.galleryItem]);
    setYoutubeUrl('');
  } catch (error) {
    alert('فشل إضافة رابط يوتيوب، حاول مرة أخرى.');
    console.error(error);
  } finally {
    setUploading(false);
  }
};


  return (
    <div className="container mx-auto px-4 py-6 space-y-8">

      {/* شريط التقدم والتحميل كما في كودك السابق */}
      {uploading && (
        <>
          <div className="fixed top-0 left-0 w-full bg-blue-600 h-1 z-50">
            <div
              className="h-full bg-blue-300 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded shadow-lg flex items-center space-x-3 z-50">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span>جاري رفع الملف... الرجاء عدم إغلاق الصفحة</span>
          </div>
        </>
      )}

      {/* معرض الصور كما هو */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-semibold text-gray-800">معرض الصور</h2>
          <label className="cursor-pointer w-full sm:w-auto">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={(e) => handleUpload(e, 'image')}
              disabled={uploading}
            />
            <div className={`px-4 py-2 text-sm font-medium text-white rounded-lg flex items-center justify-center
              ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}>
              <span className="ml-2">+</span>
              <span>إضافة صورة جديدة</span>
            </div>
          </label>
        </div>
        {loading ? (
          <p className="text-center text-gray-500">جاري التحميل...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image._id} className="relative group">
                <div className="bg-green-500 p-2 rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt="Gallery"
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Delete image"
                  disabled={uploading}
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* معرض الفيديوهات مع إضافة رابط يوتيوب */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-semibold text-gray-800">معرض الفيديوهات</h2>

          {/* رفع فيديو */}
          <label className="cursor-pointer w-full sm:w-auto">
            <input
              type="file"
              accept="video/mp4,video/webm,video/ogg"
              className="hidden"
              onChange={(e) => handleUpload(e, 'video')}
              disabled={uploading}
            />
            <div className={`px-4 py-2 text-sm font-medium text-white rounded-lg flex items-center justify-center
              ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}>
              <span className="ml-2">+</span>
              <span>إضافة فيديو جديد</span>
            </div>
          </label>

          {/* إدخال رابط يوتيوب */}
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto gap-2">
            <input
              type="text"
              placeholder="أدخل رابط يوتيوب"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              disabled={uploading}
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddYoutube}
              disabled={uploading}
              className={`px-4 py-2 text-white rounded-lg ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              أضف
            </button>
          </div>
        </div>
        {youtubeError && <p className="text-red-500 text-sm">{youtubeError}</p>}

        {loading ? (
          <p className="text-center text-gray-500">جاري التحميل...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {videos.map((video) => (
  <div key={video._id} className="relative group">
    <div className="bg-green-500 p-2 rounded-lg overflow-hidden">
      {video.type === 'youtube' ? (
        <CustomYouTubePlayer videoId={video.url} />
      ) : (
        <video
          src={video.url}
          controls
          className="w-full h-32 object-cover rounded-md"
        />
      )}
    </div>
    <button
      onClick={() => handleDelete(video.id)}
      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
      aria-label="Delete video"
      disabled={uploading}
    >
      <FaTrash className="w-4 h-4" />
    </button>
  </div>
))}

          </div>
        )}
      </div>
    </div>
  );
};

// دالة لاستخراج ID يوتيوب من الرابط
function extractYoutubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default Gallery;

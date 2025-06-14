import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';

import store from './store';
import router from './router';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    console.log(document.documentElement.dir );
    console.log(document.documentElement.lang );
    
  }, [i18n.language]);

  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

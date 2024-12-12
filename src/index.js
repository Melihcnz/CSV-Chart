import React from 'react';                                    // React kütüphanesini projeye dahil eder
import ReactDOM from 'react-dom/client';                     // React'in DOM manipülasyonu için gerekli metodları içerir
import App from './App';                                     // Ana uygulama bileşenini import eder

const root = ReactDOM.createRoot(document.getElementById('root')); // HTML'deki 'root' elementini seçer ve React root'u oluşturur
root.render(                                                 // Uygulamayı render eder
  <React.StrictMode>                                        
    <App />                                                 
  </React.StrictMode>
);
import React from 'react';                                   // React kütüphanesini import eder
import Papa from 'papaparse';                               // CSV dosyalarını okumak için PapaParse kütüphanesini import eder

const FileUploader = ({ onDataLoaded }) => {                // Props olarak veri yükleme callback'ini alır
    const handleFileUpload = (e) => {                       // Dosya yükleme olayını işleyen fonksiyon
        const file = e.target.files[0];                     // Seçilen ilk dosyayı alır
        if (!file) return;                                  // Dosya seçilmediyse işlemi sonlandırır

        Papa.parse(file, {                                  // CSV dosyasını parse eder
            header: true,                                   // İlk satırı başlık olarak kullanır
            skipEmptyLines: true,                           // Boş satırları atlar
            complete: (result) => {                         // Parse işlemi tamamlandığında
                onDataLoaded(result.data);                  // Sonucu üst bileşene gönderir
            },
        });
    };

    return (
        <div>
            <input                                          // Dosya seçme input'u
                type="file"                                 // Dosya tipi input
                accept=".csv"                               // Sadece CSV dosyalarını kabul eder
                onChange={handleFileUpload}                 // Dosya seçildiğinde handleFileUpload çağrılır
            />
        </div>
    );
};

export default FileUploader;                                // Bileşeni dışa aktarır
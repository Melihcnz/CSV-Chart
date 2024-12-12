import React from "react";
import CustomLineChart from "./Charts/components/LineChart";
import CustomBarChart from "./Charts/components/BarChart";
import DollarChart from "./Charts/components/DollarChart";
import StockChart from "./Charts/components/StockChart";
import DiscountChart from "./Charts/components/DiscountChart";
import DeliveryChart from "./Charts/components/DeliveryChart";
import CustomPieChart from "./Charts/components/PieChart";
import CustomRadarChart from "./Charts/components/RadarChart";

const Charts = ({ data, headers }) => {
  const calculateAverage = (dataKey) => {
    const sum = data.reduce((acc, item) => {
      const value =
        typeof item[dataKey] === "string"
          ? parseFloat(item[dataKey].replace(/[^0-9.-]+/g, ""))
          : item[dataKey];
      return acc + value;
    }, 0);
    return (sum / data.length).toFixed(2);
  };

  const averages = headers.reduce((acc, header) => {
    if (typeof data[0][header] === "number") {
      acc[header] = calculateAverage(header);
    }
    return acc;
  }, {});

  // Header eşleştirme kuralları
  const chartRules = {
    price: {
      match: (header) =>
        header.toLowerCase().includes("fiyat") ||
        header.toLowerCase().includes("price"),
      component: (header) =>
        header.includes("$") ? (
          <DollarChart
            key={header}
            data={data}
            header={header}
            averages={averages}
          />
        ) : (
          <CustomBarChart
            key={header}
            data={data}
            header={header}
            averages={averages}
          />
        ),
    },
    stock: {
      match: (header) =>
        header.toLowerCase().includes("stok") ||
        header.toLowerCase().includes("stock"),
      component: (header) => (
        <StockChart
          key={header}
          data={data}
          header={header}
          averages={averages}
        />
      ),
    },
    discount: {
      match: (header) =>
        header.toLowerCase().includes("indirim") ||
        header.toLowerCase().includes("discount"),
      component: (header) => (
        <DiscountChart
          key={header}
          data={data}
          header={header}
          averages={averages}
        />
      ),
    },
    delivery: {
      match: (header) =>
        header.toLowerCase().includes("teslim") ||
        header.toLowerCase().includes("delivery"),
      component: (header) => (
        <DeliveryChart
          key={header}
          data={data}
          header={header}
          averages={averages}
        />
      ),
    },
    sales: {
      match: (header) =>
        header.toLowerCase().includes("satış") ||
        header.toLowerCase().includes("sales"),
      component: (header) => (
        <CustomPieChart key={header} data={data} header={header} />
      ),
    },
    // Radar grafikleri için kurallar
    radar: {
      match: (header) =>
        header.toLowerCase().includes("karşılaştırma") ||
        header.toLowerCase().includes("compare") ||
        header.toLowerCase().includes("radar") ||
        header.toLowerCase().includes("analiz") ||
        header.toLowerCase().includes("analysis"),
      component: (header) => (
        <CustomRadarChart key={header} data={data} header={header} />
      ),
    },

    // Popülerlik için radar grafikleri
    popularity: {
      match: (header) =>
        header.toLowerCase().includes("popüler") ||
        header.toLowerCase().includes("popular") ||
        header.toLowerCase().includes("puan") ||
        header.toLowerCase().includes("rating") ||
        header.toLowerCase().includes("skor") ||
        header.toLowerCase().includes("score"),
      component: (header) => (
        <CustomRadarChart key={header} data={data} header={header} />
      ),
    },
  };

  // Başlıkları otomatik eşleştir ve grafikleri oluştur
  const autoGenerateCharts = () => {
    return headers
      .map((header) => {
        // Marka sütununu atla
        if (header.toLowerCase() === "marka") return null;

        // Uygun grafik türünü bul
        for (const rule of Object.values(chartRules)) {
          if (rule.match(header)) {
            return rule.component(header);
          }
        }

        // Eşleşme bulunamazsa varsayılan olarak çizgi grafik kullan
        return (
          <CustomLineChart
            key={header}
            data={data}
            header={header}
            averages={averages}
          />
        );
      })
      .filter(Boolean); // null değerleri filtrele
  };

  return <div className="charts-container">{autoGenerateCharts()}</div>;
};

export default Charts;

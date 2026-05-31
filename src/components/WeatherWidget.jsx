import { useState, useEffect } from 'react';

const rowClass = "flex justify-between items-center py-2 border-b border-gray-100 last:border-0";
const labelClass = "text-gray-500 text-sm";
const valueClass = "font-bold text-indigo-600";

const WeatherWidget = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/weather/London?format=j1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-400 text-sm">Fetching data...</p>;
  if (error) return <p className="text-red-500 text-sm">{error}</p>;

  const current = data.current_condition[0];

  return (
    <>
      <div>
        <div className={rowClass}>
          <span className={labelClass}>Temperature</span>
          <span className={valueClass}>{current.temp_C}°C</span>
        </div>
        <div className={rowClass}>
          <span className={labelClass}>Condition</span>
          <span className={valueClass}>{current.weatherDesc[0].value}</span>
        </div>
        <div className={rowClass}>
          <span className={labelClass}>Humidity</span>
          <span className={valueClass}>{current.humidity}%</span>
        </div>
        <div className={rowClass}>
          <span className={labelClass}>Wind</span>
          <span className={valueClass}>{current.windspeedKmph} km/h</span>
        </div>
      </div>
    </>
  );
}

export default WeatherWidget;

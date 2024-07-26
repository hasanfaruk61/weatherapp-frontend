import React from "react";

interface ForecastProps {
  forecasts: Array<{
    date: string;
    temperature: number;
    description: string;
  }>;
}

const Forecast: React.FC<ForecastProps> = ({ forecasts }) => {
  return (
    <div className="forecast-container">
      {forecasts.map((forecast, index) => (
        <div key={index} className="forecast-card">
          <p>{forecast.date}</p>
          <p>{forecast.temperature} °C</p>
          <p>{forecast.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

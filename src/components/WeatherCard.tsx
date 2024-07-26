import React from 'react';

interface WeatherCardProps {
  cityName: string;
  temperature: number;
  humidity: number;
  description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ cityName, temperature, humidity, description }) => {
  return (
    <div className="weather-card">
      <h2 className="card-title">{cityName}</h2>
      <p className="card-text">Temp: {temperature} °C</p>
      <p className="card-text">Humidity: {humidity}%</p>
      <p className="card-text">State: {description}</p>
    </div>
  );
};

export default WeatherCard;

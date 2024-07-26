import React, { useState } from 'react';
import './styles/App.css';
import WeatherCard from './components/WeatherCard';
import { getWeatherByCity } from './services/weatherService';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    }
  ];
}

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    try {
      const data = await getWeatherByCity(city);
      console.log('Response:', data);
      setWeatherData(data);
      setError('');
    } catch (error) {
      setError('Error Occured!');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Enter a city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Ara</button>
        </div>
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <WeatherCard
            cityName={weatherData.name}
            temperature={weatherData.main.temp}
            humidity={weatherData.main.humidity}
            description={weatherData.weather[0]?.description || 'No Data'}
          />
        )}
      </header>
    </div>
  );
};

export default App;

"use client";

import styles from './WeatherForecast.module.scss';

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

interface ForecastDayProps {
  date: string;
  items: ForecastItem[];
}

export const ForecastDay = ({ date, items }: ForecastDayProps) => {
  return (
    <div className={styles.forecastDay}>
      <h3>{date}</h3>
      <div className={styles.forecastItems}>
        {items.map((item, index) => (
          <div key={index} className={styles.forecastItem}>
            <div className={styles.time}>
              {new Date(item.dt * 1000).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <div className={styles.temp}>{Math.round(item.main.temp)}°C</div>
            <div className={styles.details}>
              <div>Humidity: {item.main.humidity}%</div>
              <div>Wind: {item.wind.speed} m/s</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
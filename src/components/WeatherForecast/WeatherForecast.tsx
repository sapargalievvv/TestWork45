"use client";

import { useWeatherForecast } from '@/hooks/useWeatherForecast';
import { useWeatherStore } from '@/store/weatherStore';
import { ForecastDay } from './ForecastDay';
import { groupForecastByDay } from '@/utils/forecastUtils';
import styles from './WeatherForecast.module.scss';

export const WeatherForecast = () => {
  const currentCity = useWeatherStore((state) => state.currentCity);
  const { forecast, loading, error } = useWeatherForecast();

  if (!currentCity) {
    return <div className={styles.placeholder}>Select a city to view forecast</div>;
  }

  if (loading) {
    return <div className={styles.loading}>Loading forecast...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!forecast) {
    return null;
  }

  const dailyForecast = groupForecastByDay(forecast);

  return (
    <div className={styles.forecastContainer}>
      <h1 className='text-center mb-4'>Weather forecast for {currentCity}</h1>
      <div className={styles.forecastGrid}>
        {Object.entries(dailyForecast).map(([date, items]) => (
          <ForecastDay key={date} date={date} items={items} />
        ))}
      </div>
    </div>
  );
}; 
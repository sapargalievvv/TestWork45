"use client";

import { useCurrentWeather } from '@/hooks/useCurrentWeather';
import { useWeatherStore } from '@/store/weatherStore';
import styles from './WeatherCard.module.scss';

export const WeatherCard = () => {
  const currentCity = useWeatherStore((state) => state.currentCity);
  const { favoriteCities, addFavoriteCity, removeFavoriteCity } = useWeatherStore();
  const { weather, loading, error } = useCurrentWeather();

  const isFavorite = currentCity ? favoriteCities.includes(currentCity) : false;

  const handleToggleFavorite = () => {
    if (currentCity) {
      if (isFavorite) {
        removeFavoriteCity(currentCity);
      } else {
        addFavoriteCity(currentCity);
      }
    }
  };

  if (!currentCity) {
    return <div className={styles.placeholder}>Введите город для поиска</div>;
  }

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className={styles.weatherCard}>
      <div className={styles.cardHeader}>
        <h2>{weather.name}</h2>
        <button
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
          onClick={handleToggleFavorite}
          title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.temperature}>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <span>{Math.round(weather.main.temp)}°C</span>
        </div>
        <div className={styles.details}>
          <p>Влажность: {weather.main.humidity}%</p>
          <p>Давление: {weather.main.pressure} hPa</p>
          <p>Скорость ветра: {weather.wind.speed} м/с</p>
          <p className={styles.description}>{weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}; 
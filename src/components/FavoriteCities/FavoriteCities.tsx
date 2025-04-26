"use client";

import { useWeatherStore } from '@/store/weatherStore';
import { useFavoriteCitiesWeather } from '@/hooks/useFavoriteCitiesWeather';
import { FavoriteCityCard } from './FavoriteCityCard';
import styles from './FavoriteCities.module.scss';

export const FavoriteCities = () => {
  const { favoriteCities, removeFavoriteCity, setCurrentCity } = useWeatherStore();
  const { favoriteCitiesWeather, loading, error } = useFavoriteCitiesWeather(favoriteCities);

  if (loading) {
    return <div className={styles.loading}>Загрузка избранных городов...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (favoriteCities.length === 0) {
    return <div className={styles.placeholder}>Нет избранных городов</div>;
  }

  return (
    <div className={styles.favoriteCities}>
      <h2>Избранные города</h2>
      <div className={styles.citiesGrid}>
        {favoriteCitiesWeather.map((weather) => (
          <FavoriteCityCard
            key={weather.city}
            {...weather}
            onRemove={removeFavoriteCity}
            onSelect={setCurrentCity}
          />
        ))}
      </div>
    </div>
  );
}; 
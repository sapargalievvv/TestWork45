import { useEffect, useState } from 'react';
import { getCurrentWeather } from '@/lib/api';

interface FavoriteCityWeather {
  city: string;
  temp: number;
  description: string;
  icon: string;
}

export const useFavoriteCitiesWeather = (favoriteCities: string[]) => {
  const [favoriteCitiesWeather, setFavoriteCitiesWeather] = useState<FavoriteCityWeather[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (favoriteCities.length > 0) {
      setLoading(true);
      setError(null);
      Promise.all(
        favoriteCities.map((city) =>
          getCurrentWeather(city)
            .then((data) => ({
              city,
              temp: Math.round(data.main.temp),
              description: data.weather[0].description,
              icon: data.weather[0].icon,
            }))
            .catch(() => null)
        )
      )
        .then((results) => {
          setFavoriteCitiesWeather(results.filter((result): result is FavoriteCityWeather => result !== null));
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to load weather data');
          setLoading(false);
        });
    } else {
      setFavoriteCitiesWeather([]);
    }
  }, [favoriteCities]);

  return { favoriteCitiesWeather, loading, error };
}; 
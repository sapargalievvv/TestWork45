"use client";

import { useState, useEffect } from 'react';
import { getCurrentWeather } from '@/lib/api';
import { useWeatherStore } from '@/store/weatherStore';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export const useCurrentWeather = () => {
  const currentCity = useWeatherStore((state) => state.currentCity);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (currentCity) {
      setLoading(true);
      setError(null);
      getCurrentWeather(currentCity)
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to get weather data');
          setLoading(false);
        });
    }
  }, [currentCity]);

  return { weather, loading, error };
}; 
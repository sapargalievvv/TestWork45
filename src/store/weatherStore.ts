"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WeatherState {
  currentCity: string;
  favoriteCities: string[];
  setCurrentCity: (city: string) => void;
  addFavoriteCity: (city: string) => void;
  removeFavoriteCity: (city: string) => void;
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      currentCity: '',
      favoriteCities: [],
      setCurrentCity: (city) => set({ currentCity: city }),
      addFavoriteCity: (city) =>
        set((state) => ({
          favoriteCities: [...new Set([...state.favoriteCities, city])],
        })),
      removeFavoriteCity: (city) =>
        set((state) => ({
          favoriteCities: state.favoriteCities.filter((c) => c !== city),
        })),
    }),
    {
      name: 'weather-storage',
    }
  )
); 
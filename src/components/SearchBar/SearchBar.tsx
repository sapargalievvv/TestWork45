"use client";

import { useState } from 'react';
import { useWeatherStore } from '@/store/weatherStore';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const setCurrentCity = useWeatherStore((state) => state.setCurrentCity);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentCity(searchQuery.trim());
      setSearchQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}; 
import styles from './FavoriteCities.module.scss';

interface FavoriteCityCardProps {
  city: string;
  temp: number;
  description: string;
  icon: string;
  onRemove: (city: string) => void;
  onSelect: (city: string) => void;
}

export const FavoriteCityCard = ({
  city,
  temp,
  description,
  icon,
  onRemove,
  onSelect,
}: FavoriteCityCardProps) => {
  return (
    <div className={styles.cityCard}>
      <div className={styles.cityHeader}>
        <h3 onClick={() => onSelect(city)}>{city}</h3>
        <button
          className={styles.removeButton}
          onClick={() => onRemove(city)}
          title="Remove from favorites"
        >
          ×
        </button>
      </div>
      <div className={styles.weatherInfo}>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
        />
        <div className={styles.temp}>{temp}°C</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}; 
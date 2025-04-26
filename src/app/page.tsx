import { SearchBar } from '@/components/SearchBar/SearchBar';
import { WeatherCard } from '@/components/WeatherCard/WeatherCard';

export default function Home() {
  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Next Weather App by Sapargaliyev Bektas</h1>
      <SearchBar />
      <WeatherCard />
    </main>
  );
}

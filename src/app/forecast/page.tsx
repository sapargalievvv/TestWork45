import { WeatherForecast } from '@/components/WeatherForecast/WeatherForecast';

export default function ForecastPage() {
  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Прогноз погоды</h1>
      <WeatherForecast />
    </main>
  );
} 
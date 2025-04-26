import { ForecastResponse, ForecastItem } from '@/types/weather';

interface DailyForecast {
    [key: string]: ForecastItem[];
}

export const groupForecastByDay = (forecast: ForecastResponse): DailyForecast => {
    return forecast.list.reduce(
        (acc: DailyForecast, item: ForecastItem) => {
            const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
            });

            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(item);
            return acc;
        },
        {}
    );
};

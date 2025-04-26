import { ForecastItem, ForecastResponse } from "@/types/weather";

interface DailyForecast {
    [key: string]: ForecastItem[];
}

export const formatDateTime = (dt: number) => {
    return new Date(dt * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
};

export const groupForecastByDay = (
    forecast: ForecastResponse
): DailyForecast => {
    return forecast.list.reduce((acc: DailyForecast, item: ForecastItem) => {
        const date = formatDateTime(item.dt);

        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {});
};

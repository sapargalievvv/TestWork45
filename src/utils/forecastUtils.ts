export const groupForecastByDay = (
    forecast: ForecastResponse["list"]
): DailyForecast => {
    return forecast.list.reduce(
        (acc: DailyForecast, item: ForecastResponse["list"][0]) => {
            const date = new Date(item.dt * 1000).toLocaleDateString("ru-RU", {
                weekday: "long",
                day: "numeric",
                month: "long",
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

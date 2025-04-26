"use client";

import { useState, useEffect } from "react";
import { getForecast } from "@/lib/api";
import { useWeatherStore } from "@/store/weatherStore";
import { ForecastResponse } from "@/types/weather";

export const useWeatherForecast = () => {
    const currentCity = useWeatherStore((state) => state.currentCity);
    const [forecast, setForecast] = useState<ForecastResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (currentCity) {
            setLoading(true);
            setError(null);
            getForecast(currentCity)
                .then((data) => {
                    setForecast(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Failed to get weather forecast");
                    setLoading(false);
                });
        }
    }, [currentCity]);

    return { forecast, loading, error };
};

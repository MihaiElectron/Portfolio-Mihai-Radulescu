"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  city: string;
  temperature: number;
  windspeed: number;
  weathercode: number;
}

interface IpApiData {
  city?: string;
  latitude?: number;
  longitude?: number;
}

interface TimeData {
  hours: string;
  minutes: string;
  seconds: string;
}

const DEFAULT_LOCATION = {
  city: "PARIS",
  latitude: 48.8566,
  longitude: 2.3522,
};

export default function HeroWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [time, setTime] = useState<TimeData>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  function getWeatherLabel(code: number) {
    if (code === -1) return "OFFLINE";
    if (code === 0 || code === 1) return "CLEAR";
    if (code === 2) return "PARTLY";
    if (code === 3) return "CLOUDY";
    if ([45, 48].includes(code)) return "FOG";
    if ([51, 53, 55, 61, 63, 65].includes(code)) return "RAIN";
    if ([71, 73, 75].includes(code)) return "SNOW";

    return "UNKNOWN";
  }

  useEffect(() => {
    async function loadWeather() {
      try {
        let city = DEFAULT_LOCATION.city;
        let latitude = DEFAULT_LOCATION.latitude;
        let longitude = DEFAULT_LOCATION.longitude;

        try {
          const ipRes = await fetch("https://ipapi.co/json/");

          if (ipRes.ok) {
            const ipData = (await ipRes.json()) as IpApiData;

            city = ipData.city ?? DEFAULT_LOCATION.city;
            latitude = ipData.latitude ?? DEFAULT_LOCATION.latitude;
            longitude = ipData.longitude ?? DEFAULT_LOCATION.longitude;
          }
        } catch {
          console.warn("Localisation indisponible, fallback sur Paris.");
        }

        const weatherRes = await fetch(
          `/api/weather?city=${encodeURIComponent(
            city
          )}&latitude=${latitude}&longitude=${longitude}`
        );

        if (!weatherRes.ok) {
          throw new Error("Météo indisponible");
        }

        const weatherData = (await weatherRes.json()) as WeatherData;

        setWeather(weatherData);
      } catch (error) {
        console.error("Erreur météo :", error);

        setWeather({
          city: "METEO OFFLINE",
          temperature: 0,
          windspeed: 0,
          weathercode: -1,
        });
      }
    }

    loadWeather();
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime({
        hours: String(now.getHours()).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
      });
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-weather">
      <div className="hero-weather__top">
        <p className="hero-weather__label">HEURE LOCALE UTC+1</p>

        <div className="hero-weather__live">
          <span className="hero-weather__live-dot"></span>
          LIVE
        </div>
      </div>

      <div className="hero-weather__center">
        <p className="hero-weather__time">
          <span>{time.hours}</span>

          <span className="hero-weather__separator">
            <span></span>
            <span></span>
          </span>

          <span>{time.minutes}</span>

          <span className="hero-weather__seconds">{time.seconds}</span>
        </p>

        {weather ? (
          <p className="hero-weather__city">{weather.city}</p>
        ) : (
          <p className="hero-weather__loading">Chargement météo...</p>
        )}
      </div>

      <div className="hero-weather__bottom">
        <div className="hero-weather__item">
          <span className="hero-weather__item-label">MÉTÉO</span>

          <span className="hero-weather__item-value">
            {weather ? getWeatherLabel(weather.weathercode) : "--"}
          </span>
        </div>

        <div className="hero-weather__item">
          <span className="hero-weather__item-label">VENT</span>

          <span className="hero-weather__item-value">
            {weather ? `${Math.round(weather.windspeed)} KM/H` : "--"}
          </span>
        </div>

        <div className="hero-weather__item">
          <span className="hero-weather__item-label">TEMP</span>

          <span className="hero-weather__item-value">
            {weather ? `${Math.round(weather.temperature)}°` : "--"}
          </span>
        </div>
      </div>
    </div>
  );
}
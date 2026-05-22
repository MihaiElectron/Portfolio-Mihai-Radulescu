"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  city: string;
  temperature: number;
  windspeed: number;
  weathercode: number;
}

interface TimeData {
  hours: string;
  minutes: string;
  seconds: string;
}

export default function HeroWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [time, setTime] = useState<TimeData>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  function getWeatherLabel(code: number) {
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
        const ipRes = await fetch("https://ipapi.co/json/");
        const ipData = await ipRes.json();

        const { city, latitude, longitude } = ipData;

        const meteoRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        const meteoData = await meteoRes.json();

        setWeather({
          city,
          temperature: meteoData.current_weather.temperature,
          windspeed: meteoData.current_weather.windspeed,
          weathercode: meteoData.current_weather.weathercode,
        });
      } catch (error) {
        console.error("Erreur météo :", error);
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
      {!weather && (
        <p className="hero-weather__loading">Chargement météo...</p>
      )}

      {weather && (
        <>
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

            <p className="hero-weather__city">{weather.city}</p>
          </div>

          <div className="hero-weather__bottom">
            <div className="hero-weather__item">
              <span className="hero-weather__item-label">MÉTÉO</span>

              <span className="hero-weather__item-value">
                {getWeatherLabel(weather.weathercode)}
              </span>
            </div>

            <div className="hero-weather__item">
              <span className="hero-weather__item-label">VENT</span>

              <span className="hero-weather__item-value">
                {Math.round(weather.windspeed)} KM/H
              </span>
            </div>

            <div className="hero-weather__item">
              <span className="hero-weather__item-label">TEMP</span>

              <span className="hero-weather__item-value">
                {Math.round(weather.temperature)}°
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
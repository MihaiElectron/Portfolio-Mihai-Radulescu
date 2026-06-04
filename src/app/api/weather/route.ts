import { NextResponse } from "next/server";

interface OpenMeteoResponse {
  current_weather?: {
    temperature: number;
    windspeed: number;
    weathercode: number;
  };
}

interface WeatherApiResponse {
  location?: {
    name?: string;
  };
  current?: {
    temp_c?: number;
    wind_kph?: number;
    condition?: {
      code?: number;
    };
  };
}

/**
 * Convertit les codes météo WeatherAPI vers les codes Open-Meteo
 * utilisés par le composant HeroWeather.
 *
 * Le code -1 est réservé aux erreurs complètes de récupération météo.
 * Si un code WeatherAPI n'est pas référencé, on le classe en CLOUDY
 * afin d'éviter un affichage OFFLINE alors que les données existent.
 */
function convertWeatherApiCode(code: number) {
  if (code === 1000) return 0;
  if (code === 1003) return 2;
  if ([1006, 1009].includes(code)) return 3;
  if ([1030, 1135, 1147].includes(code)) return 45;

  if (
    [
      1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
      1198, 1201, 1240, 1243, 1246,
    ].includes(code)
  ) {
    return 61;
  }

  if (
    [
      1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
      1237, 1249, 1252, 1255, 1258, 1261, 1264,
    ].includes(code)
  ) {
    return 71;
  }

  return 3;
}

/**
 * Fournisseur météo principal.
 * Open-Meteo est utilisé en priorité car il ne nécessite pas de clé API.
 */
async function getOpenMeteoWeather(
  city: string,
  latitude: number,
  longitude: number
) {
  const meteoRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    {
      cache: "no-store",
    }
  );

  if (!meteoRes.ok) {
    throw new Error("Open-Meteo indisponible");
  }

  const meteoData = (await meteoRes.json()) as OpenMeteoResponse;

  if (!meteoData.current_weather) {
    throw new Error("Données Open-Meteo indisponibles");
  }

  return {
    city,
    temperature: meteoData.current_weather.temperature,
    windspeed: meteoData.current_weather.windspeed,
    weathercode: meteoData.current_weather.weathercode,
  };
}

/**
 * Fournisseur météo de secours.
 * WeatherAPI est appelé uniquement si Open-Meteo échoue.
 * La clé API reste côté serveur via process.env.WEATHER_API_KEY.
 */
async function getWeatherApiWeather(
  city: string,
  latitude: number,
  longitude: number
) {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("Clé WeatherAPI absente");
  }

  const weatherApiRes = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`,
    {
      cache: "no-store",
    }
  );

  if (!weatherApiRes.ok) {
    throw new Error("WeatherAPI indisponible");
  }

  const weatherApiData = (await weatherApiRes.json()) as WeatherApiResponse;

  if (!weatherApiData.current) {
    throw new Error("Données WeatherAPI indisponibles");
  }

  return {
    city: weatherApiData.location?.name ?? city,
    temperature: weatherApiData.current.temp_c ?? 0,
    windspeed: weatherApiData.current.wind_kph ?? 0,
    weathercode: convertWeatherApiCode(
      weatherApiData.current.condition?.code ?? -1
    ),
  };
}

/**
 * Route API météo.
 *
 * Les coordonnées sont fournies par le composant client après récupération
 * de la localisation approximative via ipapi.co.
 *
 * Stratégie :
 * 1. Open-Meteo est utilisé comme fournisseur principal.
 * 2. WeatherAPI prend le relais si Open-Meteo est indisponible.
 * 3. OFFLINE est retourné uniquement si les deux fournisseurs échouent.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const city = searchParams.get("city") ?? "LOCAL";
  const latitude = Number(searchParams.get("latitude"));
  const longitude = Number(searchParams.get("longitude"));

  if (!latitude || !longitude) {
    return NextResponse.json({
      city: "LOCALISATION INDISPONIBLE",
      temperature: 0,
      windspeed: 0,
      weathercode: -1,
    });
  }

  try {
    const openMeteoWeather = await getOpenMeteoWeather(
      city,
      latitude,
      longitude
    );

    return NextResponse.json(openMeteoWeather);
  } catch {
    try {
      const fallbackWeather = await getWeatherApiWeather(
        city,
        latitude,
        longitude
      );

      return NextResponse.json(fallbackWeather);
    } catch (error) {
      console.error("Erreur API météo :", error);

      return NextResponse.json({
        city: "METEO OFFLINE",
        temperature: 0,
        windspeed: 0,
        weathercode: -1,
      });
    }
  }
}
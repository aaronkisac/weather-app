export const API_KEY = "b1b15e88fa797225412429c1c50c122a1r";
export const currentWeather = {
  coord: {
    lon: -0.13,
    lat: 51.51,
  },
  weather: [
    {
      id: 721,
      main: "Haze",
      description: "haze",
      icon: "50n",
    },
  ],
  base: "stations",
  main: {
    temp: 7.05,
    feels_like: 3.06,
    temp_min: 6.11,
    temp_max: 8,
    pressure: 1016,
    humidity: 87,
  },
  visibility: 4600,
  wind: {
    speed: 4.1,
    deg: 100,
  },
  clouds: {
    all: 98,
  },
  dt: 1606525200,
  sys: {
    type: 1,
    id: 1414,
    country: "GB",
    sunrise: 1606549216,
    sunset: 1606579040,
  },
  timezone: 0,
  id: 2643743,
  name: "London",
  cod: 200,
};

export const forecastList = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1606532400,
      main: {
        temp: 7.29,
        feels_like: 4.03,
        temp_min: 7.29,
        temp_max: 7.6,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 84,
        temp_kf: -0.31,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 2.98,
        deg: 102,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-28 03:00:00",
    },
    {
      dt: 1606543200,
      main: {
        temp: 7.68,
        feels_like: 4.49,
        temp_min: 7.68,
        temp_max: 7.87,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 82,
        temp_kf: -0.19,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 2.89,
        deg: 105,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-28 06:00:00",
    },
    {
      dt: 1606554000,
      main: {
        temp: 8.07,
        feels_like: 5.16,
        temp_min: 8.07,
        temp_max: 8.14,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 84,
        temp_kf: -0.07,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.71,
        deg: 95,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-28 09:00:00",
    },
    {
      dt: 1606564800,
      main: {
        temp: 10.24,
        feels_like: 6.97,
        temp_min: 10.24,
        temp_max: 10.27,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 73,
        temp_kf: -0.03,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 3.25,
        deg: 93,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-28 12:00:00",
    },
    {
      dt: 1606575600,
      main: {
        temp: 10.19,
        feels_like: 7.01,
        temp_min: 10.19,
        temp_max: 10.19,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 3.05,
        deg: 88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-28 15:00:00",
    },
    {
      dt: 1606586400,
      main: {
        temp: 8.61,
        feels_like: 5.59,
        temp_min: 8.61,
        temp_max: 8.61,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 2.65,
        deg: 78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-28 18:00:00",
    },
    {
      dt: 1606597200,
      main: {
        temp: 7.87,
        feels_like: 5.41,
        temp_min: 7.87,
        temp_max: 7.87,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2,
        deg: 70,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-28 21:00:00",
    },
    {
      dt: 1606608000,
      main: {
        temp: 7.39,
        feels_like: 5.05,
        temp_min: 7.39,
        temp_max: 7.39,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.03,
        deg: 54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-29 00:00:00",
    },
    {
      dt: 1606618800,
      main: {
        temp: 6.95,
        feels_like: 4.77,
        temp_min: 6.95,
        temp_max: 6.95,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.82,
        deg: 47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-29 03:00:00",
    },
    {
      dt: 1606629600,
      main: {
        temp: 6.47,
        feels_like: 4,
        temp_min: 6.47,
        temp_max: 6.47,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.05,
        deg: 38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-29 06:00:00",
    },
    {
      dt: 1606640400,
      main: {
        temp: 6.74,
        feels_like: 4.16,
        temp_min: 6.74,
        temp_max: 6.74,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.95,
        deg: 47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-29 09:00:00",
    },
    {
      dt: 1606651200,
      main: {
        temp: 9.48,
        feels_like: 7.15,
        temp_min: 9.48,
        temp_max: 9.48,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.8,
        deg: 50,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-29 12:00:00",
    },
    {
      dt: 1606662000,
      main: {
        temp: 9.45,
        feels_like: 7.59,
        temp_min: 9.45,
        temp_max: 9.45,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.29,
        deg: 34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-29 15:00:00",
    },
    {
      dt: 1606672800,
      main: {
        temp: 7.88,
        feels_like: 6.17,
        temp_min: 7.88,
        temp_max: 7.88,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.13,
        deg: 23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-29 18:00:00",
    },
    {
      dt: 1606683600,
      main: {
        temp: 7.17,
        feels_like: 5.86,
        temp_min: 7.17,
        temp_max: 7.17,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1025,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.45,
        deg: 55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-29 21:00:00",
    },
    {
      dt: 1606694400,
      main: {
        temp: 6.67,
        feels_like: 5.38,
        temp_min: 6.67,
        temp_max: 6.67,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1025,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.32,
        deg: 246,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-30 00:00:00",
    },
    {
      dt: 1606705200,
      main: {
        temp: 6.24,
        feels_like: 4.1,
        temp_min: 6.24,
        temp_max: 6.24,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1024,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.42,
        deg: 249,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-30 03:00:00",
    },
    {
      dt: 1606716000,
      main: {
        temp: 5.87,
        feels_like: 3.21,
        temp_min: 5.87,
        temp_max: 5.87,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1024,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 1.79,
        deg: 256,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-30 06:00:00",
    },
    {
      dt: 1606726800,
      main: {
        temp: 6.4,
        feels_like: 3.6,
        temp_min: 6.4,
        temp_max: 6.4,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1025,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 1.86,
        deg: 262,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-30 09:00:00",
    },
    {
      dt: 1606737600,
      main: {
        temp: 8.69,
        feels_like: 5.39,
        temp_min: 8.69,
        temp_max: 8.69,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1024,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.7,
        deg: 247,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-30 12:00:00",
    },
    {
      dt: 1606748400,
      main: {
        temp: 8.96,
        feels_like: 5.77,
        temp_min: 8.96,
        temp_max: 8.96,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.94,
        deg: 260,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-11-30 15:00:00",
    },
    {
      dt: 1606759200,
      main: {
        temp: 8.81,
        feels_like: 5.8,
        temp_min: 8.81,
        temp_max: 8.81,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.8,
        deg: 274,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-30 18:00:00",
    },
    {
      dt: 1606770000,
      main: {
        temp: 9.09,
        feels_like: 5.14,
        temp_min: 9.09,
        temp_max: 9.09,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.23,
        deg: 275,
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-11-30 21:00:00",
    },
    {
      dt: 1606780800,
      main: {
        temp: 9.08,
        feels_like: 5.31,
        temp_min: 9.08,
        temp_max: 9.08,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.18,
        deg: 287,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-01 00:00:00",
    },
    {
      dt: 1606791600,
      main: {
        temp: 9.38,
        feels_like: 6.21,
        temp_min: 9.38,
        temp_max: 9.38,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.64,
        deg: 302,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-01 03:00:00",
    },
    {
      dt: 1606802400,
      main: {
        temp: 8.98,
        feels_like: 6.83,
        temp_min: 8.98,
        temp_max: 8.98,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2,
        deg: 7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-01 06:00:00",
    },
    {
      dt: 1606813200,
      main: {
        temp: 8.42,
        feels_like: 6.08,
        temp_min: 8.42,
        temp_max: 8.42,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.37,
        deg: 356,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-12-01 09:00:00",
    },
    {
      dt: 1606824000,
      main: {
        temp: 9.55,
        feels_like: 6.64,
        temp_min: 9.55,
        temp_max: 9.55,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1024,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.7,
        deg: 9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-12-01 12:00:00",
    },
    {
      dt: 1606834800,
      main: {
        temp: 9.22,
        feels_like: 6.5,
        temp_min: 9.22,
        temp_max: 9.22,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.57,
        deg: 341,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-12-01 15:00:00",
    },
    {
      dt: 1606845600,
      main: {
        temp: 8.16,
        feels_like: 6.05,
        temp_min: 8.16,
        temp_max: 8.16,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 0.98,
        deg: 336,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-01 18:00:00",
    },
    {
      dt: 1606856400,
      main: {
        temp: 8.5,
        feels_like: 6.99,
        temp_min: 8.5,
        temp_max: 8.5,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.36,
        deg: 197,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-01 21:00:00",
    },
    {
      dt: 1606867200,
      main: {
        temp: 8.45,
        feels_like: 6.82,
        temp_min: 8.45,
        temp_max: 8.45,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.94,
        deg: 283,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-02 00:00:00",
    },
    {
      dt: 1606878000,
      main: {
        temp: 7.74,
        feels_like: 5.59,
        temp_min: 7.74,
        temp_max: 7.74,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.87,
        deg: 298,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-02 03:00:00",
    },
    {
      dt: 1606888800,
      main: {
        temp: 6.89,
        feels_like: 4.8,
        temp_min: 6.89,
        temp_max: 6.89,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1020,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 1.58,
        deg: 300,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-02 06:00:00",
    },
    {
      dt: 1606899600,
      main: {
        temp: 6.87,
        feels_like: 4.92,
        temp_min: 6.87,
        temp_max: 6.87,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 1.28,
        deg: 293,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-12-02 09:00:00",
    },
    {
      dt: 1606910400,
      main: {
        temp: 8.68,
        feels_like: 6.39,
        temp_min: 8.68,
        temp_max: 8.68,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 1.68,
        deg: 253,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-12-02 12:00:00",
    },
    {
      dt: 1606921200,
      main: {
        temp: 8.55,
        feels_like: 6.53,
        temp_min: 8.55,
        temp_max: 8.55,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1015,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.36,
        deg: 276,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-12-02 15:00:00",
    },
    {
      dt: 1606932000,
      main: {
        temp: 8.54,
        feels_like: 6.57,
        temp_min: 8.54,
        temp_max: 8.54,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1014,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.24,
        deg: 236,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-02 18:00:00",
    },
    {
      dt: 1606942800,
      main: {
        temp: 7.29,
        feels_like: 5.25,
        temp_min: 7.29,
        temp_max: 7.29,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1012,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 1.29,
        deg: 243,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-02 21:00:00",
    },
    {
      dt: 1606953600,
      main: {
        temp: 6.94,
        feels_like: 4.49,
        temp_min: 6.94,
        temp_max: 6.94,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1011,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 1.78,
        deg: 229,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-12-03 00:00:00",
    },
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lat: 51.5085,
      lon: -0.1257,
    },
    country: "GB",
    population: 1000000,
    timezone: 0,
    sunrise: 1606549215,
    sunset: 1606579040,
  },
};

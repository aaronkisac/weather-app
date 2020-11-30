export const item = {
  city: { id: 2643743, name: "London" },
  currentWeather: { temp: 6.86, time: "2020-11-30 00:58:55" },
  foreCastList: [
    {
      id: 1606770000,
      temp_max: 9.43,
      time: "2020-11-30 21:00:00",
      weather: {
        description: "light rain",
        icon: "10n",
        id: 500,
        main: "Rain",
      },
    },
    {
      id: 1606780800,
      temp_max: 7.95,
      time: "2020-12-01 00:00:00",
      weather: {
        description: "broken clouds",
        icon: "04n",
        id: 803,
        main: "Clouds",
      },
    },
    {
      id: 1606921200,
      temp_max: 6.21,
      time: "2020-12-02 15:00:00",
      weather: {
        description: "broken clouds",
        icon: "04d",
        id: 803,
        main: "Clouds",
      },
    },
    {
      id: 1607029200,
      temp_max: 8,
      time: "2020-12-03 21:00:00",
      weather: {
        description: "light rain",
        icon: "10n",
        id: 500,
        main: "Rain",
      },
    },
    {
      id: 1607040000,
      temp_max: 7.98,
      time: "2020-12-04 00:00:00",
      weather: {
        description: "light rain",
        icon: "10n",
        id: 500,
        main: "Rain",
      },
    },
  ],
};

export const forecastFiveDaysData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1606705200,
      main: {
        temp: 6.25,
        feels_like: 3.76,
        temp_min: 5.9,
        temp_max: 6.25,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1024,
        humidity: 92,
        temp_kf: 0.35,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 7 },
      wind: { speed: 1.96, deg: 255 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-11-30 03:00:00",
    },
    {
      dt: 1606716000,
      main: {
        temp: 5.95,
        feels_like: 3.24,
        temp_min: 5.77,
        temp_max: 5.95,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 89,
        temp_kf: 0.18,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 29 },
      wind: { speed: 2.06, deg: 252 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-11-30 06:00:00",
    },
    {
      dt: 1606726800,
      main: {
        temp: 6.22,
        feels_like: 2.99,
        temp_min: 6.19,
        temp_max: 6.22,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 86,
        temp_kf: 0.03,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: { all: 18 },
      wind: { speed: 2.75, deg: 254 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-11-30 09:00:00",
    },
    {
      dt: 1606737600,
      main: {
        temp: 8.16,
        feels_like: 4.87,
        temp_min: 8.16,
        temp_max: 8.17,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 79,
        temp_kf: -0.01,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 57 },
      wind: { speed: 3.02, deg: 248 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-11-30 12:00:00",
    },
    {
      dt: 1606748400,
      main: {
        temp: 8.89,
        feels_like: 5.41,
        temp_min: 8.89,
        temp_max: 8.89,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 78,
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
      clouds: { all: 100 },
      wind: { speed: 3.44, deg: 264 },
      visibility: 10000,
      pop: 0.06,
      sys: { pod: "d" },
      dt_txt: "2020-11-30 15:00:00",
    },
    {
      dt: 1606759200,
      main: {
        temp: 9.14,
        feels_like: 4.54,
        temp_min: 9.14,
        temp_max: 9.14,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.38, deg: 278 },
      visibility: 10000,
      pop: 0.4,
      rain: { "3h": 0.13 },
      sys: { pod: "n" },
      dt_txt: "2020-11-30 18:00:00",
    },
    {
      dt: 1606770000,
      main: {
        temp: 9.72,
        feels_like: 5,
        temp_min: 9.72,
        temp_max: 9.72,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 98 },
      wind: { speed: 5.73, deg: 298 },
      visibility: 10000,
      pop: 0.44,
      rain: { "3h": 0.28 },
      sys: { pod: "n" },
      dt_txt: "2020-11-30 21:00:00",
    },
    {
      dt: 1606780800,
      main: {
        temp: 8.07,
        feels_like: 3.41,
        temp_min: 8.07,
        temp_max: 8.07,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1020,
        humidity: 74,
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
      clouds: { all: 85 },
      wind: { speed: 4.7, deg: 351 },
      visibility: 10000,
      pop: 0.24,
      sys: { pod: "n" },
      dt_txt: "2020-12-01 00:00:00",
    },
    {
      dt: 1606791600,
      main: {
        temp: 6.35,
        feels_like: 0.64,
        temp_min: 6.35,
        temp_max: 6.35,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1021,
        humidity: 65,
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
      clouds: { all: 96 },
      wind: { speed: 5.37, deg: 340 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-01 03:00:00",
    },
    {
      dt: 1606802400,
      main: {
        temp: 5.79,
        feels_like: 0.23,
        temp_min: 5.79,
        temp_max: 5.79,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 69,
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
      clouds: { all: 98 },
      wind: { speed: 5.23, deg: 343 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-01 06:00:00",
    },
    {
      dt: 1606813200,
      main: {
        temp: 5.54,
        feels_like: -0.02,
        temp_min: 5.54,
        temp_max: 5.54,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
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
      clouds: { all: 100 },
      wind: { speed: 5.21, deg: 344 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-12-01 09:00:00",
    },
    {
      dt: 1606824000,
      main: {
        temp: 7.17,
        feels_like: 1.51,
        temp_min: 7.17,
        temp_max: 7.17,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 75 },
      wind: { speed: 5.43, deg: 340 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-12-01 12:00:00",
    },
    {
      dt: 1606834800,
      main: {
        temp: 6.85,
        feels_like: 1.85,
        temp_min: 6.85,
        temp_max: 6.85,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 71,
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
      clouds: { all: 95 },
      wind: { speed: 4.75, deg: 348 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-12-01 15:00:00",
    },
    {
      dt: 1606845600,
      main: {
        temp: 5.53,
        feels_like: 1.19,
        temp_min: 5.53,
        temp_max: 5.53,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1022,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 70 },
      wind: { speed: 3.73, deg: 351 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-01 18:00:00",
    },
    {
      dt: 1606856400,
      main: {
        temp: 4.85,
        feels_like: 0.24,
        temp_min: 4.85,
        temp_max: 4.85,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 79 },
      wind: { speed: 4.08, deg: 349 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-01 21:00:00",
    },
    {
      dt: 1606867200,
      main: {
        temp: 4.32,
        feels_like: 0.11,
        temp_min: 4.32,
        temp_max: 4.32,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1021,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 70 },
      wind: { speed: 3.39, deg: 342 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-02 00:00:00",
    },
    {
      dt: 1606878000,
      main: {
        temp: 4.73,
        feels_like: 0.66,
        temp_min: 4.73,
        temp_max: 4.73,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 84 },
      wind: { speed: 3.21, deg: 330 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-02 03:00:00",
    },
    {
      dt: 1606888800,
      main: {
        temp: 4.63,
        feels_like: 1.09,
        temp_min: 4.63,
        temp_max: 4.63,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 76,
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
      clouds: { all: 89 },
      wind: { speed: 2.38, deg: 322 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-02 06:00:00",
    },
    {
      dt: 1606899600,
      main: {
        temp: 4.62,
        feels_like: 1.3,
        temp_min: 4.62,
        temp_max: 4.62,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1016,
        humidity: 74,
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
      clouds: { all: 95 },
      wind: { speed: 1.99, deg: 314 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-12-02 09:00:00",
    },
    {
      dt: 1606910400,
      main: {
        temp: 6.36,
        feels_like: 3.37,
        temp_min: 6.36,
        temp_max: 6.36,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
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
      clouds: { all: 97 },
      wind: { speed: 1.36, deg: 276 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-12-02 12:00:00",
    },
    {
      dt: 1606921200,
      main: {
        temp: 6.44,
        feels_like: 2.87,
        temp_min: 6.44,
        temp_max: 6.44,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1012,
        humidity: 61,
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
      clouds: { all: 100 },
      wind: { speed: 2.16, deg: 243 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-12-02 15:00:00",
    },
    {
      dt: 1606932000,
      main: {
        temp: 6.01,
        feels_like: 2.35,
        temp_min: 6.01,
        temp_max: 6.01,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1011,
        humidity: 67,
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
      clouds: { all: 99 },
      wind: { speed: 2.47, deg: 250 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-02 18:00:00",
    },
    {
      dt: 1606942800,
      main: {
        temp: 6.3,
        feels_like: 3.19,
        temp_min: 6.3,
        temp_max: 6.3,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 85,
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
      clouds: { all: 87 },
      wind: { speed: 2.55, deg: 301 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-02 21:00:00",
    },
    {
      dt: 1606953600,
      main: {
        temp: 5.93,
        feels_like: 2.65,
        temp_min: 5.93,
        temp_max: 5.93,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 67,
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
      clouds: { all: 91 },
      wind: { speed: 1.91, deg: 302 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-03 00:00:00",
    },
    {
      dt: 1606964400,
      main: {
        temp: 4.86,
        feels_like: 1.16,
        temp_min: 4.86,
        temp_max: 4.86,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 74,
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
      clouds: { all: 100 },
      wind: { speed: 2.58, deg: 263 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-03 03:00:00",
    },
    {
      dt: 1606975200,
      main: {
        temp: 4.39,
        feels_like: 0.97,
        temp_min: 4.39,
        temp_max: 4.39,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1002,
        humidity: 73,
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
      clouds: { all: 100 },
      wind: { speed: 2.04, deg: 185 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-03 06:00:00",
    },
    {
      dt: 1606986000,
      main: {
        temp: 4.91,
        feels_like: 1.23,
        temp_min: 4.91,
        temp_max: 4.91,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 999,
        humidity: 69,
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
      clouds: { all: 100 },
      wind: { speed: 2.36, deg: 170 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2020-12-03 09:00:00",
    },
    {
      dt: 1606996800,
      main: {
        temp: 6.07,
        feels_like: 1.33,
        temp_min: 6.07,
        temp_max: 6.07,
        pressure: 998,
        sea_level: 998,
        grnd_level: 995,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.33, deg: 157 },
      visibility: 10000,
      pop: 0.36,
      rain: { "3h": 0.63 },
      sys: { pod: "d" },
      dt_txt: "2020-12-03 12:00:00",
    },
    {
      dt: 1607007600,
      main: {
        temp: 6.52,
        feels_like: 1.39,
        temp_min: 6.52,
        temp_max: 6.52,
        pressure: 992,
        sea_level: 992,
        grnd_level: 989,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.36, deg: 162 },
      visibility: 10000,
      pop: 0.98,
      rain: { "3h": 2.55 },
      sys: { pod: "d" },
      dt_txt: "2020-12-03 15:00:00",
    },
    {
      dt: 1607018400,
      main: {
        temp: 6.58,
        feels_like: 1.31,
        temp_min: 6.58,
        temp_max: 6.58,
        pressure: 988,
        sea_level: 988,
        grnd_level: 985,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.62, deg: 166 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 2.22 },
      sys: { pod: "n" },
      dt_txt: "2020-12-03 18:00:00",
    },
    {
      dt: 1607029200,
      main: {
        temp: 7.54,
        feels_like: 2.45,
        temp_min: 7.54,
        temp_max: 7.54,
        pressure: 983,
        sea_level: 983,
        grnd_level: 981,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.37, deg: 156 },
      visibility: 10000,
      pop: 0.62,
      rain: { "3h": 0.19 },
      sys: { pod: "n" },
      dt_txt: "2020-12-03 21:00:00",
    },
    {
      dt: 1607040000,
      main: {
        temp: 7.5,
        feels_like: 1.18,
        temp_min: 7.5,
        temp_max: 7.5,
        pressure: 979,
        sea_level: 979,
        grnd_level: 976,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.22, deg: 150 },
      visibility: 10000,
      pop: 0.74,
      rain: { "3h": 0.76 },
      sys: { pod: "n" },
      dt_txt: "2020-12-04 00:00:00",
    },
    {
      dt: 1607050800,
      main: {
        temp: 7.62,
        feels_like: 2.42,
        temp_min: 7.62,
        temp_max: 7.62,
        pressure: 975,
        sea_level: 975,
        grnd_level: 973,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.65, deg: 135 },
      visibility: 10000,
      pop: 0.82,
      rain: { "3h": 0.94 },
      sys: { pod: "n" },
      dt_txt: "2020-12-04 03:00:00",
    },
    {
      dt: 1607061600,
      main: {
        temp: 7.99,
        feels_like: 3.37,
        temp_min: 7.99,
        temp_max: 7.99,
        pressure: 973,
        sea_level: 973,
        grnd_level: 970,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.82, deg: 137 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 2.15 },
      sys: { pod: "n" },
      dt_txt: "2020-12-04 06:00:00",
    },
    {
      dt: 1607072400,
      main: {
        temp: 6.45,
        feels_like: 0.55,
        temp_min: 6.45,
        temp_max: 6.45,
        pressure: 973,
        sea_level: 973,
        grnd_level: 970,
        humidity: 77,
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
      clouds: { all: 99 },
      wind: { speed: 6.21, deg: 174 },
      visibility: 10000,
      pop: 0.6,
      sys: { pod: "d" },
      dt_txt: "2020-12-04 09:00:00",
    },
    {
      dt: 1607083200,
      main: {
        temp: 6.75,
        feels_like: 2.07,
        temp_min: 6.75,
        temp_max: 6.75,
        pressure: 973,
        sea_level: 973,
        grnd_level: 971,
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
      clouds: { all: 97 },
      wind: { speed: 4.22, deg: 200 },
      visibility: 10000,
      pop: 0.44,
      sys: { pod: "d" },
      dt_txt: "2020-12-04 12:00:00",
    },
    {
      dt: 1607094000,
      main: {
        temp: 6.64,
        feels_like: 2.22,
        temp_min: 6.64,
        temp_max: 6.64,
        pressure: 974,
        sea_level: 974,
        grnd_level: 971,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.96, deg: 202 },
      visibility: 10000,
      pop: 0.26,
      rain: { "3h": 0.12 },
      sys: { pod: "d" },
      dt_txt: "2020-12-04 15:00:00",
    },
    {
      dt: 1607104800,
      main: {
        temp: 5.47,
        feels_like: 0.34,
        temp_min: 5.47,
        temp_max: 5.47,
        pressure: 976,
        sea_level: 976,
        grnd_level: 973,
        humidity: 70,
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
      clouds: { all: 88 },
      wind: { speed: 4.59, deg: 200 },
      visibility: 10000,
      pop: 0.18,
      sys: { pod: "n" },
      dt_txt: "2020-12-04 18:00:00",
    },
    {
      dt: 1607115600,
      main: {
        temp: 5.31,
        feels_like: 1.49,
        temp_min: 5.31,
        temp_max: 5.31,
        pressure: 978,
        sea_level: 978,
        grnd_level: 976,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 35 },
      wind: { speed: 2.77, deg: 156 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2020-12-04 21:00:00",
    },
    {
      dt: 1607126400,
      main: {
        temp: 4.99,
        feels_like: 0.94,
        temp_min: 4.99,
        temp_max: 4.99,
        pressure: 980,
        sea_level: 980,
        grnd_level: 978,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      clouds: { all: 18 },
      wind: { speed: 3.15, deg: 145 },
      visibility: 10000,
      pop: 0.1,
      sys: { pod: "n" },
      dt_txt: "2020-12-05 00:00:00",
    },
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: { lat: 51.5085, lon: -0.1257 },
    country: "GB",
    population: 1000000,
    timezone: 0,
    sunrise: 1606722188,
    sunset: 1606751752,
  },
};

import React, { useEffect, useState, useCallback } from "react";
import moment from "moment";
import CityHeader from "../components/CityHeader/CityHeader";
import ForecastList from "../components/ForecastList/ForecastList";
import { StyledCityTemperatureWrapper } from "./CityTemperature.styles";

const CityTemperature = () => {
  const [weatherList, setWeatherList] = useState({
    city: {
      name: "London",
    },
    currentWeather: {},
    foreCastList: [],
  });

  const getFiveDaysWeather = (weathersList, numberOfDays = 5) => {
    let list = [];

    for (let index = 0; index < numberOfDays; index++) {
      const tempList = weathersList.list
        .filter((item) => {
          return (
            moment(item.dt_txt).format("DD") ===
            moment().add(index, "days").format("DD")
          );
        })
        .reduce((a, b) => (a.main.temp > b.main.temp ? a : b));

      list.push({
        id: tempList?.dt,
        temp_max: tempList?.main?.temp,
        time: tempList?.dt_txt,
        weather: {
          description: tempList?.weather[0]?.description,
          icon: tempList?.weather[0]?.icon,
          id: tempList?.weather[0]?.id,
          main: tempList?.weather[0]?.main,
        },
      });
    }
    return list;
  };

  const FetchApi = useCallback((api, type) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        // console.log("​FetchApi -> data", type, data);

        const tempWeatherList = weatherList;
        const date = moment().utc(data?.dt).format("YYYY-MM-DD HH:mm:ss");
        if (type === "current") {
          tempWeatherList.city.id = data?.id;
          tempWeatherList.city.name = data?.name;
          tempWeatherList.currentWeather.temp = data?.main?.temp;
          tempWeatherList.currentWeather.time = date;
          setWeatherList({ ...tempWeatherList });
          // console.log("​FetchApi -> tempWeatherList", type, tempWeatherList);
        } else {
          tempWeatherList.foreCastList = getFiveDaysWeather(data, 5);
          setWeatherList({ ...tempWeatherList });
          // console.log("​FetchApi -> tempWeatherList", type, tempWeatherList);
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }, []);
  // console.log("​CityTemperature -> WeatherList", currentWeatherData);

  useEffect(() => {
    FetchApi(process.env.REACT_APP_CURRENT_WEATHER_API, "current");
    FetchApi(process.env.REACT_APP_FORECAST_WEATHER_API, "forecast");
  }, []);

  return (
    <StyledCityTemperatureWrapper>
      {console.log(
        "​CityTemperature -> weatherList",
        weatherList.city.name,
        weatherList?.currentWeather?.temp,
        weatherList?.currentWeather?.time
      )}
      <CityHeader
        cityName={weatherList?.city?.name}
        temp={weatherList?.currentWeather?.temp}
        time={moment(weatherList?.currentWeather?.time).format("HH:mm")}
      />
      <ForecastList foreCastList={weatherList?.foreCastList} />
    </StyledCityTemperatureWrapper>
  );
};
export default CityTemperature;

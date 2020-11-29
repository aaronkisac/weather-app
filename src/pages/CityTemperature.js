import React, { useEffect, useState, useCallback } from "react";
import moment from "moment";
import CityHeader from "../components/CityHeader/CityHeader";
import ForecastList from "../components/ForecastList/ForecastList";
import { StyledCityTemperatureWrapper } from "./CityTemperature.styles";
import { timePeriod, initialData } from "../utils/constants";
import { getFiveDaysWeather } from "../helpers/functions";

const CityTemperature = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [weatherList, setWeatherList] = useState(
    JSON.parse(localStorage.getItem("weatherList")) || initialData
  );

  const fetchApi = useCallback(
    (api, type) => {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          const tempWeatherList = weatherList;
          const date = moment().utc(data?.dt).format("YYYY-MM-DD HH:mm:ss");

          if (type === "current") {
            tempWeatherList.city.id = data?.id;
            tempWeatherList.city.name = data?.name;
            tempWeatherList.currentWeather.temp = data?.main?.temp;
            tempWeatherList.currentWeather.time = date;
            setWeatherList({ ...tempWeatherList });
            localStorage.setItem(
              "weatherList",
              JSON.stringify(tempWeatherList)
            );
          } else {
            tempWeatherList.foreCastList = getFiveDaysWeather(data, 5);
            setWeatherList({ ...tempWeatherList });
            localStorage.setItem(
              "weatherList",
              JSON.stringify(tempWeatherList)
            );
          }
        })
        .catch((error) => {
          const tempWeatherList =
            JSON.parse(localStorage.getItem("weatherList")) || initialData;
          setWeatherList({ ...tempWeatherList });
        });
    },
    [weatherList]
  );

  useEffect(() => {
    fetchApi(process.env.REACT_APP_CURRENT_WEATHER_API, "current");
    fetchApi(process.env.REACT_APP_FORECAST_WEATHER_API, "forecast");
  }, [remainingTime === timePeriod]);

  return (
    <StyledCityTemperatureWrapper>
      {weatherList?.city && (
        <CityHeader
          timePeriod={timePeriod}
          remainingTime={remainingTime}
          setRemainingTime={setRemainingTime}
          cityName={weatherList?.city?.name}
          temp={weatherList?.currentWeather?.temp}
          time={moment(weatherList?.currentWeather?.time).format("HH:mm")}
          fetchApi={fetchApi}
        />
      )}
      <ForecastList foreCastList={weatherList?.foreCastList} />
    </StyledCityTemperatureWrapper>
  );
};
export default CityTemperature;

import React, { useEffect, useState, useCallback } from "react";
import moment from "moment";
import axios from "axios";
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
      axios
        .get(api)
        .then((res) => {
          const tempWeatherList = weatherList;
          const date = moment().utc(res.data?.dt).format("YYYY-MM-DD HH:mm:ss");
          if (type === "current") {
            tempWeatherList.city.id = res.data?.id;
            tempWeatherList.city.name = res.data?.name;
            tempWeatherList.currentWeather.temp = res.data?.main?.temp;
            tempWeatherList.currentWeather.time = date;
            setWeatherList({ ...tempWeatherList });
            localStorage.setItem(
              "weatherList",
              JSON.stringify(tempWeatherList)
            );
          } else {
            tempWeatherList.foreCastList = getFiveDaysWeather(res.data, 5);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingTime === timePeriod]);

  return (
    <StyledCityTemperatureWrapper data-testid="cityTemperatureWrapper">
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

import React, { useEffect, useState, useCallback } from "react";
import moment from "moment";
import CityHeader from "../components/CityHeader/CityHeader";
import ForecastList from "../components/ForecastList/ForecastList";
import { StyledCityTemperatureWrapper } from "./CityTemperature.styles";
const timePeriod = 60;
const initialData = {
  city: {},
  currentWeather: {},
  foreCastList: [],
};
const CityTemperature = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [weatherList, setWeatherList] = useState(
    JSON.parse(localStorage.getItem("weatherList")) || initialData
  );

  const addDaysAndFormat = (date, days = 0) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return moment(result).format("DD");
  };

  const getFiveDaysWeather = (weathersList, numberOfDays) => {
    let list = [];
    const hour = moment(weatherList?.currentWeather?.time).format("HH");
    for (let index = 0; index < numberOfDays; index++) {
      const tempList = weathersList.list
        .filter(
          (item) =>
            addDaysAndFormat(item.dt_txt) ===
            addDaysAndFormat(moment(), hour >= 21 ? index + 1 : index)
        )
        .reduce((a, b) => {
          return a.main.temp > b.main.temp ? a : b;
        });

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
          const tempWeatherList = JSON.parse(
            localStorage.getItem("weatherList")
          );
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
      <CityHeader
        timePeriod={timePeriod}
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        cityName={weatherList?.city?.name}
        temp={weatherList?.currentWeather?.temp}
        time={moment(weatherList?.currentWeather?.time).format("HH:mm")}
        fetchApi={fetchApi}
      />
      {weatherList?.foreCastList.length ? (
        <ForecastList foreCastList={weatherList?.foreCastList} />
      ) : (
        "loading"
      )}
    </StyledCityTemperatureWrapper>
  );
};
export default CityTemperature;

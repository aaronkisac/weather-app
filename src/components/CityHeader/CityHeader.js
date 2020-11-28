import React, { useCallback, useEffect, useState } from "react";
import {
  StyledCityHeaderWrapper,
  StyledProgressBarWrapper,
  StyledLabelProgressBar,
  StyledHeaderTextWrapper,
  StyledCityName,
  StyledTime,
  StyledTemp,
} from "./CityHeader.styles";

const CityHeader = ({ cityName, temp, time, fetchApi }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  const calculateTime = useCallback(() => {
    setRemainingTime(remainingTime === 60 ? 0 : remainingTime + 1);
  }, [remainingTime]);

  useEffect(() => {
    fetchApi(process.env.REACT_APP_CURRENT_WEATHER_API, "current");
    fetchApi(process.env.REACT_APP_FORECAST_WEATHER_API, "forecast");
    console.log("fetchApi", remainingTime);
  }, [remainingTime === 60]);

  useEffect(() => {
    setTimeout(() => {
      calculateTime();
    }, 1000);
  }, [calculateTime]);

  return (
    <StyledCityHeaderWrapper>
      <StyledHeaderTextWrapper>
        <StyledCityName>{cityName.toUpperCase()}</StyledCityName>
        <StyledTime> {time} GMT</StyledTime>
        <StyledTemp> {Math.round(temp)}&#xb0;</StyledTemp>
      </StyledHeaderTextWrapper>
      <StyledLabelProgressBar>
        Reloading in {60 - remainingTime}s
      </StyledLabelProgressBar>
      <StyledProgressBarWrapper className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${(100 / 60) * remainingTime}%` }}
          aria-valuenow={`${(100 / 60) * remainingTime}`}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </StyledProgressBarWrapper>
    </StyledCityHeaderWrapper>
  );
};
export default CityHeader;

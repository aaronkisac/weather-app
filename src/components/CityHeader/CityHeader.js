import React, { useCallback, useEffect } from "react";
import {
  StyledCityHeaderWrapper,
  StyledProgressBarWrapper,
  StyledLabelProgressBar,
  StyledHeaderTextWrapper,
  StyledCityName,
  StyledTime,
  StyledTemp,
} from "./CityHeader.styles";

const CityHeader = ({
  cityName,
  temp,
  time,
  remainingTime,
  setRemainingTime,
  timePeriod,
}) => {
  const calculateTime = useCallback(() => {
    setRemainingTime(remainingTime === timePeriod ? 0 : remainingTime + 1);
  }, [remainingTime]);

  useEffect(() => {
    setTimeout(() => {
      calculateTime();
    }, 1000);
  }, [calculateTime]);

  return (
    <StyledCityHeaderWrapper>
      <StyledHeaderTextWrapper>
        <StyledCityName>{cityName?.toUpperCase()}</StyledCityName>
        <StyledTime> {time} GMT</StyledTime>
        <StyledTemp> {Math.round(temp)}&#xb0;</StyledTemp>
      </StyledHeaderTextWrapper>
      <StyledLabelProgressBar>
        Reloading in {timePeriod - remainingTime}s
      </StyledLabelProgressBar>
      <StyledProgressBarWrapper className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${(100 / timePeriod) * remainingTime}%` }}
          aria-valuenow={`${(100 / timePeriod) * remainingTime}`}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </StyledProgressBarWrapper>
    </StyledCityHeaderWrapper>
  );
};
export default CityHeader;

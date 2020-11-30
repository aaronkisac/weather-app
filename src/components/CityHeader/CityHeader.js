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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingTime]);

  useEffect(() => {
    setTimeout(() => {
      calculateTime();
    }, 1000);
  }, [calculateTime]);

  return (
    <StyledCityHeaderWrapper data-testid="cityHeaderWrapper">
      <StyledHeaderTextWrapper>
        <StyledCityName>{cityName?.toUpperCase()}</StyledCityName>
        <StyledTime>
          <span className="first" />
          <span className="second" />
          <span className="third" />
          {time} GMT
          <span className="first" />
          <span className="second" />
          <span className="third" />
        </StyledTime>
        <StyledTemp> {Math.round(temp)}&#xb0;</StyledTemp>
      </StyledHeaderTextWrapper>
      <StyledLabelProgressBar>
        Reloading in{" "}
        <div data-testid="cityHeaderReloadingTime">
          {timePeriod - remainingTime}
        </div>{" "}
        s
      </StyledLabelProgressBar>
      <StyledProgressBarWrapper className="progress">
        <div
          data-testid="cityHeaderProgressBar"
          className="progress-bar"
          role="progressbar"
          style={{ width: `${(100 / timePeriod) * remainingTime}%` }}
          aria-valuenow={(100 / timePeriod) * remainingTime}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </StyledProgressBarWrapper>
    </StyledCityHeaderWrapper>
  );
};
export default CityHeader;

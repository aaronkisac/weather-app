import React, { useCallback, useEffect, useState } from "react";
import {
  StyledCityHeaderWrapper,
  StyledProgressBarWrapper,
  StyledLabelProgressBar,
} from "./CityHeader.styles";

const CityHeader = ({ cityName, temp, time }) => {
  const [remainingTime, setRemainingTime] = useState(0);
  console.log("​CityHeader -> remainingTime", remainingTime);

  const calculateTime = useCallback(() => {
    setRemainingTime(remainingTime === 60 ? 0 : remainingTime + 1);
  }, [remainingTime]);

  useEffect(() => {
    setTimeout(() => {
      calculateTime();
    }, 1000);
  });

  return (
    <StyledCityHeaderWrapper>
      {`${cityName} ${temp} ${time}`}
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

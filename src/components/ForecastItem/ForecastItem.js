import React from "react";
import { StyledForecastItemWrapper } from "./ForecastItem.styles";

const ForecastItem = ({ weather }) => {
  return (
    <StyledForecastItemWrapper>{weather.temp_max} AAABBB</StyledForecastItemWrapper>
  );
};
export default ForecastItem;

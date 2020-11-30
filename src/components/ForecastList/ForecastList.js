import React from "react";
import ForecastItem from "../ForecastItem/ForecastItem";
import { StyledForecastListWrapper } from "./ForecastList.styles";

const ForecastList = ({ foreCastList }) => {
  return (
    <StyledForecastListWrapper data-testid="forecastListWrapper">
      {foreCastList?.map((item, index) => (
        <ForecastItem key={`key-${item.id}`} weather={item} index={index} />
      ))}
    </StyledForecastListWrapper>
  );
};
export default ForecastList;

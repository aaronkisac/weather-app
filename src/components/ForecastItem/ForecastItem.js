import React from "react";
import TempIcon from "../TempIcon/TempIcon";
import {
  StyledForecastItemWrapper,
  StyledForecastItemLeft,
  StyledDay,
  StyledTemp,
} from "./ForecastItem.styles";
import moment from "moment";

const ForecastItem = ({ weather, index }) => {
  return (
    <StyledForecastItemWrapper index={index}>
      <StyledForecastItemLeft>
        <StyledDay>
          {moment(weather.time).format("ddd").toLocaleUpperCase()}
        </StyledDay>
        <StyledTemp>{Math.round(weather.temp_max)}&#xb0;</StyledTemp>
      </StyledForecastItemLeft>
      <TempIcon
        icon={weather.weather.icon}
        description={weather.weather.description}
      />
    </StyledForecastItemWrapper>
  );
};
export default ForecastItem;

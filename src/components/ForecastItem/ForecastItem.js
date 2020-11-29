import React from "react";
import TempIcon from "../TempIcon/TempIcon";
import {
  StyledForecastItemWrapper,
  StyledForecastItemLeft,
  StyledDay,
  StyledTemp,
} from "./ForecastItem.styles";
import moment from "moment";

const ForecastItem = ({ weather }) => {
  return (
    <StyledForecastItemWrapper
      // animate={{ scale: 1, y: 0, stdDeviation: [5, 5, 0] }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
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

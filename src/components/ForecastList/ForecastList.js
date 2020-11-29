import React from "react";
import ForecastItem from "../ForecastItem/ForecastItem";
import { StyledForecastListWrapper } from "./ForecastList.styles";

const ForecastList = ({ foreCastList }) => {
  return (
    <StyledForecastListWrapper
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {foreCastList?.map((item) => (
        <ForecastItem key={`key-${item.id}`} weather={item} />
      ))}
    </StyledForecastListWrapper>
  );
};
export default ForecastList;
